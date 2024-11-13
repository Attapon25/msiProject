"use client";

import { usePathname } from "next/navigation";
import Header from "./header";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
export default function ClientHeader() {
  const pathname = usePathname(); // Get the current path
  const { data: session, status } = useSession();
  console.log("session", session);
  console.log("status", status);
  return (
    <>
      <div className="bg-primary text-white p-5 flex items-center justify-center w-full h-24 mx-auto sticky top-0 z-10">
        <Image
          src="/cdnlogo.com_msi.png"
          className="hidden md:flex h-24 w-auto"
          alt="msiLogo"
          width={100}
          height={100}
        />
        <div className="text-center flex-1">
          {status === "authenticated" && session?.user && (
            <div className="flex items-center justify-center space-x-3">
              {session.user.image && (
                <Image
                  src={session.user.image}
                  alt="LogoProfile"
                  width={100}
                  height={100}
                  className=" md:h-16 md:w-16 h-14 w-14 rounded-full"
                />
              )}

              <div className="flex flex-col items-start">
                <h1 className="text-base md:text-lg font-semibold">
                  Hi, {session.user.name}
                </h1>
                <p className="text-xs md:text-sm opacity-80">
                  {session.user.email}
                </p>
                <p className="text-xs md:text-sm opacity-80">
                  {session.user.role}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {pathname !== "/login" && pathname !== "/password/reset" && <Header />}
      {/* Conditionally render Header */}
    </>
  );
}
