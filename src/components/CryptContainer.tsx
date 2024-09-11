import React from 'react'
import Description from '@/components/Description'
import { Heading1 } from '@/components/ui/headings'


function CryptContainer({cipherMethodTheory, children }: any) {
  return (
    <main className='py-24  px-7 md:px-18 lg:px-20'>
    <section className='flex flex-col-reverse md:flex-row justify-evenly items-center md:items-start  '>

      {/* CONTENT */}
      <Description cipherMethod={cipherMethodTheory} />
<div className='md:mt-6'>
      {children}
      </div>
      
      <Heading1 text={cipherMethodTheory.title} className='md:hidden' />
    </section>
  </main>
  )
}

export default CryptContainer