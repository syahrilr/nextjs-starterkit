import crypto from "crypto";



import { GoogleUser } from "@/app/api/login/google/callback/route";
import { UserId } from "@/constants/types";
import { db } from "@/lib/prisma";



import { createAccount, createAccountViaGoogle, getAccountByUserId } from "./account";
import { LoginError, PublicError } from "./error";
import { createProfile, updateProfile } from "./profile";
import { createVerifyEmailToken } from "./verify-email";


const ITERATIONS = 10000;

export async function getUserByEmail(email: string) {
  const user = await db.user.findFirst({
    where: {
      email
    },
  });

  return user;
}

export async function getUserById(id: number) {
  const user = await db.user.findFirst({
    where: {
      id,
    },
  });

  return user;
}


export async function signInUseCase(email: string, password: string) {
  
  const user = await getUserByEmail(email);
  console.log(user);
  

  if (!user) {
    throw new LoginError();
  }

  const isPasswordCorrect = await verifyPassword(email, password);

  if (!isPasswordCorrect) {
    throw new LoginError();
  }

  return { id: user.id};
}

async function hashPassword(plainTextPassword: string, salt: string) {
  return new Promise<string>((resolve, reject) => {
    crypto.pbkdf2(
      plainTextPassword,
      salt,
      ITERATIONS,
      64,
      "sha512",
      (err, derivedKey) => {
        if (err) reject(err);
        resolve(derivedKey.toString("hex"));
      }
    );
  });
}

export async function verifyPassword(email: string, plainTextPassword: string) {
  const user = await getUserByEmail(email);

  if (!user) {
    return false;
  }

  const account = await getAccountByUserId(user.id);

  if (!account) {
    return false;
  }

  const salt = account.salt;
  const savedPassword = account.password;

  if (!salt || !savedPassword) {
    return false;
  }

  const hash = await hashPassword(plainTextPassword, salt);
  return account.password == hash;
}

export async function createUser(email: string, username: string) {
  const user = await db.user.create({
    data: {
      username,
      email,
    },
  });

  return user;
}

export async function registerUserUseCase(
  username: string,
  email: string,
  password: string
) {
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    throw new PublicError("User with this email already exists");
  }

  const user = await createUser(email, username);
  await createAccount(user.id, password);

  const displayName = user.username;

  await createProfile(user.id, displayName?.toString() ?? "", "");

  const token = await createVerifyEmailToken(user.id);
  console.log(user, token);

  return { id: user.id, token };
}

export async function createGoogleUserUseCase(googleUser: GoogleUser) {
  let existingUser = await getUserByEmail(googleUser.email);

  if (!existingUser) {
    existingUser = await createUser(googleUser.email, googleUser.name);
  }

  await createAccountViaGoogle(existingUser.id, googleUser.sub);

  await createProfile(existingUser.id, googleUser.name, googleUser.picture);

  return existingUser.id;
}

export async function getProfile(userId: UserId) {
  const profile = await db.profile.findFirst({
    where: {
      userId: userId,
    },
    select: {
      displayName: true,
      image: true,
    },
  });

  return profile;
}

export async function getUserProfileUseCase(userId: UserId) {
  const profile = await getProfile(userId);

  if (!profile) {
    throw new PublicError("User not found");
  }

  return profile;
}

export async function updateProfileNameUseCase(
  userId: UserId,
  displayName: string
) {
  await updateProfile(userId, { displayName });
}

export async function updateProfileBioUseCase(userId: UserId, bio: string) {
  await updateProfile(userId, { bio });
}