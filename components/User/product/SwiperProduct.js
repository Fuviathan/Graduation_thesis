import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function SwiperProduct({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className='border-2'>
      <Swiper
        style={{
          "--swiper-navigation-color": "#ede2d1",
        }}
        // className={styles.mySwiper2}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full rounded-lg h-96"
      >
        {images?.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center w-full h-full">
              <img
                src={image.imageUrl}
                className="block object-contain w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <Swiper
        centeredSlides={true}
        // className={styles.mySwiper}
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={15}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="h-32 mt-5 border-2 rounded-lg thumbs"
      >
        {images?.map((image, index) => (
          <SwiperSlide key={index}>
            <button className="w-full h-full">
              <img src={image.url} className="object-contain w-full h-full " />
            </button>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
}
