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
        <div className="text-3xl hidden md:flex items-center gap-2 m-auto absolute left-1/2 -translate-x-1/2">
          <h1 className="text-center">Hi I’am Ali</h1>
          <Image src="/wave.gif" alt="wave" width={50} height={5} />
        </div>
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
        <div className="text-center hidden md:block">
          <h1 className="text-3xl">Skills</h1>
          <p>All what I have gained in my learning career</p>
        </div>
      </section>
      <section
        className={`container m-auto transition-all md:pt-[80px] ${
          pageIndex === 3 ? "block right-0 w-full h-full" : "w-0 h-0 hidden"
        }`}
      >
        <div className="text-center hidden md:block">
          <h1 className="text-3xl">Projects</h1>
          <p>Best projects that I have made in my career</p>
        </div>
      </section>
      <section
        className={`container m-auto transition-all md:pt-[80px] ${
          pageIndex === 4 ? "block right-0 w-full h-full" : "w-0 h-0 hidden"
        }`}
      >
        <div className="text-center hidden md:block">
          <h1 className="md:text-3xl">Contact</h1>
          <p>All my social media accounts and a way to contact me faster</p>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-10 justify-between pt-24 md:pt-32">
          <div className="flex flex-col items-center gap-5 w-full md:w-[680px]">
            <h3 className="text-2xl md:text-5xl">
              Feel free to send me any message I am available 24 hours.
            </h3>
            <p>
              and also you can contact or follow me on those social media
              accounts.
            </p>
            <div className="flex gap-3">
              <Image
                src="/linkedin.svg"
                alt="linkedin"
                width={50}
                height={50}
                className="cursor-pointer"
              />
              <Image
                src="/github.svg"
                alt="github"
                width={50}
                height={50}
                className="cursor-pointer"
              />
              <Image
                src="/behance.svg"
                alt="behance"
                width={50}
                height={50}
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full md:w-1/2">
            <label className="font-medium">Email (optional)</label>
            <input
              type="email"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
            <label className="font-medium">Message</label>
            <textarea
              required
              className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            ></textarea>
            <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
              Send Message
            </button>
          </div>
        </div>
      </section>
      <div className="flex items-center gap-1 absolute bottom-1 md:bottom-10 left-1/2 -translate-x-1/2 z-10 transition-all">
        <div
          className={`w-3 h-3 rounded-full transition-all ${
            pageIndex === 1 ? "bg-[#0075FF]" : "bg-[#D8D8D8]"
          }`}
          onClick={() => setPageIndex(1)}
        ></div>
        <div
          className={`w-3 h-3 rounded-full transition-all ${
            pageIndex === 2 ? "bg-[#0075FF]" : "bg-[#D8D8D8]"
          }`}
          onClick={() => setPageIndex(2)}
        ></div>
        <div
          className={`w-3 h-3 rounded-full transition-all ${
            pageIndex === 3 ? "bg-[#0075FF]" : "bg-[#D8D8D8]"
          }`}
          onClick={() => setPageIndex(3)}
        ></div>
        <div
          className={`w-3 h-3 rounded-full transition-all ${
            pageIndex === 4 ? "bg-[#0075FF]" : "bg-[#D8D8D8]"
          }`}
          onClick={() => setPageIndex(4)}
        ></div>
      </div>
    </div>
  );
}
