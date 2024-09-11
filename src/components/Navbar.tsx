'use client'
import Link from 'next/link'
import React from 'react'
import { navLinks } from '../../public/data'
import { usePathname, useRouter } from 'next/navigation'
import Logo from './ui/logo'
function Navbar() {
  const pathname = usePathname()
  console.log(pathname);
  
  return (
    // <div className='fixed top-6 w-full max-w-screen flex items-start justify-between text-gray-200 px-10'>
    // <Logo width={150}/>
    <div className='w-full flex justify-center'>
      <nav className='bg-neutral-950 bg-opacity-75 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] w-full md:w-fit fixed py-5 top-0 rounded-none  md:top-6 md:border px-8 md:py-2 md:rounded-xl   md:border-gray-200/40 min-w-fit' >
        <ul className='flex gap-4 justify-center flex-wrap md:flex-nowrap '>
          {
            navLinks.map((item, index) => (
              <Link key={index}  href={item.link}>
              <li className= {`flex-shrink-0 py-1 px-4 rounded-lg hover:bg-[#1b1b1b] hover:text-white transition-all duration-300 ${pathname === item.link ? "text-white bg-[#1b1b1b]":"text-gray-300 "}`}>
               {item.title}
              </li>
              </Link>
            ))
          }
            
        </ul>
    </nav>
    </div>

    // </div>
  )
}

export default Navbar