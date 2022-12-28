import React from "react";
import Image from "next/image";

import Link from "next/link";
import Inspire from "../public/twentytwo.jpg";
import Thriller from "../public/sherlok.jpg";
import Novels from "../public/novels.jpg";

export default function Entertainment() {
  return (
    <div className="flex flex-col  justify-center xl:mt-[23%] items-center gap-20 bg-[#e7d0cb] py-16 px-12">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-5xl xl:text-5xl font-bold text-[#c31952] to-orange-400 ">
          Entertainment Purpose
        </h1>
        <p className="font-semibold text-xl  text-[#c31952]">
          Books for every mood and occasion
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-14 ">
        <Link href="./Motivation">
          <div class="max-w-sm rounded-[10px] overflow-hidden shadow-lg bg-white">
            <Image src={Inspire} className="h-[400px]" />
            {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">
                Inspiring Books Collection
              </div>
              <p class="text-gray-700 text-base">
                Books that are meant to motivate, encourage, and uplift the
                reader. These books can be a great way to gain perspective, find
                motivation, and learn new strategies for achieving success and
                happiness.{" "}
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #motivational
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #habits
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #inspiring
              </span>
            </div>
          </div>
        </Link>

        <Link href="./Blogs">
          <div class="max-w-sm rounded-[10px] overflow-hidden shadow-lg bg-white">
            <Image src={Thriller} className="h-[400px]" />
            {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">
                Thriller Books Collection
              </div>
              <p class="text-gray-700 text-base">
                Books that are characterized by their fast-paced, suspenseful
                plots and their ability to keep readers on the edge of their
                seats. The thriller book collection is sure to have something
                for everyone.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #detective
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #mystery
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #thriller
              </span>
            </div>
          </div>
        </Link>

        <Link href="./Blogs">
          <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <Image src={Novels} className="h-[400px]" />
            {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Evergreen Novels</div>
              <p class="text-gray-700 text-base">
                Reading novels can be a enjoyable and enriching pastime, as they
                allow readers to be transported to different worlds, experience
                new perspectives, and learn about different cultures and
                historical periods.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #novels
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #basheer
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #madhavikutty
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
