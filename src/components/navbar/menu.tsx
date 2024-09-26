import Link from "next/link";

import { getCurrentUser } from "@/lib/session";
import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "../ui/button";

type MenuProps = {
  orientation: "mobile" | "desktop";
};

const navLinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Features",
    url: "/features",
  },
];

const Menu = async ({ orientation }: MenuProps) => {
  const user = await getCurrentUser();

  const links = [...navLinks];

  if (user) {
    links.push({
      title: "Dashboard",
      url: "/dashboard",
    });
  }

  switch (orientation) {
    case "desktop":
      return (
        <div className="hidden gap-4 lg:flex">
          {links.map((link) => (
            <Button key={link.url} variant={"link"} asChild>
              <Link
                href={link.url}
                className="font-medium text-primary dark:text-white"
              >
                {link.title.toUpperCase()}
              </Link>
            </Button>
          ))}
        </div>
      );
    case "mobile":
      return (
        <div className="mt-10 flex flex-col space-y-3">
          {links.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                "w-full ease-in-out duration-300"
              )}
            >
              {link.title}
            </Link>
          ))}
        </div>
      );
    default:
      return <></>;
  }
};

export default Menu;
