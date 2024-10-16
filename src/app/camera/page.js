"use client";

// import { useSession, signOut } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// export default function Profile() {
//   const { data: session, status } = useSession();

//   const router = useRouter();

//   useEffect(() => {
//     if (status === "unauthenticated") {
//       router.push("/");
//     }
//   }, [status, router]);

//   // When after loading success and have session, show profile
//   return (
//     status === "authenticated" &&
//     session.user && (
//       <div className="flex h-screen items-center justify-center">
//         <div className="bg-white p-6 rounded-md shadow-md">
//           <p>
//             Welcome, <b>{session.user.name}!</b>
//           </p>
//           <p>Email: {session.user.email}</p>
//           <p>Role: {session.user.role}22</p>
//           <button
//             onClick={() => signOut({ callbackUrl: "/" })}
//             className="w-full bg-blue-500 text-white py-2 rounded"
//           >
//             Logout
//           </button>
//         </div>
//       </div>
//     )
//   );
// }
import React from "react";
import Webcam from "react-webcam";
const videoConstraints = {
  width: 640,
  height: 360,
  facingMode: "user",
};

function page() {
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
  }, [webcamRef]);

  return (
    <div>
      <Webcam
        audio={false}
        height={360}
        screenshotFormat="image/jpeg"
        width={640}
        videoConstraints={videoConstraints}
      >
        {({ getScreenshot }) => (
          <button
            onClick={() => {
              const imageSrc = getScreenshot();
            }}
          >
            Capture photo
          </button>
        )}
      </Webcam>
    </div>
  );
}

export default page;
