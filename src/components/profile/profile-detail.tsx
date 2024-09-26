import { cache } from "react";

import { getUserById, getUserProfileUseCase } from "@/action/users";
import { getCurrentUser } from "@/lib/session";

export const getUserByIdLoader = cache(getUserById);
export const getUserProfileLoader = cache(getUserProfileUseCase);

export async function ProfileDetails() {
  const user = await getCurrentUser();

  if (!user || !user.id) return null;

  const profile = await getUserByIdLoader(user.id);

  const name = await getUserProfileLoader(user.id);

  if (!profile) return null;
  return (
    <div className="mx-auto items-center justify-start">
      <p className="text-s text-foreground">{name.displayName}</p>
      <p className="text-xs text-muted-foreground">{profile.email}</p>
    </div>
  );
}
