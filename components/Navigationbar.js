import React from 'react'
import Image from "next/image";
 import Logo from "../public/favicon.png";

import Link from "next/link";

export default function Navigationbar() {
  return (
    <nav className="flex justify-between xl:gap-44 lg:items-center lg:mx-6 xl:mx-20 p-4 px-10 mt-8 shadow-lg bg-[#f8f8f8] rounded-[40px] ">
      <div className="flex justify-center items-center gap-6 cursor-pointer">
        <Link href="/"><Image src={Logo} alt="logo" width="50" /></Link>
        <h1 className='text-[#EA047E] hidden sm:flex font-bold text-4xl'>E-library</h1>
      </div>

      {/* LINKS AND BUTTON */}
      {/* lg:-ml-44 */}
      <div className="flex justify-center items-center gap-10">
        <ul className="flex justify-center items-center gap-10 ">
          <Link href="/entertainment">
            <li className="text-[#EA047E] font-bold hover:text-purple-600 cursor-pointer">
              Entertainment
            </li>
          </Link>

          <Link href="/education">
            <li className="text-[#EA047E] font-bold hover:text-purple-600 cursor-pointer">
              Education
            </li>
          </Link>

          
        </ul>
        
      </div>
    </nav>
  )
}
