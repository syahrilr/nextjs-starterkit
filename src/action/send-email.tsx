import { ReactNode } from "react";

import { Resend } from "resend";

import { env } from "../../env/server";

const resend = new Resend(env.EMAIL_SERVER_PASSWORD);

export async function sendMail(
  email: string,
  subject: string,
  body: ReactNode
) {
  const { error } = await resend.emails.send({
    from: env.EMAIL_FROM,
    to: email,
    subject,
    react: <>{body}</>,
  });

  if (error) {
    throw error;
  }
}
