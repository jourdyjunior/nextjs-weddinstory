import React from 'react'

const Theme = () => {
  return (
    <div id='katalog' className='w-full h-full bg-white xs:px-10 md:px-[100px]'>
      <div className='w-full mt-auto relative'>
        <img src="/elipse20.png" className='absolute -top-28 left-0 opacity-50' />
        <div className='flex md:justify-center items-center mt-[180px] flex-col relative'>
          <h1 className='md:text-[52px] xs:text-4xl font-body'>Lebih dari 100+ Tema Eksklusif</h1>
          <h3 className='md:text-xl xs:text-base mt-9 font-normal font-display'>Pilih berbagai tema eksklusif dari kami untuk undanganmu</h3>
          <div className='flex flex-row mt-9'>
            <a href="#" className='font-normal text-oren mr-2 text-base'>Lihat Semua</a>
            <img src="/icon.svg"  />
          </div>
        </div>
        <div className='w-full flex justify-between'>
          <div className='w-full flex justify-around  flex-row items-center mt-11'>
            <div className='w-[30%] h-[430px] bg-[#F9F9F9] rounded-2xl flex justify-center items-center relative'>
              <img src="/dialog1.png" className='-ml-20 ' />
              <img src="/dialog2.png" className='absolute right-14 top-16 mt-2'  />
            </div>
            <div className='w-[30%] h-[430px] bg-[#F9F9F9] rounded-2xl flex justify-center items-center'>
              <img src="/X.png" className='-mt-6'/>
              <img src="/profile.png" className='ml-2' />
            </div>
            <div className='w-[30%] h-[430px] bg-[#F9F9F9] rounded-2xl flex justify-center items-center relative'>
              <img src="/cover.png" className='absolute left-16' />
              <img src="/galeri.png" className='-mr-20 -mt-5' />
            </div>
          </div>
        </div>

        {/* Cara Pemesanan */}

        <div className='flex flex-row md:flex-row xs:flex-col justify-around mt-[180px] relative'>
          <div className='flex flex-col'>
            <div className='text-[52px] text-[#121212] font-body md:block xs:hidden'>
              <h1>Cara </h1>
              <h1>Pemesanan</h1>
            </div>
            <div className='text-[26px] text-[#121212] font-body md:hidden xs:block'>
              <h1>Cara Pemesanan</h1>
            </div>
            <div className='flex flex-col gap-2 xs:hidden md:flex mt-3'>
              <p className='text-xl font-display'>Hanya 3 langkah untuk </p>
              <p className='text-xl font-display'>membuat undanganmu</p>
            </div>
            <div className='mt-5 md:hidden xs:block'>
              <p className='text-base font-display'>Hanya 3 langkah membuat undanganmu</p>
            </div>
            <div className='xs:hidden md:block'>
              <button className='px-10 py-5 bg-oren rounded-full mt-10 text-white font-display'>Pesan Sekarang</button>
            </div>
          </div>
          <img src="/vector.png" className='absolute left-[300px] top-10 xs:hidden md:block' />

          {/* 1 */}
          
          <div className='flex flex-col md:flex xs:hidden'>
            <div className='w-[72px] h-[72px] rounded-full bg-oren flex justify-center items-center'>
              <img src="/1.png" />
            </div>
            <div className='flex'>
              <div>
              <div className='flex-col gap-5 mt-6'>
                <div className='flex justify-between'>
                  <h1 className='font-display text-3xl font-medium'>Tentukan Paket</h1>
                  <p className='font-display text-xl text-[#252324]'>01</p>
                </div>
                <p className='font-display text-xl font-thin mt-5 text-[#252324]'>Pilih paket yang sesuai dengan <br /> budget dan impianmu.</p>
              </div>
            </div>
            </div>          
          </div>

          {/* Responsive 1 */}

          <div className='flex md:hidden xs:flex justify-between mt-5'>
            <div className='flex'>
              <div className='w-[72px] h-[72px] rounded-full bg-oren flex justify-center items-center md:hidden xs:flex mr-5'>
                <img src="/1.png" />
              </div>
              <div className='flex flex-col'>
                <h1 className='font-display md:text-3xl xs:text-xl font-medium'>Tentukan Paket</h1>
                <p className='font-display md:text-xl xs:text-base font-thin mt-3 text-[#252324]'>Pilih paket yang sesuai dengan <br /> budget dan impianmu.</p>
              </div>
            </div>
            <div><p className='font-display md:text-xl xs:text-base text-[#252324]'>01</p></div>   
          </div>

          {/* 2 */}

          <div className='flex flex-col md:flex xs:hidden'>
            <div className='w-[72px] h-[72px] rounded-full bg-oren flex justify-center items-center md:flex xs:hidden'>
              <img src="/2.png" />
            </div>
            <div className='flex justify-between mt-6'>
              <h1 className='font-display md:text-3xl xs:text-xl font-medium'>Isi Data</h1>
              <p className='font-display md:text-xl xs:text-base text-[#252324]'>02</p>
            </div>
            <p className='font-display md:text-xl xs:text-base font-thin mt-5 text-[#252324]'>Lengkapi data undanganmu <br /> dan lakukan pembayaran.</p>
          </div>

          {/* Responsive 2 */}

          <div className='flex md:hidden xs:flex justify-between mt-5'>
            <div className='flex'>
              <div className='w-[72px] h-[72px] rounded-full bg-oren flex justify-center items-center md:hidden xs:flex mr-5'>
                <img src="/2.png" />
              </div>
              <div className='flex flex-col'>
                <h1 className='font-display md:text-3xl xs:text-xl font-medium'>Isi Data</h1>
                <p className='font-display md:text-xl xs:text-base font-thin mt-3 text-[#252324]'>Pilih paket yang sesuai dengan <br /> budget dan impianmu.</p>
              </div>
            </div>
            <div><p className='font-display md:text-xl xs:text-base text-[#252324]'>02</p></div>   
          </div>

          {/* 3 */}

          <div className='flex flex-col md:flex xs:hidden'>
            <div className='w-[72px] h-[72px] rounded-full bg-oren flex justify-center items-center md:flex xs:hidden'>
              <img src="/3.png" />
            </div>
            <div className='flex justify-between mt-6'>
              <h1 className='font-display md:text-3xl xs:text-xl font-medium'>Link Dikirim</h1>
              <p className='font-display md:text-xl xs:text-base text-[#252324]'>03</p>
            </div>
            <p className='font-display md:text-xl xs:text-base font-thin mt-5 text-[#252324]'>Yeay! Undanganmu sudah <br /> online dan siap untuk disebar.</p>
          </div>

          {/* Responsive 3 */}

          <div className='flex md:hidden xs:flex justify-between mt-5'>
            <div className='flex'>
              <div className='w-[72px] h-[72px] rounded-full bg-oren flex justify-center items-center md:hidden xs:flex mr-5'>
                <img src="/3.png" />
              </div>
              <div className='flex flex-col'>
                <h1 className='font-display md:text-3xl xs:text-xl font-medium'>Tentukan Paket</h1>
                <p className='font-display md:text-xl xs:text-base font-thin mt-3 text-[#252324]'>Yeay! Undanganmu sudah <br /> online dan siap untuk disebar.</p>
              </div>
            </div>
            <div><p className='font-display md:text-xl xs:text-base text-[#252324]'>03</p></div>   
          </div>

          <div className='xs:block md:hidden'>
              <button className='w-full h-[65px] bg-oren rounded-full mt-10 text-white font-display'>Pesan Sekarang</button>
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default Theme