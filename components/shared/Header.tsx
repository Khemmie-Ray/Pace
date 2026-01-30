"use client"

import React from 'react'
import Image from 'next/image'
import logoImg from '../../public/logo.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname();
  const isActive = pathname === "/get-started";

  return (
    <header className='flex justify-between items-center w-[90%] mx-auto py-3 px-6 shadow-lg rounded-full backdrop-blur-2xl my-6 bg-white/10'>
      <Link href='/'>
        <Image 
        src={logoImg}
        alt='Pace logo'
        width={100}
        height={100}
        className='w-17.5 lg:w-25 md:w-16'
        />
        </Link>
        <nav>
             <Link
        href="/get-started"
        aria-disabled={isActive}
        className={`
          rounded-lg py-3 lg:px-8 md:px-6 px-4
          transition-all duration-200
          ${
            isActive
              ? "bg-gray-300 text-gray-500 cursor-not-allowed pointer-events-none"
              : "bg-linear-to-br from-[#5F5DFC] to-[#B840F9] text-white hover:opacity-90 hover:font-bold"
          }
        `}
      >
        Get Started
      </Link>
        </nav>
    </header>
  )
}

export default Header