"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import LogoutButton from "../LogoutButton";

export function Navbar() {
  return (
    <div className="flex items-center justify-between">
      <nav className="navbar p-2 flex justify-center items-center">
        <Link href={"/dashboard"}>
          <Button variant="ghost">Home</Button>
        </Link>
        <Link href={"/dashboard/courses"}>
          <Button variant="ghost">Courses</Button>
        </Link>
        <Link href={"/dashboard/assignments"}>
          <Button variant="ghost">Assignments</Button>
        </Link>
      </nav>
      <LogoutButton />
    </div>
  );
}
