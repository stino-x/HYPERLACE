import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

interface CarouselProps {
  shoebrands: ShoeBrand[];
}

interface ShoeBrand {
  name: string;
  image: string;
  versions: {
    name: string;
    details: {
      amountAvailable: number;
      price: number;
    };
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ shoebrands }) => {
  return (
    <Swiper
      navigation={true}
      modules={[Pagination, Navigation]}
      slidesPerView={5}
      spaceBetween={15}
      centeredSlidesBounds={true}
      className='mySwiper'
    >
      {shoebrands.map((brand) => (
        // brand.versions.map((version) => (
          <SwiperSlide key={`${brand.name}`}>
            <Image
              src={brand.image}
              alt='logo'
              width={266}
              height={300}
              className='max-h-full z-50'
            />
          </SwiperSlide>
        // ))
      ))}
    </Swiper>
  );
};

export default Carousel;
