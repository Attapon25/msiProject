import React from "react";
import Image from "next/image";

function passwordReset() {
  return (
    <div className="relative w-full h-[100vh]">
      <Image
        src="/Rectangle.svg"
        alt="Background image"
        fill
        className="object-cover"
        style={{ top: "-40dvh" }}
      />

      {/* Popup Login Form */}
      <div className="fixed inset-0 flex items-center justify-center  z-50">
        <div className="bg-white p-6 rounded-2xl shadow-lg w-80">
          <div className="flex flex-col items-center">
            <Image
              src="/msiLogo.svg"
              alt="MSI logo"
              width={100}
              height={100}
              className="m-4 text-center"
            />
            <h2 className="text-md font-semibold mb-4 text-center">
              Reset Password
            </h2>
          </div>
          <form>
            <div className="flex flex-col items-center">
              <div className="w-full max-w-sm">
                <div className="mb-2">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    E-Mail Address
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="block w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition duration-200 ease-in-out"
                    required
                  />
                </div>
                <div className="mb-6 flex justify-between flex-col items-end">
                  <a
                    href="/login"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Sign in
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-between mb-4 flex-col items-end">
              <button
                type="submit"
                // className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                className="block w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm bg-primary text-white focus:border-primary-500 focus:ring-primary-500 sm:text-sm transition duration-200 ease-in-out"
              >
                Sent Password Reset Link
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default passwordReset;
