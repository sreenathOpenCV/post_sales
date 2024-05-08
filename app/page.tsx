"use client";

import Header from "@/components/Header";
import TableUI from "@/components/TableUI";
import { useSideBarToggle } from "@/hooks/use-sidebar-toggle";

export default function Home() {
  return (
    <main>
    <TableUI path={''} manageData={''} activeStatus={true}/>
    </main>
  );
}
