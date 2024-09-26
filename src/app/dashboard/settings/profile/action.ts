"use server"
import { authenticatedAction } from "@/action/safe-action";
import { updateProfileBioUseCase, updateProfileNameUseCase } from "@/action/users";
import { revalidatePath } from "next/cache"; 
import { z } from "zod";
import sanitizeHtml from "sanitize-html";

export const updateProfileNameAction = authenticatedAction
    .createServerAction()
    .input(
        z.object({
            profileName: z.string(),
        })
    )
    .handler(async ({ input, ctx }) => {
        await updateProfileNameUseCase(ctx.user.id, input.profileName);
        revalidatePath("/profile");
    });

export const updateProfileBioAction = authenticatedAction
    .createServerAction()
    .input(
        z.object({
            bio: z.string(),
        })
    )
    .handler(async ({ input, ctx }) => {
        await updateProfileBioUseCase(ctx.user.id, sanitizeHtml(input.bio));
        revalidatePath("/profile");
    });