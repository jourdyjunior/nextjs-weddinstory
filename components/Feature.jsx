import React from 'react'

const Feature = () => {
    return (
        <div className='w-full h-full relative bg-putih'>
            <img src="/elipse20.png" className='absolute top-[450px] left-0 opacity-50' />
            <img src="/right2.png" className='right-0 bottom-60 absolute' />
            <div className='max-w-[1240px] m-auto'>
                <div className='flex flex-row mt-[204px] md:flex-row xs:flex-col-reverse justify-between'> 
                    <div  className='md:flex md:mt-0 xs:mt-5 xs:items-center'>
                        <img src="/hp2.png" alt="/"/>
                    </div>
                    <div className='ml-[79px] mt-[120px]'>
                        <h4 className='font-display font-medium text-[#E38064] text-xl'>Fitur Unggulan</h4>
                        <h1 className='text-6xl mt-5 font-body'>Informasi Detail</h1>
                        <h1 className='text-6xl mt-2 font-body'>Acara</h1>
                        <p className='font-display leading-5 text-xl mt-[36px]'>Berikan tamu undanganmu kepastian waktu. Fitur ini</p>
                        <p className='font-display leading-5 text-xl mt-4'>dapat menampilkan detail waktu untuk acara</p>
                        <p className='font-display leading-5 text-xl mt-4'>spesialmu agar tamu undangan dapat hadir sesuai</p>
                        <p className='font-display leading-5 text-xl mt-4'>dengan waktu.</p>
                        <img src="/tandabawah.png" className='mt-[72px] xs:hidden md:block'/>
                    </div>
                </div>
                <div className='flex flex-row md:flex-row xs:flex-col xs:items-center justify-between'>
                    <div className='mt-[266px]'>
                        <h4 className='font-display font-medium text-[#E38064] text-xl'>Fitur Unggulan</h4>
                        <h1 className='text-6xl mt-5 w-[529px] font-body'>RSVP</h1>
                        <p className='font-display leading-5 text-xl mt-9'>Ketahui siapa saja yang hadir di acara spesialmu.</p>
                        <p className='font-display leading-5 text-xl mt-4'></p>
                        <p className='font-display leading-5 text-xl mt-4'>Fitur ini berfungsi sebagai pengganti buku tamu</p>
                        <p className='font-display leading-5 text-xl mt-4'>untuk mendata siapa saja yang hadir di acaramu</p>
                        <p className='font-display leading-5 text-xl mt-4'>serta bisa memberikan doa dan ucapan di</p>
                        <p className='font-display leading-5 text-xl mt-4'>dalamnya.</p>
                        <img src="/tandabawah.png" className='mt-[72px] xs:hidden md:block'/>
                    </div>
                    <img src="/hp3.png" className='mt-[180px] ml-[107px]'/>
                </div>
                <div className='flex flex-row mt-[204px] justify-between md:flex-row xs:flex-col-reverse'> 
                    <div>
                        <img src="/ptl.png" alt="/" className='md:mt-0 xs:mt-5 md:flex xs:justify-center'/>
                    </div>
                    <div className='ml-[79px] mt-[150px]'>
                        <h4 className='font-display font-medium text-[#E38064] text-xl'>Fitur Unggulan</h4>
                        <h1 className='text-6xl mt-5 h-[76px] font-body'>Peta Lokasi</h1>
                        <p className='font-display leading-5 text-xl mt-9'>Mempermudah tamu menemukan lokasi acara</p>
                        <p className='font-display leading-5 text-xl mt-4'>spesialmu. Fitur ini memberikan peta digital yang</p>
                        <p className='font-display leading-5 text-xl mt-4'>terhubung ke google maps sebagai pemandu </p>
                        <p className='font-display leading-5 text-xl mt-4'> menuju ke lokasimu.</p>
                        <img src="/tandabawah.png" className='mt-[72px] xs:hidden md:block'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature