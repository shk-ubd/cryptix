import Link from 'next/link'
import React from 'react'
import { navLinks } from '../../public/data'

function Navbar() {
  return (
    <div className='fixed top-6 w-full max-w-screen flex items-center justify-center text-gray-200'>
    <nav className=' border px-8 py-2 rounded-xl  bg-[#000000] border-gray-200/40' >
        <ul className='flex gap-4 '>
          {
            navLinks.map((item, index) => (
              <li key={index} className=' py-1 px-4 rounded-lg hover:bg-[#1b1b1b] hover:text-white transition-all duration-300'>
                <Link  href={item.link}>{item.title}</Link>
              </li>
            ))
          }
            
        </ul>
    </nav>
    </div>
  )
}

export default Navbar