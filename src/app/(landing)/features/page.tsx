import {
  CheckCircle,
  Code,
  Fingerprint,
  Globe,
  Layout,
  Pyramid,
  Zap,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-center text-4xl font-bold">
          Next.js Starter Kit Features
        </h1>
        <p className="mx-auto mb-12 max-w-3xl text-center text-xl text-muted-foreground">
          Explore the powerful features that make our Next.js Starter Kit the
          perfect foundation for your next project.
        </p>

        <Tabs defaultValue="core" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
            <TabsTrigger value="core">Core Features</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="developer">Developer Experience</TabsTrigger>
            <TabsTrigger value="customization">Customization</TabsTrigger>
          </TabsList>
          <TabsContent value="core">
            <div className="mt-6 grid gap-6">
              {coreFeatures.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="performance">
            <div className="mt-6 grid gap-6">
              {performanceFeatures.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="developer">
            <div className="mt-6 grid gap-6">
              {developerFeatures.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="customization">
            <div className="mt-6 grid gap-6">
              {customizationFeatures.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-xl">
          <Icon className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

const coreFeatures = [
  {
    title: "Next.js 14",
    description:
      "Leverage the latest Next.js features with the new App Router for better performance and developer experience.",
    icon: Layout,
  },
  {
    title: "TypeScript Ready",
    description:
      "Built with TypeScript for improved code quality, better tooling, and enhanced developer productivity.",
    icon: Code,
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

const performanceFeatures = [
  {
    title: "Optimized Build Process",
    description:
      "Streamlined build configuration for faster compilation and smaller bundle sizes.",
    icon: Zap,
  },
  {
    title: "Automatic Code Splitting",
    description:
      "Next.js automatically splits your code into smaller chunks for faster loading times.",
    icon: CheckCircle,
  },
];

const developerFeatures = [
  {
    title: "ESLint & Prettier",
    description:
      "Maintain code quality and consistency with pre-configured ESLint and Prettier setups.",
    icon: CheckCircle,
  },
  {
    title: "Hot Module Replacement",
    description:
      "See your changes in real-time without losing application state during development.",
    icon: Zap,
  },
];

const customizationFeatures = [
  {
    title: "Tailwind CSS",
    description:
      "Rapidly build modern websites without ever leaving your HTML, using the power of Tailwind CSS.",
    icon: Globe,
  },
  {
    title: "Shadcn UI Components",
    description:
      "Beautiful, accessible, and customizable UI components to build your applications faster.",
    icon: Layout,
  },
  {
    title: "Theming Support",
    description:
      "Easy-to-use theming system for creating unique designs that match your brand.",
    icon: Globe,
  },
];
