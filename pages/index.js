import UsernameForm from "@/components/UsernameForm";
import useUserInfo from "@/hooks/useUserInfo";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Home() {
  const { data: session, status } = useSession();

  const { userInfo, status: userInfoStatus } = useUserInfo;
  if (userInfoStatus === "loading") {
    return "Loading user information";
  }

  if (!userInfo?.username) {
    return <UsernameForm />;
  }
  return <main>{}</main>;
}
