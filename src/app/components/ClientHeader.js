"use client";

import { usePathname } from "next/navigation";
import Header from "./header";

export default function ClientHeader() {
  const pathname = usePathname(); // Get the current path

  return (
    <>
      {pathname !== "/login" && pathname !== "/password/reset" && <Header />}
      {/* Conditionally render Header */}
    </>
  );
}
