import Link from "next/link";

import { ChevronLeft } from "lucide-react";

import SignUpForm from "@/components/form/sign-up";
import { Button } from "@/components/ui/button";

const SignUpPage = () => {
  return (
    <div className="mx-auto max-w-[400px]">
      <Link href={"/"} className="mb-4 flex justify-start">
        <Button className="flex items-center p-2" variant={"outline"}>
          <ChevronLeft className="h-6 w-6" />
          Home
        </Button>
      </Link>
      <h5 className="mb-2 text-base font-bold">Register</h5>
      <p className="mb-4 leading-tight text-muted-foreground">
        Sign up to start building your project with our Next.js starter kit!
      </p>
      <SignUpForm />
    </div>
  );
};
export default SignUpPage;
