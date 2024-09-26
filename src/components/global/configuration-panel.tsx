import { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function ConfigurationPanel({
  title,
  children,
  variant = "default",
}: {
  title: string;
  children: ReactNode;
  variant?: "destructive" | "default";
}) {
  return (
    <div
      className={cn(
        "rounded-lg border",
        {
          "border-red-500": variant === "destructive",
        }
      )}
    >
      <div className="rounded-t-md border-b sm:px-6 md:py-3 bg-primary">
        <span className="mb-4 text-base font-medium sm:text-lg">{title}</span>
      </div>
      <div className="p-4 sm:px-6">
        <div className="mb-4 flex flex-col gap-4 text-sm sm:text-base">
          <div className="flex gap-8">{children}</div>
        </div>
      </div>
    </div>
  );
}
