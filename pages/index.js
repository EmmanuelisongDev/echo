import { useSession } from "next-auth/react";
import { useEffect } from "react/cjs/react.production.min";

export default function Home() {
  const { data: session, status } = useSession();
  function getUserInfo() {
    fetch(`/api/users?id=${session.user.id}`);
  }
  useEffect(() => {
    getUserInfo();
  }, []);
  return <main>test</main>;
}
