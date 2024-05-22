import { getProducts } from '@/state/Products/Action'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Mousewheel, Pagination } from 'swiper/modules';
import ProductCard from '@/components/User/productCard/ProductCard';

export default function PopularWrap() {
    const notIconAdd = true
    const [productArray, setProductArray] = useState()
    const dispatch = useDispatch()
    const productCateGory = useSelector((state) => state?.product?.products?.content)
    useEffect(() => {
        dispatch(getProducts())
    }, [])
    if (productCateGory !== undefined) {
        return (
            <Swiper
                spaceBetween={30}
                slidesPerView={5}
                mousewheel={true}
                className="max-w-[1320px] my-4 h-fit"
                modules={[Autoplay, Mousewheel, Pagination]}
                loop={true}
                autoplay={{
                    delay: 2500,
                }}
            >
                {/* <SwiperSlide>
                <ProductCard item={productArray[6]}></ProductCard>
            </SwiperSlide> */}
                <SwiperSlide>
                    <ProductCard item={productCateGory[1]}></ProductCard>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard item={productCateGory[2]}></ProductCard>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard item={productCateGory[3]}></ProductCard>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard item={productCateGory[4]}></ProductCard>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard item={productCateGory[0]}></ProductCard>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard item={productCateGory[4]}></ProductCard>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard item={productCateGory[3]}></ProductCard>
                </SwiperSlide>
            </Swiper>
        )
    } else return <></>
}
