"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useServerAction } from "zsa-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

import { LoaderButton } from "@/components/ui/loader-button"; 
import { updateProfileNameAction } from "./action";

const updateProfileNameSchema = z.object({
  profileName: z.string().min(1),
});

export function ProfileNameForm({ profileName }: { profileName: string }) {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof updateProfileNameSchema>>({
    resolver: zodResolver(updateProfileNameSchema),
    defaultValues: {
      profileName: profileName,
    },
  });

  const { execute: updateProfileName, isPending } = useServerAction(
    updateProfileNameAction,
    {
      onSuccess: () => {
        toast({
          title: "Name Updated",
          description: "Name updated successfully.",
        });
        form.reset();
      },
      onError: ({ err }) => {
        toast({
          title: "Error",
          description: err.message || "Failed to update profile name.",
          variant: "destructive",
        });
      },
    }
  );

  const onSubmit: SubmitHandler<z.infer<typeof updateProfileNameSchema>> = (
    values
  ) => {
    updateProfileName(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-1 gap-2 space-y-8"
      >
        <FormField
          control={form.control}
          name="profileName"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Display Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder={profileName}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <LoaderButton variant={"secondary"} isLoading={isPending}>Save</LoaderButton>
      </form>
    </Form>
  );
}
