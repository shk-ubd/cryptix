import React from 'react'
import { Heading1, Heading2 } from './ui/headings'


function Description({cipherMethod, className=''}: {cipherMethod: {title: string, overview: string, howItWorks: string[], history?: string}, className?:string}) {
  return (
    
    <div className={`${className} w-full max-w-2xl md:px-4`}>

    {/* TITLE AND OVERVIEW */}
    <div className="mb-5">
      <Heading1 text={cipherMethod.title} />
      <p className='text-justify'>{cipherMethod.overview}</p>
    </div>

    {/* HOW IT WORKS */}
    {
      cipherMethod.howItWorks && 
        <div className='mb-5'>
          <Heading2 text='How it works' />
          <ul>
            {cipherMethod.howItWorks.map((step, index) => (
              <li key={index} className='my-2'><span className='text-neutral-100 font-semibold'>{`${index + 1}. `}</span> {step}</li>

            ))}
          </ul>
        </div>
    }

    {/* HISTORY */}
    {
      cipherMethod.history &&
      <div className='mb-5'>
        <Heading2 text='History' />
        <p className=''>{cipherMethod.history}</p>
      </div>
    }

    <div>

    </div>
  </div>
  )
}

export default Description