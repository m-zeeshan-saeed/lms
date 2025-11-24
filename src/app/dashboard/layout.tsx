import React from "react";
import RootLayout from "../layout";
import { Navbar } from "@/components/dashboard/navbar";
import { Separator } from "@/components/ui/separator";

export default function dashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="px-6">
        <Navbar />
        <Separator />
      </div>
      {children}
    </>
  );
}
