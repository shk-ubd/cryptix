import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Logo from './ui/logo'

function Footer() {
  return (
    <footer className='pt-6 pb-3 flex flex-col items-center gap-4'>
      <div className='h-[2px] w-[95%] bg-white/20'></div>

      <div className='flex flex-col md:flex-row justify-between w-[90%] gap-10 items-center'>
        <Logo />
        <p className='text-center text-gray-400 text-sm'>&copy; 2024 Cryptix. All rights reserved.</p>

        <div className='flex items-center gap-5'>
          <a href="https://github.com/shk-ubd/cryptix" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" className="flex items-center gap-2">
            <FaGithub className='text-gray-500 hover:text-white transition-colors duration-300' size={24} />
            <span className="text-sm text-gray-400 hover:text-white transition-colors">View Source</span>
          </a>
          <a href="https://linkedin.com/in/sheikh-ubaid" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className='text-gray-500 hover:text-white transition-colors duration-300' size={24} />
          </a>
        </div>


      </div>
    </footer>
  )
}

export default Footer
