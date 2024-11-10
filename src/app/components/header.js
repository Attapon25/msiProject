import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getSession } from "next-auth/react";
import AuthButton from "./AuthButton";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  CalendarIcon,
  BellIcon,
  Bars3Icon,
  CogIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
function navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current URL path

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
  };
  return (
    <>
      <div className="hidden md:flex md:w-80 md:flex-col md:fixed md:h-screen bg-white">
        <div className="flex-1 flex flex-col pt-0 pb-6 overflow-y-auto border-r border-gray-200">
          <Link href="/" className="flex items-center justify-center px-4">
            {/* <img src="/cdnlogo.com_msi.png" alt="MSI Logo" className="h-24" /> */}
            <Image
              src="/cdnlogo.com_msi.png"
              className="h-24"
              alt="msiLogo"
              width={100}
              height={100}
            />
          </Link>

          <nav className="mt-8 flex-1 px-4 space-y-4">
            <Link
              href="/home"
              className="flex items-center px-4 py-4 text-gray-700 hover:bg-red-50 rounded-lg cursor-pointer"
            >
              <HomeIcon className="mr-3 h-5 w-5" />
              Home
            </Link>

            <Link
              href="/dashboard"
              className="flex items-center px-4 py-4 text-gray-700 hover:bg-red-50 rounded-lg cursor-pointer"
            >
              <CalendarIcon className="mr-3 h-5 w-5" />
              Calendar
            </Link>

            <Link
              href="/dashboard"
              className="flex items-center px-4 py-4 text-gray-700 hover:bg-red-50 rounded-lg cursor-pointer"
            >
              <BellIcon className="mr-3 h-5 w-5" />
              Notification
            </Link>

            <Link
              href="/dashboard"
              className="flex items-center px-4 py-4 text-gray-700 hover:bg-red-50 rounded-lg cursor-pointer"
            >
              <Bars3Icon className="mr-3 h-5 w-5" />
              More
            </Link>
          </nav>

          <nav className="mt-auto flex-initial px-4 space-y-4">
            <Link
              href="/dashboard"
              className="flex items-center px-4 py-4 text-gray-700 hover:bg-red-50 rounded-lg cursor-pointer"
            >
              <CogIcon className="mr-3 h-5 w-5" />
              Settings
            </Link>
            <Link
              href="/login"
              className="flex items-center px-4 py-4 text-gray-700 hover:bg-red-50 rounded-lg cursor-pointer"
            >
              <ArrowLeftIcon className="mr-3 h-5 w-5" />
              <AuthButton />
            </Link>
          </nav>
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

    // <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
    //   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //     <Link href="/" className=" items-center space-x-3 rtl:space-x-reverse">
    //       <Image
    //         src="/msiLogo.svg"
    //         className="h-8"
    //         alt="msiLogo"
    //         width={100}
    //         height={100}
    //       />
    //     </Link>
    //     <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
    //       <button
    //         type="button"
    //         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //       >
    //         <AuthButton />
    //       </button>
    //       <button
    //         onClick={toggleMenu}
    //         type="button"
    //         className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //         aria-controls="navbar-sticky"
    //         aria-expanded={menuOpen ? "true" : "false"}
    //       >
    //         <span className="sr-only">Open main menu</span>
    //         <svg
    //           className="w-5 h-5"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 17 14"
    //         >
    //           <path
    //             stroke="currentColor"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M1 1h15M1 7h15M1 13h15"
    //           />
    //         </svg>
    //       </button>
    //     </div>

    //     {/* Mobile Menu */}
    //     <div
    //       className={`${
    //         menuOpen ? "block" : "hidden"
    //       } items-center justify-between w-full md:flex md:w-auto md:order-1`}
    //       id="navbar-sticky"
    //     >
    //       <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    //         <li>
    //           <Link
    //             href="/home"
    //             className={`block py-2 px-3 rounded md:p-0 ${
    //               pathname === "/home"
    //                 ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
    //                 : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //             }`}
    //             aria-current="page"
    //           >
    //             Home
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             href="/camera"
    //             className={`block py-2 px-3 rounded md:p-0 ${
    //               pathname === "/camera"
    //                 ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
    //                 : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //             }`}
    //           >
    //             Camera
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             href="/map"
    //             className={`block py-2 px-3 rounded md:p-0 ${
    //               pathname === "/map"
    //                 ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
    //                 : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //             }`}
    //           >
    //             Map
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             href="#"
    //             className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //           >
    //             Contact
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default navbar;
