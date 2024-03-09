import useUserInfo from "@/hooks/useUserInfo";
import { useState } from "react";

export default function UsernameForm() {
  const { userInfo, status } = useUserInfo();
  const defaultUsername = userInfo?.email?.split("@")[0];
  console.log(defaultUsername);
  const [username, setUsername] = useState(defaultUsername || "");
  function handleFormSubmit(e) {
    e.preventDefault();
  }
  if (status === "loading") {
    return "";
  }
  return (
    <div className="flex  items-center h-screen justify-center">
      <form className="text-center " onSubmit={handleFormSubmit}>
        <h1 className="text-xl">Enter Your Username</h1>
        <input
          type="text "
          className="block mb-2 bg-echoBorder px-3 py-1 rounded-full"
          placeholder={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <button className=" block text-center bg-echoOrange w-full p-1 rounded-full  ">
          Continue
        </button>
      </form>
    </div>
  );
}
