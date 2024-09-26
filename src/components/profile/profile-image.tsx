import Image from "next/image";
import { cache } from "react";

import { getUserProfileUseCase } from "@/action/users";
import { getCurrentUser } from "@/lib/session";

import { Avatar, AvatarFallback } from "../ui/avatar";

export const getUserProfileLoader = cache(getUserProfileUseCase);

const ProfileImage = async () => {
  const user = await getCurrentUser();

  if (!user) return null;

  const profile = await getUserProfileLoader(user.id);

  const placeholder =
    profile.displayName?.substring(0, 2).toUpperCase() || "NS";

  return (
    <div>
  <Avatar className="hover:scale-105 hover:ring-2 hover:ring-primary transition-transform duration-300 ease-in-out cursor-pointer">
    {profile.image ? (
      <Image
        src={profile.image || ""}
        alt="Profile Image"
        width={100}
        height={100}
        className="h-full w-full rounded-full"
      />
    ) : (
      <AvatarFallback>{placeholder}</AvatarFallback>
    )}
  </Avatar>
</div>
  );
};

export default ProfileImage;
