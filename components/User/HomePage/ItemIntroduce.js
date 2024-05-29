import React from 'react'

export default function ItemIntroduce() {
  return (
    <div className='flex flex-row justify-between mx-auto min-h-fit'>
      <div className='relative flex w-1/4 mx-4 bg-black rounded-lg h-5/6'>
        <img src='/famous-1.webp' className='pt-12 rounded-lg' alt='brand' />
        <div className='absolute z-10 w-full h-full px-4 pt-6 text-white'>
          <div className='mb-4 text-2xl font-bold'>Smart Watch Series 7</div>
          <div className=''>Từ $399 hoặc $16.62/tháng. trong 24 tháng.*</div>
        </div>
      </div>
      <div className='relative flex w-1/4 mx-4 rounded-lg shadow-lg h-5/6'>
        <div className='absolute z-10 w-full h-full px-4 pt-6 text-black'>
          <div className='mb-4 text-2xl font-bold'>Loa âm thanh vòm</div>
          <div className=''>Từ $699 hoặc $116.58/tháng. trong 12 tháng.*</div>
        </div>
        <img src='/sound.webp' className='pt-12 rounded-lg' alt='brand' /> 
      </div>    
      <div className='relative flex w-1/4 mx-4 rounded-lg shadow-lg h-5/6'>
        <div className='absolute z-10 w-full h-full px-4 pt-6 text-black '>
          <div className='mb-4 text-2xl font-bold'>Độ sáng 600 nit</div>
          <div className=''>Màn hình 27-inch độ phân giải 5K </div>
        </div>
        <img src='/laptop.webp' className='pt-12 rounded-lg' alt='brand' /> 
      </div>   
      <div className='relative flex w-1/4 mx-4 rounded-lg shadow-lg h-5/6'>
        <div className='absolute z-10 w-full h-full px-4 pt-6 text-black'>
          <div className='mb-4 text-2xl font-bold'>Smartphone 13 Pro</div>
          <div className=''>Đã có màu xanh. Từ $999.00 hoặc $41.62/tháng. trong 24 tháng. </div>
        </div>
        <img src='/smartphone.webp' className='pt-12 rounded-lg' alt='brand' />
      </div>
    </div>

  )
}
