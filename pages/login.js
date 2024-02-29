import { getProviders } from "next-auth/react";
export default function LoginPage({ providers }) {
  return (
    <div className="flex items-center justify-center h-screen">
      {Object.values(providers).map((provider) => (
        <div>
          <button className="border rounded-full p-4 text-xl font-bold  hover:bg-echoOrange transition ease-out duration-300 hover:scale-95 ">
            Sign in with {provider.name}
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
