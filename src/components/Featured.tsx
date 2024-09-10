import React from 'react'
import Card from './ui/featuredCard'
function FeaturedCards({data}: {data: {title: string, description: string, link: string}[]}) {
  return (
    <div className='flex items-center justify-center py-8 my-4 flex-wrap w-full max-w-6xl m-auto z-99'>
        {data.map((cipher, index) => (
            <Card key={index} title={cipher.title} description={cipher.description} link={cipher.link}/>
        ))}
    </div>
  )
}

export default FeaturedCards