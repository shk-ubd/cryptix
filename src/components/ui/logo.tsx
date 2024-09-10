import Image from 'next/image'
import React from 'react'

function Logo({width=100, height=100}) {
  return (
    <div>
    <Image
        src={"/logo.png"}
        alt='100'
        width={width}
        height={height}
        className=' h-auto shadow-[0_0_15px_rgba(255,255,255,0.5)] '
    />
</div>

  )
}

export default Logo