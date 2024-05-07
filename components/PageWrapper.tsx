'use client'

import { useSideBarToggle } from "@/hooks/use-sidebar-toggle";
import { ReactNode } from 'react';
import Header from "./Header";

export default function PageWrapper({ children }: { children: ReactNode }) {
    
    const { toggleCollapse } = useSideBarToggle();
    const bodyStyle = `
    bg-background flex flex-col h-full overflow-y-auto
    ${toggleCollapse ? 'sm:pl-[14rem]' : 'sm:pl-[4rem]'}
  `;

    return (
        <>
        <div className={bodyStyle}>
        <Header />
            {children}
        </div>
        </>
    );
}