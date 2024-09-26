import Link from "next/link";

import { Home, PanelLeft, Settings } from "lucide-react";

import { SignOutButton } from "@/components/navbar/sign-out-item";
import { ModeToggle } from "@/components/navbar/theme-toggle";
import { ProfileDetails } from "@/components/profile/profile-detail";
import ProfileImage from "@/components/profile/profile-image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import DynamicBreadcrumb from "./dynamic-breadcrumb";
import { dashboardNavbarLinks } from "./menus";
import { SearchInput } from "./search";

const DashboardNavbar = () => {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-2 px-6 backdrop-blur-lg">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/"
              className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
            >
              <Home className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">NextJs Starter</span>
            </Link>
            {dashboardNavbarLinks.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <Settings />
              <span className="">Settings</span>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <DynamicBreadcrumb />
      <SearchInput />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div>
            <ProfileImage />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>
            <ProfileDetails />
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/dashboard/settings/profile"}>Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <SignOutButton />
        </DropdownMenuContent>
      </DropdownMenu>
      <ModeToggle />
    </header>
  );
};

export default DashboardNavbar;
