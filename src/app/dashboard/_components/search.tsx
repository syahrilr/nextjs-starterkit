"use client";

import Link from "next/link";
import * as React from "react";

import {
  ChartArea,
  Home,
  LayoutDashboard,
  Search,
  Settings,
  User,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";

// Adjust based on your Input component import

export function SearchInput() {
  const [open, setOpen] = React.useState(false);
  //   const [query, setQuery] = React.useState("");

  const handleFocus = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="relative ml-auto flex-1 md:grow-0">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          onFocus={handleFocus}
          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        />
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search..."
          //   onValueChange={(e) => setQuery(e.target.value)}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Link href={"/"} className="flex">
                <Home className="mr-2 h-4 w-4" />
                <span>Landing Page</span>
              </Link>
            </CommandItem>
            <CommandItem>
              <Link href={"/dashboard"} className="flex">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </Link>
            </CommandItem>
            <CommandItem>
              <Link href={"/dashboard/analytics"} className="flex">
                <ChartArea className="mr-2 h-4 w-4" />
                <span>Analytics</span>
              </Link>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <Link href={"/dashboard/settings/profile"} className="flex">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </Link>
            </CommandItem>
            <CommandItem>
              <Link href={"/dashboard/settings"} className="flex">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </Link>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
