import Link from "next/link";

import { ChevronLeft } from "lucide-react";

import SignInForm from "@/components/form/sign-in";
import { Button } from "@/components/ui/button";

const SignInPage = () => {
  return (
    <div className="mx-auto max-w-[400px]">
      <Link href={"/"} className="mb-4 flex justify-start z-40">
        <Button className="flex items-center p-2" variant={"outline"}>
          <ChevronLeft className="h-6 w-6" />
          Home
        </Button>
      </Link>
      <h5 className="mb-2 text-base font-bold">Sign In</h5>
      <p className="mb-4 leading-tight text-muted-foreground">
        Welcome back! Sign In to access your account and resume building with
        our Next.js starter kit.
      </p>
      <SignInForm />
    </div>
  );
};
export default SignInPage;
