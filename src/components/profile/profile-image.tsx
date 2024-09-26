import { cache } from "react";

import { getUserProfileUseCase } from "@/action/users";
import { getCurrentUser } from "@/lib/session";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";

export const getUserProfileLoader = cache(getUserProfileUseCase);

const ProfileImage = async () => {
  const user = await getCurrentUser();

  if (!user) return null;

  const profile = await getUserProfileLoader(user.id);

  const placeholder =
    profile.displayName?.substring(0, 2).toUpperCase() || "NS";

  return (
    <div>
      <Avatar>
        {profile.image && (
          <Image
            src={profile.image || ""}
            alt="Profile Image"
            width={100}
            height={100}
            className="rounded-full w-full h-full"
          />
        )}
        <AvatarFallback>{placeholder}</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default ProfileImage;
