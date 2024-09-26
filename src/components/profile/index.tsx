import Image from "next/image";
import { cache } from "react";

import { getUserProfileUseCase } from "@/action/users";
import { getCurrentUser } from "@/lib/session";

export const getUserProfileLoader = cache(getUserProfileUseCase);

export async function Profile() {
  const user = await getCurrentUser();

  if (!user) return null;

  const profile = await getUserProfileLoader(user.id);

  return (
    <>
      <Image
        src={profile?.image || ""}
        alt="Profile Image"
        width={100}
        height={100}
        className="rounded-full"
      />
      <div className="mx-auto items-center justify-center p-3">
        {profile && <p>{profile.displayName}</p>}
      </div>
    </>
  );
}
