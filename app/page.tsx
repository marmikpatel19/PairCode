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

          {/** Add graphic of using live problem */}

        </div>
      </div>
      {/** the Problem */}
      <div className="max-w-6xl mx-auto mt-10 pb-12"> 
        <div className="flex flex-col space-y-2 m-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl mx-auto mt-14">Current Interview Prep is Broken</h1>
          <h3 className="text-md sm:text-lg mx-auto text-[#fff0e1]">Leetcode puzzles don't reflect how engineers actually work</h3>
        </div>
        <div className="border rounded-2xl border-3 border-white/30 p-6 mx-auto w-9/10">
          <div className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-2 items-start">
              <div className="flex flex-row space-x-2 items-center">                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#FF4C38]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                <h3 className="text-md sm:text-lg">Real Engineers Don't Work Alone</h3>
              </div>
              <h3 className="text-sm sm:text-md text-[#fff0e1]">Coding class assignments and leetcode solutions alone is far from reality: pairing, reviewing, and designing together are vital.</h3>
            </div>
          </div>
          <div className="flex flex-col space-y-5 mt-12">
            <div className="flex flex-col space-y-2 items-start">
              <div className="flex flex-row space-x-2 items-center">                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#FF4C38]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                <h3 className="text-md sm:text-lg">Silly Puzzles Don't Reflect Real Problems</h3>
              </div>
              <h3 className="text-sm sm:text-md text-[#fff0e1]">Creating an alien dictionary or maximizing houses robbed will only sound cool to tech bros in your CS class, not a PM that wants a real product.</h3>
            </div>
          </div>
          <div className="flex flex-col space-y-5 mt-12">
            <div className="flex flex-col space-y-2 items-start">
              <div className="flex flex-row space-x-2 items-center">                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#FF4C38]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                <h3 className="text-md sm:text-lg">Great Engineers Don’t Cram Algorithms</h3>
              </div>
              <h3 className="text-sm sm:text-md text-[#fff0e1]">Memorizing how to implement top-down DP in Java won't translate to real work.</h3>
            </div>
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
              <div className="flex flex-row space-x-2 items-center">                
                <span className="rounded-md bg-gradient-to-r from-[#FF3C00] to-[#FF7C2A] p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-[#171717]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                  </svg>
                </span>
                <h3 className="text-md sm:text-lg">Collaborate with AI</h3>
              </div>

              {/** Add graphic of using code editor to ask for feedback*/}

              <h3 className="text-sm sm:text-md text-[#fff0e1]">Use a Cursor-like AI coding agent to discuss problems, ask for feedback, and write code.</h3>
            </div>
          </div>
          <div className="bg-[#171717] border rounded-md border-1 border-white/30 p-6 mx-auto w-9/10">
            <div className="flex flex-col space-y-4 items-start">      
              <div className="flex flex-row space-x-2 items-center">                
                <span className="rounded-md bg-gradient-to-r from-[#FF3C00] to-[#FF7C2A] p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-[#171717]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                </span>

                {/** Add graphic of user with in-line comments of problem decomposition*/}

                <h3 className="text-md sm:text-lg">Focus on Problem Solving</h3>
              </div>
              <h3 className="text-sm sm:text-md text-[#fff0e1]">Practice understanding a problem and decomposing its technical requirements instead of syntax and code.</h3>
            </div>
          </div>   
          <div className="bg-[#171717] border rounded-md border-1 border-white/30 p-6 mx-auto w-9/10">
            <div className="flex flex-col space-y-4 items-start">
              <div className="flex flex-row space-x-2 items-center">                
                <span className="rounded-md bg-gradient-to-r from-[#FF3C00] to-[#FF7C2A] p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-[#171717]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />
                  </svg>
                </span>

                {/** Add graphic of a problem*/}

                <h3 className="text-md sm:text-lg">Solve Realistic Challenges</h3>
              </div>
              <h3 className="text-sm sm:text-md text-[#fff0e1]">Create solutions to real-world engineering problems. Each question requires real technical decisions and tradeoffs.</h3>
            </div>
          </div>
        </div>
      </div>
      {/**Pricing */}
      <div className="max-w-6xl mx-auto mt-10 pb-12"> 
        <div className="flex flex-col space-y-2 m-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl mx-auto mt-14">Afforable Pricing</h1>
          <h3 className="text-md sm:text-lg mx-auto text-[#fff0e1]">Start for free. Upgrade when you're ready.</h3>
        </div>
        <div className="flex flex-row space-x-6 mt-12 pl-6 pr-6 justify-center">
          <div className="bg-[#171717] border rounded-md border-1 border-white/30 p-6 w-1/2 max-w-md">
            <div className="flex flex-col space-y-4 items-start">
              <h3 className="text-md sm:text-lg">Free</h3>
              <h3 className="text-sm sm:text-md text-[#fff0e1]">One problem a month with full AI editor experience</h3>
            </div>
          </div>
          <div className="bg-[#171717] border rounded-md border-1 border-white/30 p-6 w-1/2 max-w-md">
            <div className="flex flex-col space-y-4 items-start">
              <h3 className="text-md sm:text-lg">Premium</h3>
              <h3 className="text-sm sm:text-md text-[#fff0e1]">Unlimited questions and full access to AI editor. $20/month</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col m-3 p-3 space-y-2 mt-10">
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
