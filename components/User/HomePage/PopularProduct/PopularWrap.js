import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Mousewheel, Pagination } from 'swiper/modules';
import ProductCard from '@/components/User/productCard/ProductCard';
import { getProductByBrand, getProducts } from '../../../../state/Products/Action';

export default function PopularWrap() {
    const dispatch = useDispatch()
    const [productCateGory,setProductCateGory] = useState([]);
    const handleData = async () => {
      const data= await dispatch(getProductByBrand(""))
      setProductCateGory(data?.content)
    }
    useEffect(() => {
        handleData()
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
                {productCateGory.map((item,index)=>( <SwiperSlide key={index} >
                    <ProductCard item={item}></ProductCard>
                </SwiperSlide>))}
                {/* <SwiperSlide>
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
                </SwiperSlide> */}
            </Swiper>
        )
    } else return <></>
}
