import React from 'react'

const Footer = () => {
    return (
        <div className='w-full h-full mt-auto pb-8 bg-oren relative'>
            <img src="/elipse.png" className='absolute right-0' />
            <img src="/elipse2.png" className='absolute right-0 bottom-[93px]' />
            <img src="/elpise3.png" className='absolute left-0 bottom-0' />
            <div className='pl-[100px] pt-[100px] mt-[180px]'>
                <div>
                    <h1 className='font-display text-[50px] text-white'>Buat undanganmu sekarang dengan <br /> paket terbaik dari kami!</h1>
                </div>
                <div>
                    <hr className='w-[1450px] mt-12 border opacity-25' />
                </div>
                <div className='flex flex-row mt-[55.5px] justify-between md:flex-row xs:flex-col'>
                    <div>
                        <h1 className='font-display md:text-[40px] xs:text-lg text-white'>Weddin<span className='font-title md:text-[40px] xs:text-xl text-white italic'>Story</span></h1>
                    </div>
                        <div>
                            <p className='text-xl text-white font-display'>Pages</p>
                            <div className='flex flex-col gap-2 mt-5'>
                                <p className='text-base text-white font-display'>About Us</p>
                                <p className='text-base text-white font-display'>Privacy Policy</p>
                            </div>
                        </div>
                        <div className='flex flex-col pr-[376px]'>
                            <p className='text-xl text-white font-display'>Kontak Kami</p>
                            <div className='flex flex-col gap-2 mt-5'>
                                <p className='text-base text-white font-display'>WhatsApp</p>
                                <p className='text-base text-white font-display'>Instagram</p>
                            </div>
                        </div>
                </div>
                <div className='flex flex-row mt-2'>
                    <img src="/frame.png" className='mr-2' />
                    <p className='font-display text-base text-white'>hello@weddinstory.com</p>
                </div>
                <div className='mt-[66px]'>
                    <p className='font-display text-[18px] text-white font-normal'>Jl. Sorogenen No.35, Sorosutan, <br /> Umbulharjo, Kota Yogyakarta 55162</p>
                </div>
                <hr className='w-[1450px] mt-12 border opacity-25' />
                <div className='text-center mt-8'>
                    <p className='font-display text-[18px] text-white text-opacity-70'> © 2021 WeddinStory. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer