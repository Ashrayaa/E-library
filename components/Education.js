import React from "react";
import Image from "next/image";
import Notes from "../public/notes.png";
import Blogs from "../public/blogs.jpg";
import Link from "next/link";

export default function Education() {
  return (
    <div className="flex flex-col  justify-center items-center gap-20 py-28 px-12 bg-[#dafff6]">
      <div className="flex flex-col gap-4 justify-center items-center">
      <h1 className="text-5xl font-bold text-[#006b6c] ">
        Educational Purpose
      </h1>
      <p className="font-semibold text-xl text-[#006b6c]">
        Empowering learners of all ages
      </p>
      </div>
     
      <div className="flex flex-col lg:flex-row justify-center gap-14 ">
        <Link href="./Notes">
          <div class="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white">
            <Image src={Notes} className="h-64" />
            {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">
                Better notes for better Learning
              </div>
              <p class="text-gray-700 text-base">
                This collection includes a variety of different types of notes,
                such as lecture notes, notes from textbooks, notes from class
                discussions, and notes from online research.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #lectures
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #textbooks
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #notes
              </span>
            </div>
          </div>
        </Link>

        <Link href="./Blogs">
          <div class="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white">
            <Image src={Blogs} className="h-64" />
            {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Insights through Blogs</div>
              <p class="text-gray-700 text-base">
                This collection can cover news, politics, fashion, food, travel,
                personal experiences, and many others. A great resource for
                finding information and insights.

              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #fashion
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #food
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
