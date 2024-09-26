"use client"
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <Button
        onClick={() => window.history.back()}
        className="absolute left-4 top-4 flex items-center"
        variant={"ghost"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-1 h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Go back
      </Button>
      <div className="mb-4 flex items-center">
        <div className="mr-4 text-8xl font-bold text-blue-600">404</div>
        <div className="relative rounded border-2 border-blue-600 p-2">
          <div className="absolute left-1/2 top-0 h-3 w-6 -translate-x-1/2 transform rounded-t-sm bg-blue-600"></div>
          <div className="text-3xl font-bold text-blue-600">:P</div>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-blue-600">
        The computer says no.
      </h1>
    </div>
  );
}
