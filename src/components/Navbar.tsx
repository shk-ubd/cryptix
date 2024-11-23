'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { navLinks } from '../../public/data'
import { usePathname } from 'next/navigation'
import Logo from './ui/logo'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineMenuAlt4, HiOutlineX } from 'react-icons/hi'
import { div } from 'framer-motion/client'

function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className='lg:flex lg:items-center lg:justify-center'>
      
    <motion.div
      className={`fixed w-full top-0 z-50 flex justify-center items-center backdrop-blur-[0.5rem] ${
        isOpen ? 'bg-neutral-950 bg-opacity-95' : 'bg-neutral-950 bg-opacity-75'
      } shadow-lg shadow-black/[0.03] md:w-fit md:top-6 md:rounded-xl md:border md:border-gray-200/40 md:items-center`}
      animate={{ height: isOpen ? '100vh' : 'auto' }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <nav className='w-full px-6 py-3 flex flex-col md:flex-row justify-between items-center md:items-center'>
        {/* Logo and Hamburger */}
        <div className='flex w-full justify-between items-center md:w-auto'>
          <Logo width={150} className='md:hidden' />
          <button
            onClick={toggleMenu}
            className='text-gray-300 text-2xl md:hidden'
          >
            {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt4 />}
          </button>
        </div>

        {/* Navbar Links */}
        <ul
          className={`flex-col md:flex-wrap md:justify-center md:flex-row md:flex ${
            isOpen ? 'flex' : 'hidden'
          } md:gap-4 gap-6 mt-8 md:mt-0 w-full md:w-auto text-center`}
        >
          {navLinks.map((item, index) => (
            <li
              key={index}
              className={`py-2 px-6 md:py-1 md:px-4 rounded-lg transition-all duration-300 ${
                pathname === item.link
                  ? 'text-white bg-[#1b1b1b]'
                  : 'text-gray-300'
              } hover:bg-[#1b1b1b] hover:text-white`}
            
              onClick={closeMenu}
            >
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
    </div>
  )
}

export default Navbar
