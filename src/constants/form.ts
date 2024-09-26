import { z } from "zod"


export const SignInSchema = z.object({
    email: z.string().email("You must give a valid email"),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }).max(64, { message: "Password must be at most 64 characters long" }).refine((value) => /^[a-zA-Z0-9_.-]*$/.test(value ?? ""), "password should contain only alphabets and numbers"),

})


export const SignUpSchema = z.object({
    username: z.string().min(3, { message: "Username must be at least 3 characters long" }).max(64, { message: "Username must be at most 64 characters long" }),
    email: z.string().email("You must give a valid email"),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }).max(64, { message: "Password must be at most 64 characters long" }).refine((value) => /^[a-zA-Z0-9_.-]*$/.test(value ?? ""), "password should contain only alphabets and numbers"),
    passwordConfirmation: z.string().min(8),
}).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ["passwordConfirmation"],
});