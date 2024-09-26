import crypto from "crypto";

export const AUTHENTICATION_ERROR_MESSAGE =
    "You must be logged in to view this content";

export const PRIVATE_GROUP_ERROR_MESSAGE =
    "You do not have permission to view this group";

export const AuthenticationError = class AuthenticationError extends Error {
    constructor() {
        super(AUTHENTICATION_ERROR_MESSAGE);
        this.name = "AuthenticationError";
    }
};



export const NotFoundError = class NotFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "NotFoundError";
    }
};

export async function generateRandomToken(length: number) {
    const buf = await new Promise<Buffer>((resolve, reject) => {
        crypto.randomBytes(Math.ceil(length / 2), (err, buf) => {
            if (err !== null) {
                reject(err);
            } else {
                resolve(buf);
            }
        });
    });

    return buf.toString("hex").slice(0, length);
}