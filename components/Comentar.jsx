import React from 'react'

const Comentar = () => {
  return (
    <div className='relative w-full h-full bg-putih'>
      <img src="/right.png" className='absolute -top-6 right-0' />
          <div className='flex justify-around'>
            <div className='bg-[#F9F9F9] h-[290px] w-[1450px] rounded-[20px] flex flex-row items-center relative'>
              <img src="/bintang.png" className='absolute top-0 -mt-4 -ml-4'/>
              <img src="/bintang.png" className='absolute bottom-0 right-0 -mb-4 '/>
              <div className='w-[48px] h-[48px] rounded-full bg-white flex items-center justify-center -ml-5 shadow-lg cursor-pointer '>
                <img src="/kiri.png"/>
              </div>
              <div className='flex flex-row  pt-[65px]'>
                <div className='flex flex-row pl-[76px]'>
                  <img src="/pict1.png"/>
                  <div className='flex flex-col ml-5 mr-24'>
                    <h2 className='font-display font-medium'>Rahma & Barton</h2>
                    <p className='mt-4 font-display font-normal text-[#121212] text-opacity-60 w-[403px]'>“Pelayanannya ramah dan juga fast respon, selain itu</p>
                    <p className='mt-1 font-display font-normal text-[#121212] text-opacity-60 w-[403px]'>desain invitation ga kalah menarik dengan yang di”</p>
                    <p className='mt-1 font-display font-normal text-[#121212] text-opacity-60 w-[403px]'>dribbble, mantap!.”</p>
                    <div className='flex flex-row mt-4 space-x-2'>
                      <img src="/star.png"/>
                      <img src="/star.png"/>
                      <img src="/star.png"/>
                      <img src="/star.png"/>
                      <img src="/star.png"/>
                    </div>
                  </div>
                </div>
                <div className='flex flex-row'>
                  <img src="/pict2.png" />
                  <div className='flex flex-col ml-5 font-display font-medium'>
                    <h2>Albert & Meida</h2>
                    <p className='mt-4 font-display font-normal text-[#121212] text-opacity-60 w-[403px]'>“Pelayanannya ramah dan juga fast respon, selain itu</p>
                    <p className='mt-1 font-display font-normal text-[#121212] text-opacity-60 w-[403px]'>desain invitation ga kalah menarik dengan yang di”</p>
                    <p className='mt-1 font-display font-normal text-[#121212] text-opacity-60 w-[403px]'>dribbble, mantap!.”</p>
                    <div className='flex flex-row mt-4 space-x-2'>
                      <img src="/star.png"/>
                      <img src="/star.png"/>
                      <img src="/star.png"/>
                      <img src="/star.png"/>
                      <img src="/star.png"/>
                    </div>
                  </div>
                </div>
                <div className='flex justify-end items-center'>
                      <div className='w-[48px] h-[48px] rounded-full bg-white flex items-center justify-center shadow-lg cursor-pointer -mr-44 mb-14'>
                        <img src="/kanan.png"/>
                      </div>
                    </div>
              </div>
            </div>    
          </div>
    </div>
  )
}

export default Comentar