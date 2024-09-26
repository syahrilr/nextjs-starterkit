import { cache } from "react";

import { CalendarDays, Link as LinkIcon, MapPin } from "lucide-react";

import { getUserProfileUseCase } from "@/action/users";
import { ConfigurationPanel } from "@/components/global/configuration-panel";
import { ProfileDetails } from "@/components/profile/profile-detail";
import ProfileImage from "@/components/profile/profile-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { ProfileName } from "./profile-name";

export const getUserProfileLoader = cache(getUserProfileUseCase);

export default async function ProfilePage() {
  return (
    <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <Card className="mx-auto max-w-3xl">
        <CardHeader className="relative">
          <div className="absolute left-0 top-0 h-32 w-full rounded-t-lg bg-gradient-to-r from-blue-500 to-purple-500" />
          <div className="relative px-4 pt-16 sm:px-6">
            <div className="flex items-center">
              <div className="rounded-full border-4 border-white">
                <ProfileImage />
              </div>
              <div className="ml-4">
                <CardTitle className="text-2xl font-bold">
                  <ProfileDetails />
                </CardTitle>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="mt-4">
          <p className="mb-4">
            Passionate about creating elegant solutions to complex problems.
            Always learning and exploring new technologies.
          </p>
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">Node.js</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">GraphQL</Badge>
          </div>
          <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              San Francisco, CA
            </div>
            <div className="flex items-center">
              <LinkIcon className="mr-2 h-5 w-5" />
              <a href="https://janedoe.com" className="hover:underline">
                janedoe.com
              </a>
            </div>
            <div className="flex items-center">
              <CalendarDays className="mr-2 h-5 w-5" />
              Joined March 2020
            </div>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" className="flex items-center">
              Twitter
            </Button>
            <Button variant="outline" className="flex items-center">
              GitHub
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className="mx-auto mt-10 max-w-3xl">
        <ConfigurationPanel title="Edit Profile">
          <ProfileName />
        </ConfigurationPanel>
      </div>
    </div>
  );
}
