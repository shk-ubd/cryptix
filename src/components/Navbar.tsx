'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { navLinks } from '../../public/data';
import { usePathname } from 'next/navigation';
import Logo from './ui/logo';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for hamburger and close

function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full flex justify-between items-center px-5 md:px-10 py-4 bg-neutral-950 bg-opacity-75 shadow-lg backdrop-blur-md fixed top-0 z-50">
      {/* Logo */}
      <Logo width={150} />

      {/* Hamburger Menu Button (visible on mobile only) */}
      <button
        onClick={toggleMenu}
        className="text-white text-2xl md:hidden focus:outline-none"
        aria-label="Toggle navigation menu"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation Menu */}
      <nav
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } flex-col md:flex-row md:flex items-center gap-4 absolute md:static top-16 left-0 w-full md:w-auto bg-neutral-950 bg-opacity-90 md:bg-transparent shadow-lg md:shadow-none px-5 md:px-0 py-4 md:py-0`}
      >
        <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-1 w-full md:w-auto">
          {navLinks.map((item, index) => (
            <Link key={index} href={item.link}>
              <li
                className={`py-2 px-4 rounded-lg hover:bg-[#1b1b1b] hover:text-white transition-all duration-300 ${
                  pathname === item.link ? 'text-white bg-[#1b1b1b]' : 'text-gray-300'
                }`}
              >
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
