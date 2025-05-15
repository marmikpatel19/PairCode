import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex flex-row m-3 p-3 text-white justify-between max-w-5xl mx-auto">
        <Link
          className="text-lg sm:text-2lg font-bold hover:cursor-pointer"
          href="/"
        >
          PairCode
        </Link>
        <Link 
          className="text-sm sm:text-md border rounded-md border-1 border-white/30 px-2 py-1 hover:cursor-pointer"
          href="/temp" // update with auth
        >
          Login
        </Link>
      </div>
      <div className="flex flex-row max-w-6xl justify-between mx-auto mt-10">
        <div className="flex flex-col space-y-6 m-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Leetcode for Vibe Coding Interviews</h1>
          <h3 className="text-lg sm:text-2lg">Leetcode interviews are dead. Vibe coding interviews are in. Start practicing.</h3>
          <div className="flex flex-row space-x-4">
            <Link
              className="text-sm sm:text-md font-bold rounded-md bg-linear-to-r from-[#FF3C00] to-[#FF7C2A] px-4 py-2 hover:cursor-pointer"
              href="/problems"
            >
              Practice Problems
            </Link>
            <Link 
              className="text-sm sm:text-md font-bold border rounded-md border-1 border-white/30 px-4 py-2 hover:cursor-pointer"
              href="/temp" // update with auth
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
