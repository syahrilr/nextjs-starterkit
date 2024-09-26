"use server"

import { validateRequest } from "@/config/auth";
import { lucia } from "@/config/auth"; 
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signOutAction() {
  const { session } = await validateRequest();

  if (!session) {
    redirect("/");
  }

  await lucia.invalidateSession(session.id);
  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  redirect("/");
}
