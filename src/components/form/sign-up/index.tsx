"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Terminal } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useServerAction } from "zsa-react";

import { signUpAction } from "@/action/auth-action";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoaderButton } from "@/components/ui/loader-button";
import { SignUpSchema } from "@/constants/form";
import { useToast } from "@/hooks/use-toast";

const SignUpForm = () => {
  const { toast } = useToast();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPassVisible, setIsConfirmPassVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };
  const toogleConfirmPass = () => {
    setIsConfirmPassVisible((prev) => !prev);
  };

  const { execute, isPending, error } = useServerAction(signUpAction, {
    onError({ err }) {
      toast({
        title: "Something went wrong",
        description: err.message,
        variant: "destructive",
      });
    },
    onSuccess() {
      toast({
        title: "Success",
        description: "Account created successfully",
      });
    },
  });

  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  const onSubmit = (values: z.infer<typeof SignUpSchema>) => {
    execute(values);
  };

  return (
    <div className="space-y-6">
      <div className="mx-auto max-w-[400px] space-y-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="w-full"
                      placeholder="Enter your username"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="w-full"
                      placeholder="Enter your email"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        className="w-full"
                        placeholder="Enter your password"
                        type={isPasswordVisible ? "text" : "password"}
                      />
                      <Button
                        type="button"
                        variant={"ghost"}
                        onClick={togglePasswordVisibility}
                        className="absolute right-2 top-1/2 -translate-y-1/2 transform hover:bg-transparent hover:text-muted-foreground"
                        aria-label="Toggle password visibility"
                      >
                        {isPasswordVisible ? (
                          <Eye className="h-5 w-5" />
                        ) : (
                          <EyeOff className="h-5 w-5" />
                        )}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="passwordConfirmation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        className="w-full"
                        placeholder="Enter Confirm your Password"
                        type={isConfirmPassVisible ? "text" : "password"}
                      />
                      <Button
                        type="button"
                        variant={"ghost"}
                        onClick={toogleConfirmPass}
                        className="absolute right-2 top-1/2 -translate-y-1/2 transform hover:bg-transparent hover:text-muted-foreground"
                        aria-label="Toggle password visibility"
                      >
                        {isConfirmPassVisible ? (
                          <Eye className="h-5 w-5" />
                        ) : (
                          <EyeOff className="h-5 w-5" />
                        )}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {error && (
              <Alert variant="destructive">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Uh-oh, we couldn&apos;t log you in</AlertTitle>
                <AlertDescription>{error.message}</AlertDescription>
              </Alert>
            )}

            <LoaderButton
              isLoading={isPending}
              className="w-full"
              type="submit"
            >
              Register
            </LoaderButton>
          </form>
        </Form>
      </div>
    </div>
  );
};
export default SignUpForm;
