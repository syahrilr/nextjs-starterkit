import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/providers";

import "./globals.css";

const inter = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Next Js Starter",
  description:
    "Start your web development journey with our powerful and flexible Next.js starter project, built with Tailwind CSS and enhanced with beautiful UI components from shadcn UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>"
        ></link>
      </head>
      <body className={`${inter.className} min-h-screen antialiased`}>
        <Providers>
          <div className="flex w-full flex-col">{children}</div>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
