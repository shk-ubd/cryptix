import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Logo from './ui/logo'

function Footer() {
  return (
    <footer className='pt-6 pb-3 flex flex-col items-center gap-4'>
      <div className='h-[2px] w-[90%] bg-white/20'></div>
      <div className='flex justify-between w-[90%]'>
        <Logo />
        <p className='text-center text-gray-500 text-sm'>&copy; 2024 Cryptix. All rights reserved.</p>

        <div className='flex items-center gap-5'>
          <a href="https://github.com/your-github-repo" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" className="flex items-center gap-2">
            <FaGithub className='text-gray-500 hover:text-white transition-colors duration-300' size={24} />
            <span className="text-sm text-gray-400 hover:text-white transition-colors">View Source</span>
          </a>
          <a href="https://linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className='text-gray-500 hover:text-white transition-colors duration-300' size={24} />
          </a>
        </div>


      </div>
    </footer>
  )
}

export default Footer
