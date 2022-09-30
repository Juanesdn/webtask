import Image from 'next/image';
import { A11y, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export interface ISlider {
  photos: string[];
}

const Slider: React.FC<ISlider> = ({ photos }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop
    >
      {photos.map((photo, i) => (
        <SwiperSlide key={i}>
          <div className="md:w-3/4 xs:w-full xs:h-64 md:h-[45rem] relative">
            <Image src={photo} alt="image" layout="fill" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
