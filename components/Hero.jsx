import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className='w-full h-screen bg-putih'>
        <div className=' w-full h-full flex justify-between md:flex-row xs:flex-col'>
          <div className='pl-[100px] flex flex-col mt-[150px]'>
            <div className='flex flex-col gap-2'>
              <h1 className='text-[68px] font-body'>Sebarkan kabar</h1>
              <h1 className='text-[68px] font-body'>bahagiamu dalam</h1>
              <h1 className='text-[68px] font-body'>satu genggaman</h1>
            </div>
            <div className='mt-11'>
              <h2 className='font-display text-xl text-[#252324] font-medium'>Dengan E-Invitation lebih mudah mengundang siapapun <br /> dimanapun dengan 3 ketukan</h2>
            </div>
            <div className='mt-[60px]'>
              <button className='px-[55px] py-[20px] bg-oren rounded-full font-display text-white'>Buat Undangan</button>
            </div>
          </div>
          <div className='items-center pr-[109px] mt-[46px]'>
            <img src="/gambar hp.png" alt="hp"/>
          </div>
        </div>
        <div className='absolute left-[426px] top-[645px] mt-5 md:hidden xs:hidden'>
            <img src="/vector.png"/>
          </div>
          <div className='flex justify-end items-center pr-[101px] -mt-28'>
            <div className='rounded-full shadow-lg shadow-gray-300 w-[254px] h-[70px] flex items-center cursor-pointer md:flex xs:hidden'>
              <img src="/wa.png" className='pl-5' />
              <h1 className='font-display text-xl text-[#4DCB5B] ml-[9px]'>WhatsApp Kami</h1>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Hero