import React from 'react'
import Image from 'next/image'
import logoImg from '../../public/logo.png'

const Header = () => {
  return (
    <header className='flex justify-between items-center w-[90%] mx-auto py-3 px-6 shadow-lg rounded-full backdrop-blur-2xl my-6 bg-white/10'>
        <Image 
        src={logoImg}
        alt='Pace logo'
        width={100}
        height={100}
        />
        <nav>
          <button className='bg-linear-to-br from-[#5F5DFC] to-[#B840F9] rounded-lg py-3 px-8'>Get Started</button>
        </nav>
    </header>
  )
}

export default Header