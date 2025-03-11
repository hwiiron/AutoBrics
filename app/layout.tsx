import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/darkmode/theme-provider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";

export const metadata: Metadata = {
  title: "AutoBrics - Dashboard",
  description: "AI 기술을 활용한 섬유 결함 검수 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />

            <SidebarInset>{children}</SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
