import React from 'react'
import PopularWrap from './PopularWrap'

export default function PopularProduct() {
    return (
        <div className='flex flex-col mt-16 w-full mx-auto max-w-[1320px]'>
            <div className='mb-2 text-2xl font-bold max-w-[1320px] text-black'>Một vài sản phẩm của chúng tôi</div>
            <div className='py-2 max-w-[1320px]'>
                <PopularWrap />
            </div>
        </div>
    )
}
