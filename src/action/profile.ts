import { UserId } from "@/constants/types";
import { db } from "@/lib/prisma";
import { Profile } from "@prisma/client";

export async function createProfile(
    userId: UserId,
    displayName: string,
    image?: string
) {
    const profile = await db.profile.createMany({
        data: [
            {
                userId,
                displayName,
                image,
            },
        ],
    })
    return profile;
}
export async function updateProfile(
    userId: UserId,
    updateProfile: Partial<Profile>
) {
    await db.profile.updateMany({
        where: {
            userId,
        },
        data: updateProfile,
    })
}