"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [pageIndex, setPageIndex] = useState(1);

  return (
    <div className="w-full h-screen">
      <main
        className={`container m-auto transition-all md:pt-[80px] ${
          pageIndex !== 1 ? "left-[-100vw] w-0 h-0" : "w-full h-screen"
        }`}
      >
        <h1 className="text-center text-3xl underline hidden md:block">
          Hi I’am Ali 👋
        </h1>
        <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-12 md:mt-24 gap-5">
          <div className="flex flex-col gap-3 md:gap-6 w-fit md:w-[610px]">
            <h3 className="text-3xl md:text-5xl">
              Junior Frontend Web Developer.
            </h3>
            <p>
              Front-End developer with a love for learning and creating unique
              projects, I am constantly seeking out new challenges and
              opportunities to grow and improve. With a passion for what I do
              and a drive to always be better, I am excited to bring my skills
              and enthusiasm to any team.
            </p>
            <div
              className="learn-more cursor-pointer"
              onClick={() => setPageIndex(pageIndex + 1)}
            >
              <button className="bg-[#0075FF] rounded-[50px] py-2 px-5 flex gap-2 items-center transition-all text-white">
                Learn More
                <Image
                  src="/rightarrow.svg"
                  alt="right arrow"
                  width={14}
                  height={2}
                />
              </button>
            </div>
          </div>
          <Image src="/ali.png" width={300} height={300} alt="ali" />
        </div>
      </main>
      <section
        className={`container m-auto transition-all md:pt-[80px] ${
          pageIndex === 2 ? "block right-0 w-full h-full" : "w-0 h-0 hidden"
        }`}
      >
        <h1>Hello Again</h1>
      </section>
      <div className="flex items-center gap-1 absolute bottom-2 md:bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div
          className={`w-3 h-3 rounded-full ${
            pageIndex === 1 ? "bg-[#0075FF]" : "bg-[#D8D8D8]"
          }`}
          onClick={() => setPageIndex(1)}
        ></div>
        <div
          className={`w-3 h-3 rounded-full ${
            pageIndex === 2 ? "bg-[#0075FF]" : "bg-[#D8D8D8]"
          }`}
          onClick={() => setPageIndex(2)}
        ></div>
        <div
          className={`w-3 h-3 rounded-full ${
            pageIndex === 3 ? "bg-[#0075FF]" : "bg-[#D8D8D8]"
          }`}
          onClick={() => setPageIndex(3)}
        ></div>
        <div
          className={`w-3 h-3 rounded-full ${
            pageIndex === 4 ? "bg-[#0075FF]" : "bg-[#D8D8D8]"
          }`}
          onClick={() => setPageIndex(4)}
        ></div>
      </div>
    </div>
  );
}
