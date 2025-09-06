import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import banner1 from '../HeroBanner/Banner-1.jpeg';
import banner2 from '../HeroBanner/Banner-2.jpeg';
import banner3 from '../HeroBanner/Banner-3.jpeg';
import banner4 from '../HeroBanner/Banner-4.jpeg';

const Hero: React.FC = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <img src={banner1} alt="Tech Army Banner 1" className="w-full h-auto" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner2} alt="Tech Army Banner 2" className="w-full h-auto" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner3} alt="Tech Army Banner 3" className="w-full h-auto" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner4} alt="Tech Army Banner 4" className="w-full h-auto" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
