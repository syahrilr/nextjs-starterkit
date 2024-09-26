import Image from "next/image";
import { Suspense } from "react";

import { ConfigurationPanel } from "../../../components/global/configuration-panel";
import { Skeleton } from "../../../components/ui/skeleton";

export async function ProfileImage() {
  return (
    <ConfigurationPanel title="Profile Image">
      <Suspense fallback={<Skeleton className="h-[200px] w-full rounded" />}>
        <div className="flex flex-col sm:items-center">
          <Image
            src={"/profile.png"}
            width={200}
            height={200}
            className="mb-4 h-[200px] w-full rounded-xl object-cover sm:mb-6 sm:h-[100px]"
            alt="Profile image"
          />
          {/* <ProfileImageForm /> */}
        </div>
      </Suspense>
    </ConfigurationPanel>
  );
}
