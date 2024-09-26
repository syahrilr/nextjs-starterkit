import { db } from "@/lib/prisma";
import { generateRandomToken } from "./util";
import { UserId } from "@/constants/types";

export const TOKEN_LENGTH = 32;
export const TOKEN_TTL = 1000 * 60 * 5;

export async function createVerifyEmailToken(userId: UserId) {
    const token = await generateRandomToken(TOKEN_LENGTH);
    const tokenExpiresAt = new Date(Date.now() + TOKEN_TTL);

    await db.verifyEmailToken.upsert({
        where: {
            id: userId, 
        },
        update: {
            token: token,
            tokenExpiresAt: tokenExpiresAt,
        },
        create: {
            userId: userId,
            token: token,
            tokenExpiresAt: tokenExpiresAt,
        },
    });

    return token;
}