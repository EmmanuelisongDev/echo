'use client'
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  let isLoggedIn: JSX.Element | null = <button onClick={() => signIn()}>Login</button>;

  if (session?.user) {
    isLoggedIn = <Image className="rounded-full" height={30} width={30} src={session?.user?.image} alt={"pro"} />;
  }

  return (
    <div className="flex items-center align-middle bg-[#d2d2d2] font-bold py-3 px-3 justify-between">
      <label>Echo</label>
      <div className="flex gap-2 align-middle">
        <button>Home</button>
        <button>Create</button>
        {isLoggedIn}
      </div>
    </div>
  );
}
