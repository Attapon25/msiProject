// components/AuthButton.jsx

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function AuthButton() {
  const { data: session, status } = useSession();

  return (
    <>
      {session ? (
        <button onClick={() => signOut()}>Log out</button>
      ) : (
        <Link href="/login">Log in</Link>
      )}
    </>
  );
}
