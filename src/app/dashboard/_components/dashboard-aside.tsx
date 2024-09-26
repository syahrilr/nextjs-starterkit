"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Home, Settings } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { dashboardNavbarLinks } from "./menus";

const DashboardAside = () => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          href="/"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Home className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">NextJs Starter</span>
        </Link>
        {dashboardNavbarLinks.map(({ id, label, icon, path }) => (
          <Tooltip key={id}>
            <TooltipTrigger asChild>
              <Link
                href={path}
                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8 ${
                  isActive(path)
                    ? "bg-accent text-accent-foreground hover:text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {icon}
                <span className="sr-only">{label}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{label}</TooltipContent>
          </Tooltip>
        ))}
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/dashboard/settings"
              className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8 ${
                isActive("/dashboard/settings/profile")
                  ? "bg-accent text-accent-foreground hover:text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
};
export default DashboardAside;
