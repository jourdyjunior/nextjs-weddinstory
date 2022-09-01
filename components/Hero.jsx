import React from 'react'

const Hero = () => {
  return (
    <div>
      <div id='beranda' className='w-full h-full bg-white'>
        <div className=' w-full h-full flex justify-between md:flex-row xs:flex-col'>
          <div className='md:px-[100px] xs:px-5 flex flex-col mt-[150px] '>
            <div className='flex flex-col gap-2 xs:hidden md:block'>
              <h1 className='text-[68px] font-body'>Sebarkan kabar</h1>
              <h1 className='text-[68px] font-body'>bahagiamu dalam</h1>
              <h1 className='text-[68px] font-body'>satu genggaman</h1>
            </div>
            <div className='flex flex-col gap-6 md:hidden'>
              <h1 className='text-5xl font-body'>Sebarkan kabar bahagiamu</h1>
              <h1 className='text-5xl font-body'>dalam satu genggaman</h1>
            </div>
            <div className='mt-11 gap-2 flex flex-col'>
              <h2 className='font-display text-xl text-[#252324] font-medium'>Dengan E-Invitation lebih mudah mengundang siapapun</h2>
              <h2 className='font-display text-xl text-[#252324] font-medium'>dimanapun dengan 3 ketukan</h2>              
            </div>
            <div className='mt-[60px]'>
              <button className='md:w-[253px] xs:w-full h-[65px] bg-oren rounded-full font-display text-white'>Buat Undangan</button>
            </div>
          </div>
          <div className='flex items-center xs:px-5 md:pr-[100px] mt-[46px] xs:justify-center'>
            <img src="/gambar hp.png" alt="hp"/>
          </div>
        </div>
        <div className='absolute left-[426px] top-[645px] mt-5 md:block xs:hidden '>
            <img src="/vector.png"/>
          </div>
          <div className='flex justify-end  md:pr-[100px] xs:pr-5 md:mt-10 xs:mt-0'>
            <div className='rounded-full shadow-lg shadow-gray-300 w-[254px] h-[70px] flex items-center cursor-pointer md:flex xs:hidden'>
              <img src="/wa.png" className='pl-5' />
              <h1 className='font-display text-xl text-[#4DCB5B] ml-[9px]'>WhatsApp Kami</h1>
            </div>
            <div className='md:hidden xs:block rounded-full shadow-lg shadow-gray-300 px-2 py-2'>
              <img src="/wa.png" />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Hero