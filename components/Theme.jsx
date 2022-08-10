import React from 'react'

const Theme = () => {
  return (
    <div className='w-full h-full bg-putih'>
      <div className='w-full mt-auto relative'>
        <img src="/elipse20.png" className='absolute -top-28 left-0 opacity-50' />
        <div className='flex justify-center items-center mt-[180px] flex-col relative'>
          <h1 className='text-[52px] w-[738px] font-body'>Lebih dari 100+ Tema Eksklusif</h1>
          <h3 className='text-xl mt-9 font-normal font-display'>Pilih berbagai tema eksklusif dari kami untuk undanganmu</h3>
          <div className='flex flex-row mt-9'>
            <a href="#" className='font-normal text-oren mr-2'>Lihat Semua</a>
            <img src="/icon.svg"  />
          </div>
        </div>
        <div className='w-full flex justify-between'>
          <div className='w-full flex justify-around  flex-row items-center mt-11'>
            <div className='w-[393px] h-[430px] bg-[#F9F9F9] rounded-2xl flex justify-center items-center relative'>
              <img src="/dialog1.png" className='-ml-20 ' />
              <img src="/dialog2.png" className='absolute right-14 top-16 mt-2'  />
            </div>
            <div className='w-[393px] h-[430px] bg-[#F9F9F9] rounded-2xl flex justify-center items-center'>
              <img src="/X.png" className='-mt-6'/>
              <img src="/profile.png" className='ml-2' />
            </div>
            <div className='w-[393px] h-[430px] bg-[#F9F9F9] rounded-2xl flex justify-center items-center relative'>
              <img src="/cover.png" className='absolute left-16' />
              <img src="/galeri.png" className='-mr-20 -mt-5' />
            </div>
          </div>
        </div>
        <div className='flex flex-row md:flex-row xs:flex-col justify-around mt-[180px] relative xs:items-center'>
          <div className='flex flex-col'>
            <div className='text-[52px] text-[#121212] font-body xs:flex md:block'>
              <h1>Cara </h1>
              <h1>Pemesanan</h1>
            </div>
            <div className='flex flex-col xs:flex md:gap-1 xs:flex-row md:flex-col'>
              <p className='text-xl font-display'>Hanya 3 langkah untuk </p>
              <p className='text-xl font-display'>membuat undanganmu</p>
            </div>
            <div>
              <button className='px-10 py-5 bg-oren rounded-full mt-10 text-white font-display'>Pesan Sekarang</button>
            </div>
          </div>
          <img src="/vector.png" className='absolute left-[230px] top-10 xs:hidden' />
          <div className='flex flex-col'>
            <div className='w-[72px] h-[72px] rounded-full bg-oren flex justify-center items-center'>
              <img src="/1.png" />
            </div>
            <div className='w-[288px] flex justify-between mt-6'>
              <h1 className='font-display text-3xl font-medium'>Tentukan Paket</h1>
              <p className='font-display text-xl text-[#252324]'>01</p>
            </div>
            <p className='font-display text-xl font-thin mt-5 text-[#252324]'>Pilih paket yang sesuai dengan <br /> budget dan impianmu.</p>
          </div>
          <div className='flex flex-col'>
            <div className='w-[72px] h-[72px] rounded-full bg-oren flex justify-center items-center'>
              <img src="/2.png" />
            </div>
            <div className='w-[288px] flex justify-between mt-6'>
              <h1 className='font-display text-3xl font-medium'>Isi Data</h1>
              <p className='font-display text-xl text-[#252324]'>02</p>
            </div>
            <p className='font-display text-xl font-thin mt-5 text-[#252324]'>Lengkapi data undanganmu <br /> dan lakukan pembayaran.</p>
          </div>
          <div className='flex flex-col'>
            <div className='w-[72px] h-[72px] rounded-full bg-oren flex justify-center items-center'>
              <img src="/3.png" />
            </div>
            <div className='w-[288px] flex justify-between mt-6'>
              <h1 className='font-display text-3xl font-medium'>Link Dikirim</h1>
              <p className='font-display text-xl text-[#252324]'>03</p>
            </div>
            <p className='font-display text-xl font-thin mt-5 text-[#252324]'>Yeay! Undanganmu sudah <br /> online dan siap untuk disebar.</p>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Theme