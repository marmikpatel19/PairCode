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
          <h3 className="text-lg sm:text-2lg text-[#ffe4c9]">Leetcode interviews are dead. Vibe coding interviews are in. Start practicing.</h3>
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




      {/** the solution */}
      <div className="max-w-6xl mx-auto mt-10 pb-12 bg-[#1F0E06]"> 
        <div className="flex flex-col space-y-2 m-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl mx-auto mt-14">Practice Real Engineering Skills</h1>
          <h3 className="text-md sm:text-lg mx-auto text-[#fff0e1]">Focus on problem solving and collaboration</h3>
        </div>

        <div className="flex flex-col space-y-5 mt-12">
          <div className="bg-[#171717] border rounded-md border-1 border-white/30 p-6 mx-auto w-9/10">
            <div className="flex flex-col space-y-4 items-start">
              <h3 className="text-md sm:text-lg">Collaborate with AI</h3>

              <h3 className="text-sm sm:text-md text-[#fff0e1]">Use a Cursor-like AI coding agent to discuss problems, ask for feedback, and write code.</h3>
            </div>
          </div>
          <div className="bg-[#171717] border rounded-md border-1 border-white/30 p-6 mx-auto w-9/10">
            <div className="flex flex-col space-y-4 items-start">
              <h3 className="text-md sm:text-lg">Focus on Problem Solving</h3>

              <h3 className="text-sm sm:text-md text-[#fff0e1]">Practice understanding a problem and its decomposing technical requirements instead of syntax and code.</h3>
            </div>
          </div>   
          <div className="bg-[#171717] border rounded-md border-1 border-white/30 p-6 mx-auto w-9/10">
            <div className="flex flex-col space-y-4 items-start">
              <h3 className="text-md sm:text-lg">Solve Realistic Challenges</h3>

              <h3 className="text-sm sm:text-md text-[#fff0e1]">Create solutions to real-world engineering problems. Each question requires real technical decisions and tradeoffs.</h3>
            </div>
          </div>
        </div>
      </div>



      <div className="flex flex-col m-3 p-3 space-y-2">
        <hr className="w-4/5 border-1 border-white/20 mx-auto"/> 
        <h1 className="text-xs mx-auto">
           © 2025 PairCode. All rights reserved
        </h1>
        <h1 className="text-xs mx-auto">
          Developed by&nbsp;
          <Link
            className="hover:cursor-pointer underline"
            href="https://marmikpatel.com"
          >
            Marmik Patel
          </Link>
        </h1>
      </div>
    </div>
  );
}

// for engineers: 
// for companies: 
