"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });

    // Redirect user to login
    router.push("/login");
  }

  return <Button onClick={handleLogout}>Logout</Button>;
}
