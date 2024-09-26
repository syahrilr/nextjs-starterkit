import { UserId } from "@/constants/types";
import { db } from "@/lib/prisma";
import crypto from "crypto";

const ITERATIONS = 10000;

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

export async function getAccountByUserId(userId: UserId) {
    const account = await db.account.findFirst({
        where: {
            userId: userId
        }
    })

    return account;
}

export async function createAccount(userId: UserId, password: string) {
    const salt = crypto.randomBytes(128).toString("base64");
    const hash = await hashPassword(password, salt);
    const account = await db.account.create({
        data: {
            userId,
            password: hash,
            salt: salt,
            accountType: "email"
        }
    })
    return account;
}

export async function getAccountByGoogleId(googleId: string) {
    return await db.account.findFirst({
        where: {
            googleId: googleId
        }
    })
}

export async function getAccountByGoogleIdUseCase(googleId: string) {
    return await getAccountByGoogleId(googleId);
}

export async function createAccountViaGoogle(userId: UserId, googleId: string) {
    await db.account.create({
        data: {
            userId: userId,
            googleId: googleId,
            accountType: "google",
        }
    })
}