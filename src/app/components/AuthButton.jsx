// // components/AuthButton.jsx

// import { useSession, signOut } from "next-auth/react";

// export default function AuthButton() {
//   const { data: session, status } = useSession();

//   return (
//     <>
//       {session ? (
//         <button onClick={() => signOut()}>Log out</button>
//       ) : (
//         <p href="/login">Log in</p>
//       )}
//     </>
//   );
// }
