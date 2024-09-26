import { createEnv } from "@t3-oss/env-nextjs";
import { z, ZodError } from "zod";

export const env = createEnv({
    server: {
        NODE_ENV: z.enum(["development", "production"]),
        // NEXTAUTH_URL: z.string().url(),
        // NEXTAUTH_SECRET: z.string(),
        // GOOGLE_CLIENT_ID: z.string(),
        // GOOGLE_CLIENT_SECRET: z.string(),
        DATABASE_URL: z.string().min(1),
        EMAIL_SERVER_PASSWORD: z.string().min(1),
        EMAIL_FROM: z.string().min(1),
        HOST_NAME: z.string().min(1),
        EMAIL_SERVER_HOST: z.string().min(1),
        EMAIL_SERVER_PORT: z.string().min(1),
        GOOGLE_CLIENT_SECRET: z.string().min(1),
        GOOGLE_CLIENT_ID: z.string().min(1),
    },
    onValidationError: (error: ZodError) => {
        console.error(
            "❌ Invalid environment variables:",
            error.flatten().fieldErrors
        );
        process.exit(1);
    },
    emptyStringAsUndefined: true,
    // eslint-disable-next-line n/no-process-env
    experimental__runtimeEnv: process.env
});
