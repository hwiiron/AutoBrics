"use client";

import * as React from "react";
import Link from "next/link";
import data from "@/mocks/sidebarData";
import { useTheme } from "next-themes";
import LogoWhite from "@/public/images/icon-logo-white.svg";
import LogoBlack from "@/public/images/icon-logo-black.svg";
import LogoWhiteS from "@/public/images/icon-logo-s-white.svg";
import LogoBlackS from "@/public/images/icon-logo-s-black.svg";
import { NavMain } from "@/components/sidebar/nav-main";
import { NavUser } from "@/components/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { theme } = useTheme();
  const { state } = useSidebar();

  React.useEffect(() => {
    console.log("Sidebar 상태:", state === "collapsed" ? "접힘" : "펼침");
  }, [state]);

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Link href="/" className="relative w-[105px]">
          {state === "collapsed" ? (
            theme === "light" ? (
              <LogoBlackS className="size-[35px]" />
            ) : (
              <LogoWhiteS className="size-[35px]" />
            )
          ) : theme === "light" ? (
            <LogoBlack className="w-full h-[35px]" />
          ) : (
            <LogoWhite className="w-full h-[35px]" />
          )}
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
