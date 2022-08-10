import Link from 'next/link';
import React, {useState} from 'react';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className='w-full h-20 bg-putih'>
            <div className='flex justify-between items-center w-full h-full px-24'>
                <img src="/garis.png" className='absolute left-0 top-0' />
                <h3 className='font-normal font-display text-xl cursor-pointer'>Weddin<span className='font-title font-light italic text-xl'>Story</span></h3>
                <div className='flex items-center font-display'>
                    <ul className='hidden md:flex text-[#121212] text-opacity-60 leading-4 cursor-pointer'>
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


                <div onClick={handleNav} className='md:hidden cursor-pointer'>
                    <img src="/menu.svg" />
                </div>
            </div>

        <div className={nav ? 'md:hidden fixed  top-0 w-full h-screen bg-black/50' : ''}>
            <div className={
                nav
                ? 'fixed  top-0 w-[100%] h-[480px] md:w-[100%] sm:w-[100%] bg-white ease-in py-10 px-5 duration-500' 
                : 'fixed top-[-100%]  ease-in py-10 px-5 duration-500'}>
                <div>
                    <div className='flex justify-between'>
                        <h3 className='font-normal font-display text-lg '>Weddin<span className='font-title font-light italic text-xl'>Story</span></h3>
                        <div onClick={handleNav} className='cursor-pointer'>
                            <img src="/close.svg"  />
                        </div>
                    </div>
                </div>
                <div className='pt-2 flex flex-col'>
                    <ul className='cursor-pointer'>
                        <Link href='/'>
                        <li className='pt-10 text-xl font-display text-[#121212] text-opacity-60 hover:border-b'>Beranda</li>
                        </Link>
                        <Link href='/'>
                        <li className='pt-10 text-xl font-display text-[#121212] text-opacity-60 hover:border-b'>Fitur</li>
                        </Link>
                        <Link href='/'>
                        <li className='pt-10 text-xl font-display text-[#121212] text-opacity-60 hover:border-b'>Katalog</li>
                        </Link>
                        <Link href='/'>
                        <li className='pt-10 text-xl font-display text-[#121212] text-opacity-60 hover:border-b'>Kontak</li>
                        </Link>
                    </ul>
                </div>
                <div className='pt-10'>
                    <button className='w-full items-center justify-center border border-oren text-oren rounded-full py-3.5 font-display text-base'>Log In</button>
                </div>
            </div>

        </div>

        </div>
    )
}

export default Navbar