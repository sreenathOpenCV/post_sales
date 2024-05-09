'use client'

import { useSideBarToggle } from "@/hooks/use-sidebar-toggle";
import { ReactNode } from 'react';
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useSession } from 'next-auth/react'
import { useRouter } from "next/navigation";

export default function PageWrapper({ children }: { children: ReactNode }) {
    
    const { toggleCollapse } = useSideBarToggle();
    const bodyStyle = `
    bg-background flex flex-col h-full
    ${toggleCollapse ? 'sm:pl-[14rem]' : 'sm:pl-[4rem]'}
  `;

  const router = useRouter();
  const { data: session, status } = useSession({
      required: true,
      onUnauthenticated() {
          router.push('/LoginForm?callbackUrl=/');
      }
  });
  console.log("datadata",status, session)

  if (status === "authenticated" && session !== undefined || null) {
    return (
        <div className="flex flex-col h-full w-full">
            <Sidebar />
            <div className={bodyStyle}>
                <Header />
                <div className="overflow-hidden overflow-y-auto">
                {children}
                </div>
            </div>
        </div>
    );
} else {
    return (
        <div className="flex flex-col h-full w-full">
            {children}
        </div>
    );
}
}