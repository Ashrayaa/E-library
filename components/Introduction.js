import React from "react";
import Image from "next/image";
import Arrow from "../public/downarrow.svg";
import Sideimage from "../public/sideimage.png";

export default function Introduction() {
  const scrollDown = () => {
    window.scrollBy(0, 1100); // scroll down by 1000 pixels
  };
  return (
    <div className="flex flex-col lg:flex-row sm:p-4 md:p-10 mb-10 lg:mb-2 ">
      <div className="flex flex-col mx-12 mt-24 xl:mt-32 gap-6 md:gap-10 xl:gap-8">
        <div className="text-5xl xl:text-7xl font-bold text-[#EA047E] flex flex-col gap-2">
          <h1>Discover your next </h1>
          <h1>favorite read online </h1>
          <p></p>
        </div>
        <div className="font-semibold text-xl  text-[#FF6D28] ">
          <p>Read anytime, anywhere. Your virtual library is always open.</p>
          <p>And experience the power of digital literature with Instant <br></br>access to thousands of titles</p>
        </div>
        <button
          onClick={scrollDown}
          type="button"
          class="text-white sm:w-[20%] bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-3xl px-5 py-2.5 text-center mr-2 mb-2 text-lg font-semibold"
        >
          ScrollDown
        </button>
        <Image onClick={scrollDown} src={Arrow} className="animate-bounce mx-[40%] sm:mx-0" />
      </div>
      <div>
        <Image src={Sideimage} className=" lg:w-[900px] xl:mt-24 xl:-mr-44" />
      </div>
    </div>
  );
}
