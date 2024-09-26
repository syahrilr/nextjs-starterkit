import { Suspense } from "react";

import { getUserProfileLoader } from "@/components/profile"; 
import { getCurrentUser } from "@/lib/session";

import { Skeleton } from "@/components/ui/skeleton"; 
import { ProfileNameForm } from "./profile-name-form";

export async function ProfileName() {
  const user = await getCurrentUser();
  if (!user) return null;

  const profile = await getUserProfileLoader(user.id);

  return (
    <Suspense fallback={<Skeleton className="h-[200px]rounded w-full" />}>
      <ProfileNameForm profileName={profile.displayName ?? ""} />
    </Suspense>
  );
}
