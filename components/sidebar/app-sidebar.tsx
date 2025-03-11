"use client";

import * as React from "react";
import Link from "next/link";
import data from "@/mocks/sidebarData";
import { NavMain } from "@/components/sidebar/nav-main";
import { NavUser } from "@/components/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Logo from "@/public/images/icon-logo-gradient.svg";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Link href={"/"} className="relative w-[120px]">
          <Logo className="w-full h-[40px]" />
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <NavMain title="Menu" items={data.nav} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
