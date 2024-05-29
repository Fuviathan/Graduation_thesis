import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Mousewheel, Pagination } from 'swiper/modules';

export default function Carousel() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Mousewheel, Pagination]}
                className="w-full my-4 h-fit"
                loop={true}
                autoplay={{
                    delay: 2500,
                }}
                style={{
                    "--swiper-pagination-bottom": '-4px'
                }}
            >
                <SwiperSlide>
                    <div className='flex flex-row p-4 h-[30rem]'>
                        <img className='object-cover w-2/3 rounded-l-lg' src='https://thumbs.dreamstime.com/b/businesswoman-office-casual-shirt-use-computer-graphic-designer-choose-color-sample-to-match-publication-130344292.jpg'></img>
                        <div className='flex flex-col justify-center w-1/3 px-4 rounded-r-lg bg-light-brown'>
                            <div className='font-sans text-3xl font-bold tracking-widest uppercase text-orange-gray '>Laptop</div>
                            <div className='font-sans text-2xl font-semibold tracking-wide text-orange-gray'>Chúng tôi cung cấp những mẫu laptop hiện đại và tiện lợi nhất</div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-row p-4 h-[30rem]'>
                        <div className='flex flex-col justify-center w-1/3 px-4 rounded-l-lg bg-light-brown'>
                            <div className='font-sans text-3xl font-bold tracking-widest text-right uppercase text-orange-gray '>Laptop</div>
                            <div className='font-sans text-2xl font-semibold tracking-wide text-right text-orange-gray'>Chúng tôi cung cấp những mẫu laptop hiện đại và tiện lợi nhất</div>
                        </div>
                        <img className='object-cover w-2/3 rounded-r-lg' src='https://mockups-design.com/wp-content/uploads/2022/06/Smartphone_on_White_Background_Mockup_1.jpg'></img>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}



