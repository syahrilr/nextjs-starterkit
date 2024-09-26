"use client";

import { LogOut } from "lucide-react";
import * as NProgress from "nprogress";

import { Button } from "@/components/ui/button";

import { signOutAction } from "./actions";

export function SignOutButton() {
  return (
    <Button
      className="flex cursor-pointer items-center w-full"
      variant={"ghost"}
      onClick={async () => {
        NProgress.start();
        await signOutAction();
        NProgress.done();
      }}
    >
      <LogOut className="mr-2 h-4 w-4" />
      Sign Out
    </Button>
  );
}
