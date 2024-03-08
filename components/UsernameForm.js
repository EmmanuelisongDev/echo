export default function UsernameForm() {
  return (
    <div className="flex  items-center h-screen justify-center">
      <form className="text-center  " on>
        <h1 className="text-xl">Enter Your Username</h1>
        <input
          type="text "
          className="block mb-2 bg-echoBorder px-3 py-1 rounded-full"
          placeholder="username"
        />
        <button className=" block text-center bg-echoOrange w-full p-1 rounded-full ">
          Continue
        </button>
      </form>
    </div>
  );
}
