import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getSession } from "next-auth/react";

import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

import { usePathname } from "next/navigation";
import {
  HomeIcon,
  UserIcon,
  CalendarIcon,
  BellIcon,
  Bars3Icon,
  CogIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
function navbar() {
  const { data: session, status } = useSession();

  const [isOpen, setIsOpen] = useState(false);
  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);
  const pathname = usePathname(); // Get the current URL path

  return (
    // <>
    //   <div className="hidden md:flex md:w-80 md:flex-col md:fixed md:h-screen bg-white">
    //     <div className="flex-1 flex flex-col pt-0 pb-6 overflow-y-auto border-r border-gray-200">
    //       <Link href="/" className="flex items-center justify-center px-4">
    //         {/* <img src="/cdnlogo.com_msi.png" alt="MSI Logo" className="h-24" /> */}
    //         <Image
    //           src="/cdnlogo.com_msi.png"
    //           className="h-24"
    //           alt="msiLogo"
    //           width={100}
    //           height={100}
    //         />
    //       </Link>

    //       <nav className="mt-8 flex-1 px-4 space-y-4">
    //         <Link
    //           href="/home"
    //           className="flex items-center px-4 py-4 text-gray-700 hover:bg-red-50 rounded-lg cursor-pointer"
    //         >
    //           <HomeIcon className="mr-3 h-5 w-5" />
    //           Home
    //         </Link>

    //         <Link
    //           href="/dashboard"
    //           className="flex items-center px-4 py-4 text-gray-700 hover:bg-red-50 rounded-lg cursor-pointer"
    //         >
    //           <CalendarIcon className="mr-3 h-5 w-5" />
    //           Calendar
    //         </Link>

    //         <Link
    //           href="/dashboard"
    //           className="flex items-center px-4 py-4 text-gray-700 hover:bg-red-50 rounded-lg cursor-pointer"
    //         >
    //           <BellIcon className="mr-3 h-5 w-5" />
    //           Notification
    //         </Link>

    //         <Link
    //           href="/dashboard"
    //           className="flex items-center px-4 py-4 text-gray-700 hover:bg-red-50 rounded-lg cursor-pointer"
    //         >
    //           <Bars3Icon className="mr-3 h-5 w-5" />
    //           More
    //         </Link>
    //       </nav>

    //       <nav className="mt-auto flex-initial px-4 space-y-4">
    //         <Link
    //           href="/dashboard"
    //           className="flex items-center px-4 py-4 text-gray-700 hover:bg-red-50 rounded-lg cursor-pointer"
    //         >
    //           <CogIcon className="mr-3 h-5 w-5" />
    //           Settings
    //         </Link>
    //         {session ? (
    //           <Link
    //             href="/login"
    //             onClick={(e) => {
    //               e.preventDefault(); // Prevent default link behavior
    //               signOut().then(() => {
    //                 window.location.href = "/login"; // Redirect after sign out
    //               });
    //             }}
    //             className="flex items-center px-4 py-4 text-gray-700 hover:bg-red-50 rounded-lg cursor-pointer"
    //           >
    //             <ArrowLeftIcon className="mr-3 h-5 w-5" />
    //             <p>Log out</p>
    //           </Link>
    //         ) : (
    //           <Link
    //             href="/login"
    //             className="flex items-center px-4 py-4 text-gray-700 hover:bg-red-50 rounded-lg cursor-pointer"
    //           >
    //             <ArrowLeftIcon className="mr-3 h-5 w-5" />
    //             <p>Log in</p>
    //           </Link>
    //         )}
    //       </nav>
    //     </div>
    //   </div>

    //   <div className="md:hidden fixed bottom-0 w-full bg-white border-t">
    //     <div className="grid grid-cols-4 gap-1">
    //       <Link
    //         href="/home"
    //         className="flex flex-col items-center py-3 text-red-600"
    //       >
    //         <HomeIcon className="h-6 w-6" />
    //         <span className="text-xs mt-1">Home</span>
    //       </Link>

    //       <Link
    //         href="/dashboard"
    //         className="flex flex-col items-center py-3 text-gray-400"
    //       >
    //         <CalendarIcon className="h-6 w-6" />
    //         <span className="text-xs mt-1">Calendar</span>
    //       </Link>

    //       <Link
    //         href="/dashboard"
    //         className="flex flex-col items-center py-3 text-gray-400"
    //       >
    //         <BellIcon className="h-6 w-6" />
    //         <span className="text-xs mt-1">Notification</span>
    //       </Link>

    //       <Link
    //         href="/dashboard"
    //         className="flex flex-col items-center py-3 text-gray-400"
    //       >
    //         <Bars3Icon className="h-6 w-6" />
    //         <span className="text-xs mt-1">More</span>
    //       </Link>
    //     </div>
    //   </div>
    // </>
    <>
      <div className="hidden md:flex md:w-20 md:flex-col md:fixed md:h-screen bg-white">
        {/* Sidebar */}
        <div
          className={`${
            isOpen ? "w-60" : "w-20"
          } bg-white h-screen  relative duration-300 border border-gray-400 rounded-e-xl`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Logo */}
          {/* <div className="flex items-center gap-x-4">
            <span
              className={`${
                isOpen ? "text-xl font-bold" : "text-2xl"
              } text-white`}
            ></span>
          </div> */}

          {/* Menu Items */}
          <div className="">
            <ul className="py-10 p-5 pl-6">
              <li className="flex items-center  gap-x-4 pl-1 py-4 mb-4 cursor-pointer text-gray-400 hover:bg-red-50 rounded-lg">
                <Link
                  href="/home"
                  className="w-full flex items-center gap-x-4  cursor-pointer text-gray-400"
                >
                  <HomeIcon className="h-6 w-6" />
                  <p
                    className={`${
                      !isOpen && "hidden"
                    } origin-left duration-300`}
                  >
                    Home
                  </p>
                </Link>
              </li>
              <li className="flex items-center  gap-x-4 pl-1 py-4 mb-4 cursor-pointer text-gray-400 hover:bg-red-50 rounded-lg">
                <Link
                  href="/home"
                  className="w-full flex items-center gap-x-4  cursor-pointer text-gray-400"
                >
                  <CalendarIcon className="h-6 w-6" />
                  <p
                    className={`${
                      !isOpen && "hidden"
                    } origin-left duration-300`}
                  >
                    Calendar
                  </p>
                </Link>
              </li>
              <li className="flex items-center  gap-x-4 pl-1 py-4 mb-4 cursor-pointer text-gray-400 hover:bg-red-50 rounded-lg">
                <Link
                  href="/home"
                  className="w-full flex items-center gap-x-4  cursor-pointer text-gray-400"
                >
                  <BellIcon className="h-6 w-6" />
                  <p
                    className={`${
                      !isOpen && "hidden"
                    } origin-left duration-300`}
                  >
                    Notification
                  </p>
                </Link>
              </li>
              <li className="flex items-center  gap-x-4 pl-1 py-4 mb-4 cursor-pointer text-gray-400 hover:bg-red-50 rounded-lg">
                <Link
                  href="/home"
                  className="w-full flex items-center gap-x-4  cursor-pointer text-gray-400"
                >
                  <UserIcon className="h-6 w-6" />
                  <p
                    className={`${
                      !isOpen && "hidden"
                    } origin-left duration-300`}
                  >
                    Profile
                  </p>
                </Link>
              </li>
            </ul>
            <ul className="py-10 p-5 pl-6">
              <li className="flex items-center  gap-x-4 pl-1 py-4 mb-4 cursor-pointer text-gray-400 hover:bg-red-50 rounded-lg">
                <Link
                  href="/home"
                  className="w-full flex items-center gap-x-4  cursor-pointer text-gray-400"
                >
                  <CogIcon className="h-6 w-6" />
                  <p
                    className={`${
                      !isOpen && "hidden"
                    } origin-left duration-300`}
                  >
                    Settings
                  </p>
                </Link>
              </li>

              <li className="flex items-center gap-x-4 p-1 mb-4 cursor-pointer text-gray-400 hover:bg-red-50 rounded-lg">
                {session ? (
                  <Link
                    href="/login"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default link behavior
                      signOut().then(() => {
                        window.location.href = "/login"; // Redirect after sign out
                      });
                    }}
                    className="w-full flex items-center gap-x-4  cursor-pointer text-gray-400"
                  >
                    <ArrowLeftIcon className="h-6 w-6" />
                    <p
                      className={`${
                        !isOpen && "hidden"
                      } origin-left duration-300`}
                    >
                      Log out
                    </p>
                  </Link>
                ) : (
                  <Link
                    href="/login"
                    className="w-full flex items-center gap-x-4  cursor-pointer text-gray-400"
                  >
                    <ArrowLeftIcon className="h-6 w-6" />
                    <p
                      className={`${
                        !isOpen && "hidden"
                      } origin-left duration-300`}
                    >
                      Log in
                    </p>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:hidden fixed bottom-0 w-full bg-white border-t">
        <div className="grid grid-cols-4 gap-1">
          <Link
            href="/home"
            className="flex flex-col items-center py-3 text-red-600"
          >
            <HomeIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Home</span>
          </Link>

          <Link
            href="/dashboard"
            className="flex flex-col items-center py-3 text-gray-400"
          >
            <CalendarIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Calendar</span>
          </Link>

          <Link
            href="/dashboard"
            className="flex flex-col items-center py-3 text-gray-400"
          >
            <BellIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Notification</span>
          </Link>

          <Link
            href="/dashboard"
            className="flex flex-col items-center py-3 text-gray-400"
          >
            <Bars3Icon className="h-6 w-6" />
            <span className="text-xs mt-1">More</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default navbar;
