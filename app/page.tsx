"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [pageIndex, setpageIndex] = useState(1);

  return (
    <>
      <main
        className={`welcome ${
          pageIndex !== 1 ? "h-0 w-0" : "h-screen"
        } container m-auto flex flex-col items-center justify-center gap-16 transition-all overflow-hidden`}
      >
        <div className="flex flex-col md:flex-row gap-10">
          <h1 className="text-5xl bg-[#fef9c3] p-2 rounded font-black">
            Intuitive.
          </h1>
          <h1 className="text-5xl bg-[#dcfce7] p-2 rounded font-black w-fit">
            Useful.
          </h1>
          <h1 className="text-5xl bg-[#fce7f3] p-2 rounded font-black">
            Beautiful.
          </h1>
        </div>
        <div className="text-center">
          <p>These are the properties a web app should have.</p>
          <p>I am Ali Eldeba, a 16 year old web developer.</p>
        </div>
        <div
          className="learn-more cursor-pointer"
          onClick={() => setpageIndex(pageIndex + 1)}
        >
          <button className="bg-[#D2E7FF] rounded-[50px] py-2 px-5 flex gap-2 items-center transition-all">
            Next
            <Image
              src="/rightarrow.svg"
              alt="right arrow"
              width={13}
              height={10}
            />
          </button>
        </div>
      </main>
      <main
        className={`welcome ${
          pageIndex === 2 ? "h-screen w-full" : "h-0 w-0"
        } container m-auto flex flex-col items-center justify-center gap-16 transition-all overflow-hidden`}
      >
        <div className="flex flex-col md:flex-row gap-10">
          <h1 className="text-5xl bg-[#fef9c3] p-2 rounded font-black">
            Chess Player.
          </h1>
          <h1 className="text-5xl bg-[#dcfce7] p-2 rounded font-black w-fit">
            Gamer.
          </h1>
          <h1 className="text-5xl bg-[#fce7f3] p-2 rounded font-black">
            Handsome.
          </h1>
        </div>
        <div className="text-center">
          <p>These are the properties a web app should have.</p>
          <p>I am Ali Eldeba, a 16 year old web developer.</p>
        </div>
        <div className="flex flex-row-reverse gap-5 width-full justify-center">
          <div
            className="learn-more cursor-pointer"
            onClick={() => setpageIndex(pageIndex + 1)}
          >
            <button className="bg-[#D2E7FF] rounded-[50px] py-2 px-5 flex gap-2 items-center transition-all">
              Next
              <Image
                src="/rightarrow.svg"
                alt="right arrow"
                width={13}
                height={10}
              />
            </button>
          </div>
          <div
            className="learn-more cursor-pointer"
            onClick={() => setpageIndex(pageIndex - 1)}
          >
            <button className="bg-[#D2E7FF] rounded-[50px] py-2 px-5 flex gap-2 items-center transition-all">
              <Image
                src="/leftarrow.svg"
                alt="right arrow"
                width={16}
                height={10}
              />
              Back
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
