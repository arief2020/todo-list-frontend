// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";

import SideBar from "@/components/pages/dashboard/SideBar";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Todo List",
//   description: "Todo List Website",
// };

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full h-screen">
      <SideBar />
      {children}
    </div>
  );
}
