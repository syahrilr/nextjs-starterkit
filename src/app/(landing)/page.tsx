import Link from "next/link";

import {
  CheckCircle,
  Fingerprint,
  Github,
  Globe,
  Pyramid,
  Zap,
} from "lucide-react";

import CopySelector from "@/components/global/copy-selector-button";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    title: "Next.js 14",
    description:
      "Leverage the latest Next.js features with the new App Router for better performance and developer experience.",
    icon: Zap,
  },
  {
    title: "TypeScript Ready",
    description:
      "Built with TypeScript for improved code quality, better tooling, and enhanced developer productivity.",
    icon: CheckCircle,
  },
  {
    title: "Tailwind CSS",
    description:
      "Rapidly build modern websites without ever leaving your HTML, using the power of Tailwind CSS.",
    icon: Globe,
  },
  {
    title: "ESLint & Prettier",
    description:
      "Maintain code quality and consistency with pre-configured ESLint and Prettier setups.",
    icon: CheckCircle,
  },
  {
    title: "Shadcn UI Components",
    description:
      "Beautiful, accessible, and customizable UI components to build your applications faster.",
    icon: Zap,
  },
  {
    title: "SEO Optimized",
    description:
      "Built-in SEO components and best practices to help your site rank better in search engines.",
    icon: Globe,
  },
  {
    title: "Lucia Auth",
    description:
      "Secure and flexible authentication with Lucia for seamless user management in your applications.",
    icon: Fingerprint,
  },
  {
    title: "Prisma ORM",
    description:
      "Powerful and type-safe data modeling with Prisma ORM for efficient database management.",
    icon: Pyramid,
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="text-center">
          <div className="mb-8 flex justify-center">
            <Zap className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Jumpstart Your Next.js Project
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-muted-foreground">
            A powerful, opinionated starter kit for building modern web
            applications with Next.js, TypeScript,Tailwind CSS, Shadcn UI and
            Lucia Auth.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" asChild>
              <Link href="#get-started">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://github.com">
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </Link>
            </Button>
          </div>
        </section>

        <section id="features" className="mt-20">
          <h2 className="mb-12 text-center text-3xl font-bold">Features</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <feature.icon className="mr-2 h-6 w-6 text-blue-600" />
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="get-started" className="mt-20">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Get Started in Minutes</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-inside list-decimal space-y-4">
                <li>
                  Clone to repository :
                  <CopySelector description="git clone https://github.com/your-repo/nextjs-starter.git" />
                </li>
                <li>
                  Install dependencies:
                  <CopySelector description="cd nextjs-starter && npm install" />
                </li>
                <li>
                  Start the development server:
                  <CopySelector description="npm run dev" />
                </li>
              </ol>
              <div className="mt-6">
                <Button size="lg" asChild>
                  <Link href="https://github.com">Get the Starter Kit</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      <footer className="mt-20 w-full rounded bg-opacity-75 p-6 px-4 py-12 shadow-lg backdrop-blur-md sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Zap className="h-8 w-8" />
              <span className="text-xl font-bold">Next.js Starter</span>
            </div>
            <div className="flex space-x-6">
              <Link href="https://github.com" className="hover:text-gray-300">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <span className="sr-only">Website</span>
                <Globe className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-muted-foreground">
            © {new Date().getFullYear()} Next.js Starter. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
