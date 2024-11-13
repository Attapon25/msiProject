"use client";
import React from "react";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

import {
  ClockIcon,
  CalendarDaysIcon,
  MapPinIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const CheckInOutApp = () => {
  const { data: session, status } = useSession();
  console.log("session", session);
  console.log("status", status);

  const locations = [
    { id: 1, name: "Bananna TheMall Thapra", type: "Mall" },
    { id: 2, name: "P City Center phichit", type: "Shopping Center" },
    { id: 3, name: "Bananna Central Phichit", type: "Mall" },
    { id: 4, name: "PSU University", type: "University" },
  ];

  return (
    <div className="bg-white">
      {/* Main Content */}
      <div className="md:pl-20 flex flex-col flex-1">
        {/* Header */}
        {/* <div>
          {status === "authenticated" && session?.user && (
            <div className="flex items-center space-x-3">
              {session.user.image && (
                <Image
                  src={session.user.image}
                  alt="LogoProfile"
                  width={100}
                  height={100}
                  className="h-20 w-20 rounded-full"
                />
              )}

              <div className="flex flex-col items-start">
                <h1 className="text-lg font-semibold">
                  Hi, {session.user.name}
                </h1>
                <p className="text-sm opacity-80">{session.user.email}</p>
                <p className="text-sm opacity-80">{session.user.role}</p>
              </div>
            </div>
          )}
        </div> */}
        {/* Time Clock Section */}
        <div className="bg-white rounded-se-4xl shadow-sm p-6 h-full pb-24 md:pb-6">
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Date Display */}
              <div className="flex items-center justify-center space-x-3 p-4 border border-primary rounded-3xl">
                <CalendarDaysIcon className="text-primary h-16 w-16" />
                <div>
                  <p className="text-sm text-gray-500">Mon 24 Sep 2024</p>
                  <p className="font-medium">Bananna TheMall Thapra</p>
                </div>
              </div>

              {/* Time Display */}
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center justify-center p-4 border border-primary rounded-3xl">
                  <ClockIcon className="text-primary h-10 w-10" />
                  <div className="ml-4 flex flex-col justify-center min-w-14">
                    <p className="text-sm text-gray-500">Time in</p>
                    <p className="text-lg font-medium">10:03</p>
                  </div>
                </div>
                <div className="flex items-center justify-center p-4 border border-primary rounded-3xl">
                  <ClockIcon className="text-primary h-10 w-10" />
                  <div className="ml-4 flex flex-col justify-center min-w-14">
                    <p className="text-sm text-gray-500">Time Out</p>
                    <p className="text-lg font-medium">19:34</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-6 mt-6">
              <Link
                href="/camera"
                className="flex items-center justify-center space-x-2 bg-primary text-white p-6  rounded-5xl hover:bg-red-700"
              >
                <MapPinIcon className="h-10 w-10" />
                <p>Check In</p>
              </Link>
              <button className="flex items-center justify-center space-x-2 bg-primary text-white p-6  rounded-5xl hover:bg-red-700">
                <ClockIcon className="h-10 w-10" />
                <p>Check Out</p>
              </button>
            </div>
          </div>

          {/* Location List */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-4">Nearby Locations</h2>
            <div className="space-y-3">
              {locations.map((location) => (
                <div
                  key={location.id}
                  className="flex items-center justify-between p-4 bg-white rounded-5xl shadow-sm border border-primary"
                >
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <MapPinIcon className="h-4 w-4 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-medium">{location.name}</p>
                      <p className="text-sm text-gray-500">{location.type}</p>
                    </div>
                  </div>
                  <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-4">Nearby Locations</h2>
            <div className="space-y-3">
              {locations.map((location) => (
                <div
                  key={location.id}
                  className="flex items-center justify-between p-4 bg-white rounded-5xl shadow-sm border border-primary"
                >
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <MapPinIcon className="h-4 w-4 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-medium">{location.name}</p>
                      <p className="text-sm text-gray-500">{location.type}</p>
                    </div>
                  </div>
                  <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckInOutApp;
