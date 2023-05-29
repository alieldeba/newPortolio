export default function Home() {
  return (
    <main className="welcome container m-auto h-screen flex flex-col items-center justify-center gap-16">
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
      <div className="learn-more cursor-pointer">
        <button className="bg-[#D2E7FF] rounded-[50px] py-2 px-5 flex gap-2 items-center transition-all">
          Learn More
          <img src="/rightarrow.svg" alt="right arrow" />
        </button>
      </div>
    </main>
  );
}
