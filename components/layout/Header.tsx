"use client";

import { UserSwitcher } from "../sidebar/user-switcher";
import usersData from "@/mocks/sidebarData";
import { CalendarDays } from "lucide-react";
import DarkMode from "../darkmode/DarkMode";

function Header() {
  const currentDate = new Date().toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "short",
    day: "numeric",
    weekday: "long",
  });

  return (
    <header className="mb-4 flex h-[70px] items-center justify-between border-b p-4 shadow-sm">
      <div className="flex items-center gap-4">
        <h2 className="text-[20px] font-semibold">Dashboard</h2>

        <div className="flex items-center gap-2 text-sm">
          <CalendarDays className="size-4" />
          <span>{currentDate}</span>
        </div>
      </div>

      <div className="ml-8 w-[220px]">
        <UserSwitcher users={usersData.users} />
      </div>

      <DarkMode />
    </header>
  );
}

export default Header;
