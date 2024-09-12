import React from 'react';
import { Heading3 } from './headings';
import Link from 'next/link';

interface FeaturedCardProps {
  title: string;
  description: string;
  link: string;
  className?: string;
}

const Card: React.FC<FeaturedCardProps> = ({ title, description, link, className="" }) => {
  return (
      <Link href={link} >
    <div className={`h-64 w-64 py-6 px-3 m-4 bg-white/10 shadow-lg rounded-lg flex items-center justify-between flex-col hover:bg-white/15 border border-transparent hover:border-white/50 transition duration-400 ease-in ${className}`}>
      <Heading3 text={title} className='py-2' />
      <p className="text-gray-400 mb-4 text-center text-sm ">
        {description}
      </p>
     
    </div>
      </Link>
  );
};

export default Card;
