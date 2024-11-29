import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <div className='p-4 w-full flex flex-row items-center justify-around'>
      <div className='flex flex-col items-center gap-y-4'>
        <Image className="rounded-full overflow-hidden" src="/download.jpeg" alt='my_image' layout='relative' width={40} height={50}/>
        <h1><Link className="text-gray-500 font-mono font-bold text-xl p-4 hover:text-gray-600" href={"/"}>Fake-API</Link></h1>
      </div>
      <div>
        <ul className='flex flex-col items-center gap-y-2'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <ul className='flex flex-col items-center gap-y-2'>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;