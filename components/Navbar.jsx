import React, {useState} from 'react'
import Link from 'next/link'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import { SparklesIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
  return (
    <div className="w-screen h-[80px] z-10 bg-yellow-300 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-fll h-full">
        <div className="flex items-center">
          <a href="./">
            <h1 className="text-2xl font-bold mr-4 text-red-600 x-sm:text-3xl sm:text-4xl md:text-5xl font-harryp cursor-pointer">
              HARRY POTTER UNIVERSE
            </h1>
          </a>
          <SparklesIcon className="w-5 text-red-600 x-sm:w-5 sm:w-9" />
        </div>
        <div>
          <ul className="hidden md:flex">
            <Link href="./about">
              <li className="font-harryp text-3xl cursor-pointer">About</li>
            </Link>
            <Link href="./contact">
              <li className="pr-[2vw] font-harryp text-3xl cursor-pointer">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div className="md:hidden pr-[2vw]" onClick={handleClick}>
          {!nav ? (
            <MenuIcon className="w-5 text-red-600" />
          ) : (
            <XIcon className="w-5 text-red-600" />
          )}
        </div>
      </div>
      <ul
        className={
          !nav ? "hidden" : "absolute bg-yellow-300 w-full px-8 md:hidden"
        }
      >
        <Link href="./about">
          <li className="border-b-2 bg-yellow-300 text-2xl w-full font-harryp">About</li>
        </Link>
        <Link href="./contact">
          <li className="border-b-2 bg-yellow-300 text-2xl w-full font-harryp">Contact</li>
        </Link>
        <div className="flex flex-col my-4"></div>
      </ul>
    </div>
  );
}

export default Navbar