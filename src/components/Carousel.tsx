import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Paintings from "./Paintings";
import { Collection } from "../constants";
import "swiper/css";


type CarouselProps = {
  onSelectedItem: Collection;
};

const Carousel = ({ onSelectedItem }: CarouselProps) => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20} 
      slidesPerView={3}
      loop={true}
      autoplay={{
        delay: 2000, 
        disableOnInteraction: true,
      }}
      breakpoints={{
        480: { slidesPerView: 1 }, 
        1024: { slidesPerView: 1 }, 
      }}
    >
      {onSelectedItem.paintings.map(({ title, image, size, id }) => (
        <SwiperSlide key={id}>
          <Paintings title={title} image={image} size={size} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
