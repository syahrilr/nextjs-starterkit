"use server";
import { SignInSchema, SignUpSchema } from "@/constants/form";
import { rateLimitByKey } from "@/lib/limiter";
import { redirect } from "next/navigation";
import { setSession } from "../lib/session";
import { unauthenticatedAction } from "./safe-action";
import { registerUserUseCase, signInUseCase } from "./users";

export const signInAction = unauthenticatedAction.createServerAction()
    .input(SignInSchema)
    .handler(async ({ input }) => {
        await rateLimitByKey({ key: input.email, limit: 3, window: 10000 })
        const user = await signInUseCase(input.email, input.password)
        await setSession(user.id)
        redirect("/dashboard")
    })

export const signUpAction = unauthenticatedAction
    .createServerAction()
    .input(SignUpSchema)
    .handler(async ({ input }) => {
        const user = await registerUserUseCase(input.username, input.email, input.password);
        await setSession(user.id);
        return redirect("/dashboard");  
    });
