import React from 'react'

export default function Footer() {
  return (
    <div className='w-full pt-5 pb-3 mt-8 bg-light-brown'>
      <div className='grid grid-cols-4 mx-auto max-w-[1320px]'>
        <div className='px-3 tracking-wide grid-row-5 text-orange-gray'>
          <div className='mb-6 text-2xl font-bold uppercase'>Liên hệ với chúng tôi</div>
          <div className='mb-4 '>Hno: 250 Kim Giang<br></br>Hoang Mai<br></br>Ha Noi</div>
          <div className='mb-2 '>+84 12345678</div>
          <div className='mb-2 '>ElectricalDevice@gmail.com</div>
          {/* <div className=''>Contact us</div> */}
        </div>
        <div className='px-3 tracking-wide grid-row-4 text-orange-gray'> 
          <div className='mb-6 text-2xl font-bold uppercase'>Thông tin</div>
          <div className='pb-1 mb-2 '>Chính sách bảo mật</div>
          <div className='pb-1 mb-2 '>Chính sách vận chuyển</div>
          <div className='pb-1 mb-2 '>Chính sách hoàn trả</div>
        </div>
        <div className='px-3 tracking-wide grid-row-3 text-orange-gray'> 
          <div className='mb-6 text-2xl font-bold uppercase'>Tài khoản</div>
          <div className='pb-1 mb-2 '>Về chúng tôi</div>
          {/* <div className='pb-1 mb-2 '>Liên hệ</div> */}
        </div>
        <div className='px-3 tracking-wide text-orange-gray grid-row-3'> 
          <div className='mb-6 text-2xl font-bold uppercase'>Ứng dụng</div>
          <div className='mb-2 '>Tải ứng dụng ngay để nhận được ưu đãi lên tới 15% cho đơn hàng đầu tiên ...!</div>
        </div>
      </div>
    </div>
  )
}
