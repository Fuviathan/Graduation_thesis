import React from 'react'
import { TruckIcon, GiftIcon, DevicePhoneMobileIcon, ReceiptPercentIcon, CreditCardIcon } from '@heroicons/react/24/outline'

export default function features() {
  return (
    <>
        <div className='flex flex-row justify-between px-4 my-16'>
            <div className='flex flex-row items-center'>
                <TruckIcon className='w-10 h-10 mr-4' />
                <div className='flex flex-col'>
                    <div className='font-bold tracking-wide text-left'>Miễn phí vận chuyển</div>
                    <div className='mt-2 text-sm text-left'>Tất cả các đơn hàng từ 5$ trở lên</div>
                </div>
            </div>
            <div className='flex flex-row items-center'>
                <GiftIcon className='w-10 h-10 mr-4' />
                <div className='flex flex-col'>
                    <div className='font-bold tracking-wide text-left'>Ưu đãi hấp dẫn mỗi ngày</div>
                    <div className='mt-2 text-sm text-left'>Tiết kiệm tối đa 25%</div>
                </div>
            </div>
            <div className='flex flex-row items-center'>
                <DevicePhoneMobileIcon className='w-10 h-10 mr-4' />
                <div className='flex flex-col'>
                    <div className='font-bold tracking-wide text-left'>Đội ngũ hỗ trợ 24/7</div>
                    <div className='mt-2 text-sm text-left'>Mua sắm với những chuyên gia</div>
                </div>
            </div>
            <div className='flex flex-row items-center'>
                <ReceiptPercentIcon className='w-10 h-10 mr-4' />
                <div className='flex flex-col'>
                    <div className='font-bold tracking-wide text-left'>Giá cả hợp lý</div>
                    <div className='mt-2 text-sm text-left'>Giá cả được lấy từ nhà máy sản xuất</div>
                </div>
            </div>
            <div className='flex flex-row items-center'>    
                <CreditCardIcon className='w-10 h-10 mr-4' />
                <div className='flex flex-col'>
                    <div className='font-bold tracking-wide text-left'>Giao dịch an toàn</div>
                    <div className='mt-2 text-sm text-left'>100% các giao dịch đều được bảo mật</div>
                </div>
            </div>
        </div>
    </>
  )
}
