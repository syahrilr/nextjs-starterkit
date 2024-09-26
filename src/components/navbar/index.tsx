import Link from "next/link";

import { LibraryBig, MenuIcon } from "lucide-react";

import { getCurrentUser } from "@/lib/session";

import GlassSheet from "../global/glass-sheet";
import ProfileImage from "../profile/profile-image";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Menu from "./menu";
import Modal from "./modal";
import { SignOutButton } from "./sign-out-item";
import { ModeToggle } from "./theme-toggle";

const Navbar = async () => {
  const user = await getCurrentUser();

  return (
    <div className="sticky top-0 z-50 w-full px-5 backdrop-blur-lg md:px-6">
      <div className="mx-auto flex w-full max-w-7xl justify-between py-4">
        <div className="flex items-center justify-between">
          <GlassSheet
            triggerClass="lg:hidden"
            trigger={
              <Button
                variant={"ghost"}
                className="hover:bg-transparent hover:text-muted-foreground"
              >
                <MenuIcon size={30} />
              </Button>
            }
          >
            <Menu orientation="mobile" />
            <div className="mt-3 flex-col space-y-3">
              {user ? <SignOutButton /> :(
                <div className="flex w-full items-center justify-center">

                  <Modal className="flex items-center w-full justify-center" />
                </div>
              )}
            </div>
          </GlassSheet>
          <Link
            href={"/"}
            className="flex items-center gap-2 text-sm font-bold md:text-base lg:text-2xl"
          >
            <LibraryBig className="text-blue-600" />
            Next-Starter
          </Link>
        </div>
        <Menu orientation="desktop" />
        <div className="hidden items-center justify-between gap-1 md:flex">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="cursor-pointer">
                  <ProfileImage />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href={"/dashboard"}>Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <SignOutButton />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Modal />
          )}
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
