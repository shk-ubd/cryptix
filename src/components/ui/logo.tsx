import Image from 'next/image'
import React from 'react'

function Logo({width=100, height=100, className=""} ) {
  return (
  
    <Image
        src={"/logo.png"}
        alt='100'
        width={width}
        height={height}
        className={` ${className}`}
    />


  )
}

export default Logo