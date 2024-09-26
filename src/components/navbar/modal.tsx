"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import SignInForm from "../form/sign-in";
import SignUpForm from "../form/sign-up";
import { cn } from "@/lib/utils";

interface ModalProps {
  className?: string;
}

export default function Modal({ className }: ModalProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("signin");

  const openDialog = (tab: "signin" | "signup") => {
    setActiveTab(tab);
    setIsDialogOpen(true);
  };

  return (
    <div className="bg-background">
      <nav className="mx-auto flex items-center justify-between">
        <div>
          <Button
            variant="outline"
            onClick={() => openDialog("signin")}
            className={cn("w-full", className)}
          >
            Sign In
          </Button>
        </div>
      </nav>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab as (value: string) => void}
            className="mt-4"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Register</TabsTrigger>
            </TabsList>
            <div className="my-4 flex flex-col gap-2">
              <h1 className="text-xl font-bold">
                {activeTab === "signin" ? "Sign In" : "Register"}
              </h1>
              <p className="text-s text-muted-foreground">
                {activeTab === "signin"
                  ? "Sign in to your account to continue."
                  : "Create a new account to get started."}
              </p>
            </div>
            <TabsContent value="signin">
              <SignInForm />
            </TabsContent>
            <TabsContent value="signup">
              <SignUpForm />
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </div>
  );
}
