import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='py-4 w-[90%] text-center mx-auto border-t border-white/20 mt-auto'>
<p className='capitalize'>&copy; All rights reserved - pace team {currentYear}.</p>
    </footer>
  )
}

export default Footer