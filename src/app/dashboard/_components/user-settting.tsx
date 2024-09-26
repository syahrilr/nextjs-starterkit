"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast"; 

const profileSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  bio: z
    .string()
    .max(160, { message: "Bio must not exceed 160 characters." })
    .optional(),
  location: z.string().optional(),
  website: z
    .string()
    .url({ message: "Please enter a valid URL." })
    .optional()
    .or(z.literal("")),
  birthdate: z.string().optional(),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

export default function UserProfileSettings() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "John Doe",
      email: "john.doe@example.com",
      bio: "I'm a software developer passionate about creating user-friendly applications.",
      location: "San Francisco, CA",
      website: "https://johndoe.com",
      birthdate: "1990-01-01",
    },
  });

  const onSubmit = async (data: ProfileFormValues) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    toast({
      title: "Profile updated",
      description: "Your profile has been successfully updated.",
    });
    console.log(data);
  };

  return (
    <div className="container mx-auto max-w-2xl p-6">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Edit Profile</CardTitle>
          <CardDescription>
            Update your personal information and profile settings.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage
                  src="/placeholder.svg?height=80&width=80"
                  alt="Profile picture"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Button variant="outline">Change Avatar</Button>
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" {...register("name")} className="w-full" />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                className="w-full"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea id="bio" {...register("bio")} className="h-24 w-full" />
              {errors.bio && (
                <p className="text-sm text-red-500">{errors.bio.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                {...register("location")}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input id="website" {...register("website")} className="w-full" />
              {errors.website && (
                <p className="text-sm text-red-500">{errors.website.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="birthdate">Birthdate</Label>
              <Input
                id="birthdate"
                type="date"
                {...register("birthdate")}
                className="w-full "
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="language">Preferred Language</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                  <SelectItem value="ja">Japanese</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
            onClick={handleSubmit(onSubmit)}
          >
            {isLoading ? "Updating..." : "Update Profile"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
