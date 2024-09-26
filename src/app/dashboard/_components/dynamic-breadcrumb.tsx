"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";



import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";



export default function DynamicBreadcrumb() {
  const pathname = usePathname();
  const pathArray = pathname.split("/").filter((segment) => segment); 

  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        {pathArray.map((segment, index) => {
          const href = `/${pathArray.slice(0, index + 1).join("/")}`; 
          const isLast = index === pathArray.length - 1;

          return (
            <React.Fragment key={index}>
              {index > 0 && <BreadcrumbSeparator />}{" "}
         
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="capitalize">
                    {(decodeURIComponent(segment))}
                  </BreadcrumbPage> 
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={href} className="capitalize">
                      {(decodeURIComponent(segment))}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}