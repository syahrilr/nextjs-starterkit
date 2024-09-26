import Link from "next/link";

import { ChevronLeft, LockIcon } from "lucide-react";

import GlassCard from "@/components/global/glass-card";
import Modal from "@/components/navbar/modal";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <GlassCard>
        <Card className="w-[350px]">
          <Link href={"/"} className={cn(buttonVariants({variant: "ghost"}), " flex items-center justify-start w-1/2 m-2 gap-2 p-2")}>
            <ChevronLeft />
            Back to Home
          </Link>
          <CardHeader>
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
              <LockIcon className="h-6 w-6 text-red-600" />
            </div>
            <CardTitle className="text-center text-2xl font-bold">
              Access Denied
            </CardTitle>
            <CardDescription className="text-center">
              You must be logged in to view this page
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-center text-sm text-gray-600">
              This page contains protected content. Please log in with your
              credentials to access it.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Modal />
          </CardFooter>
        </Card>
      </GlassCard>
    </div>
  );
}
