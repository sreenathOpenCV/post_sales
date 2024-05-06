"use client";

import GlassEffectSearchBar from "@/components/GlassEffectSearchBar";
import { useSideBarToggle } from "@/hooks/use-sidebar-toggle";

export default function Home() {
    
  const { toggleCollapse } = useSideBarToggle();
  const bodyStyle = `
      bg-background flex flex-col h-full overflow-y-auto
      ${toggleCollapse ? 'sm:pl-[13rem]' : 'sm:pl-[4.4rem]'}
    `;

  return (
    <main className={bodyStyle}>
      <GlassEffectSearchBar />  
    </main>
  );
}
