import React from 'react'
import { Heading1, Heading2 } from './ui/headings'
import { motion } from 'framer-motion'

function Description({ cipherMethod, className = '' }: { cipherMethod: { title: string, overview: string, howItWorks: string[], history?: string }, className?: string }) {
  return (

    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            ease: 'easeInOut',
            staggerChildren: 0.25,
            
          }
        }
      }}
      initial="hidden"
      animate="show"
      className={`${className} w-full max-w-3xl md:px-4`}>

      {/* TITLE AND OVERVIEW */}
      <motion.div
      variants={{hidden:{opacity:0, x: -50}, show:{opacity:1, x:0}}}
      className="mb-5">
        <Heading1 text={cipherMethod.title} />
        <p className='text-justify'>{cipherMethod.overview}</p>
      </motion.div>

      {/* HOW IT WORKS */}
      {
        cipherMethod.howItWorks &&
        <motion.div
        variants={{hidden:{opacity:0, x: -50}, show:{opacity:1, x:0}}}
        className='mb-5'>
          <Heading2 text='How it works' />
          <ul>
            {cipherMethod.howItWorks.map((step, index) => (
              <li key={index} className='my-2'><span className='text-neutral-100 font-semibold'>{`${index + 1}. `}</span> {step}</li>

            ))}
          </ul>
        </motion.div>
      }

      {/* HISTORY */}
      {
        cipherMethod.history &&
        <motion.div
        variants={{hidden:{opacity:0, x: -50}, show:{opacity:1, x:0}}}
        className='mb-5'>
          <Heading2 text='History' />
          <p className=''>{cipherMethod.history}</p>
        </motion.div>
      }

    </motion.div>
  )
}

export default Description