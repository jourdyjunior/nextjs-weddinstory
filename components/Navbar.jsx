import React from 'react';
import Link from 'next/Link';

const Navbar = () => {
  return (
    <div className='fixed w-full h-20'>
        <div className='flex justify-between items-center w-full h-full px-24'>
            <img src="/garis.png" className='absolute left-0 top-0' />
            <h3 className='font-normal font-display text-xl cursor-pointer'>Weddin <span className='font-title font-light italic text-xl'>Story</span></h3>
            <div className='flex items-center font-display'>
                <ul className='hidden md:flex text-gray-600 leading-4 cursor-pointer'>
                    <Link href='/'>
                        <li className='ml-10 text-sm hover:border-b'>Beranda</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm hover:border-b'>Fitur</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm hover:border-b'>Katalog</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm hover:border-b'>Kontak</li>
                    </Link>
                </ul>
                <button className='border px-[27px] py-[7px] rounded-full border-oren text-oren ml-9 text-[16px] font-thin cursor-pointer hidden md:flex'>Log In</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar