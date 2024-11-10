"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for storing error messages

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      // console.log("email", email, "password", password);

      if (result.error) {
        setError("Incorrect password. Please try again.");
      } else {
        router.push("/");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

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
              Sign in to your account using
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center">
              <button
                onClick={() => signIn("google", { callbackUrl: "/" })}
                type="button"
                // onClick={handleGoogleLogin}
                // className="px-4 py-2  w-full border-gray-300 shadow-sm  text-black rounded-md hover:bg-red-700 flex items-center justify-center mb-4"
                className="px-4 py-2  w-full flex items-center justify-center rounded-md border border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm transition duration-200 ease-in-out"
              >
                <Image
                  src="/googleLogo.svg"
                  alt="Google logo"
                  width={20}
                  height={20}
                />
                <p className="px-2">Google</p>
              </button>

              <div className="relative w-full max-w-sm my-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/12 border-t border-gray-300"></div>
                  <span className="mx-2 text-gray-500 text-sm">
                    Or sign in using
                  </span>
                  <div className="w-3/12 border-t border-gray-300"></div>
                </div>
              </div>

              <div className="w-full max-w-sm">
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition duration-200 ease-in-out"
                    required
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition duration-200 ease-in-out"
                    required
                    placeholder="Enter your password"
                  />
                  {error && (
                    <div className="text-sm text-red-500 mt-2">{error}</div>
                  )}
                </div>
                <div className="mb-6 flex justify-between flex-col items-end">
                  <a
                    href="/password/reset"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Forgot password?
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
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default login;
