"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Carousel() {
  return (
    <>
      <Swiper
        // pagination={{
        //   type: 'progressbar',
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        slidesPerView={5}
        spaceBetween={15}
        centeredSlidesBounds={true}
        // pagination={{
        //   clickable: true,
        // }}
        className="mySwiper"
      >
        <SwiperSlide>      
        <Image
        src="/assets/homecarousel/carousel1.svg"
        alt="logo"
        width={266}
        height={300}
        className="max-h-full z-50"
        />
        </SwiperSlide>
        <SwiperSlide>      
        <Image
        src="/assets/homecarousel/carousel1.svg"
        alt="logo"
        width={266}
        height={300}
        className="max-h-full z-50"
        />
        </SwiperSlide>
        <SwiperSlide>      
        <Image
        src="/assets/homecarousel/carousel1.svg"
        alt="logo"
        width={266}
        height={300}
        className="max-h-full z-50"
        />
        </SwiperSlide>
        <SwiperSlide>      
        <Image
        src="/assets/homecarousel/carousel1.svg"
        alt="logo"
        width={266}
        height={300}
        className="max-h-full z-50"
        />
        </SwiperSlide>
        <SwiperSlide>      
        <Image
        src="/assets/homecarousel/carousel1.svg"
        alt="logo"
        width={266}
        height={300}
        className="max-h-full z-50"
        />
        </SwiperSlide>
        <SwiperSlide>      
        <Image
        src="/assets/homecarousel/carousel1.svg"
        alt="logo"
        width={266}
        height={300}
        className="max-h-full z-50"
        />
        </SwiperSlide>
        <SwiperSlide>      
        <Image
        src="/assets/homecarousel/carousel1.svg"
        alt="logo"
        width={266}
        height={300}
        className="max-h-full z-50"
        />
        </SwiperSlide>
        <SwiperSlide>      
        <Image
        src="/assets/homecarousel/carousel1.svg"
        alt="logo"
        width={266}
        height={300}
        className="max-h-full z-50"
        />
        </SwiperSlide>
        <SwiperSlide>      
        <Image
        src="/assets/homecarousel/carousel1.svg"
        alt="logo"
        width={266}
        height={300}
        className="max-h-full z-50"
        />
        </SwiperSlide>
        <SwiperSlide>      
        <Image
        src="/assets/homecarousel/carousel1.svg"
        alt="logo"
        width={266}
        height={300}
        className="max-h-full z-50"
        />
        </SwiperSlide>
        {/* <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
