import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className='w-full h-screen'>
        <div className='max-w-[1240px] w-full h-full flex justify-between flex-row'>
          <div className='pl-[100px] flex flex-col mt-[206px]'>
            <div>
              <h1 className='text-[68px]'>Sebarkan kabar <br /> bahagiamu dalam <br /> satu genggaman</h1>
            </div>
            <div className='mt-11'>
              <h2 className='font-display text-xl text-[#252324] font-medium'>Dengan E-Invitation lebih mudah mengundang siapapun <br /> dimanapun dengan 3 ketukan</h2>
            </div>
            <div className='mt-[60px]'>
              <button className='px-[55px] py-[20px] bg-oren rounded-full font-display text-white'>Buat Undangan</button>
            </div>
          </div>
          <div className='absolute right-[101px] top-[144px]'>
            <img src="/gambar hp.png" alt="hp"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero