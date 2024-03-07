import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
export default function LoginPage({ providers }) {
  const { data, status } = useSession();
  const router = useRouter();
  if (status === "loading") {
    return "";
  }
  if (data) {
    router.push("/");
  }

  return (
    <div className="flex items-center justify-center h-screen">
      {Object.values(providers).map((provider) => (
        <div key={provider.id}>
          <button
            onClick={() => {
              signIn(provider.id);
            }}
            className="border flex items-center gap-3 rounded-full p-4 text-lg font-bold bg-echoWhite text-echoDarkGray  hover:bg-echoOrange transition ease-out duration-300 hover:scale-95 "
          >
            <FcGoogle className="w-8 h-8" /> Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
