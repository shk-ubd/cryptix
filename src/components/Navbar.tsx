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
    <div className='fixed top-6 w-full max-w-screen flex items-start justify-between text-gray-200 px-10'>
    <Logo width={150}/>
    <nav className=' border px-8 py-2 rounded-xl  bg-[#000000] border-gray-200/40' >
        <ul className='flex gap-4 '>
          {
            navLinks.map((item, index) => (
              <li key={index} className= {`py-1 px-4 rounded-lg hover:bg-[#1b1b1b] hover:text-white transition-all duration-300 ${pathname === item.link ? "text-white bg-[#1b1b1b]":"text-gray-300 "}`}>
                <Link  href={item.link}>{item.title}</Link>
              </li>
            ))
          }
            
        </ul>
    </nav>
    <div className='w-10'>
      

    </div>

    </div>
  )
}

export default Navbar