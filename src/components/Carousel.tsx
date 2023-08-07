import Slider, { LazyLoadTypes } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Paintings from "./Paintings";
import { Collection } from "../constants";

type CarouselProps = {
  onSelectedItem: Collection;
};

const Carousel = ({ onSelectedItem }: CarouselProps): JSX.Element => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    focusOnSelect: true,
    arrows: false,
    draggable: true,
    lazyLoad: "ondemand" as LazyLoadTypes,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplaySpeed: 2000,
          speed: 1200,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {onSelectedItem.paintings.map(({ title, image, size, id }) => (
        <Paintings key={id} title={title} image={image} size={size} />
      ))}
    </Slider>
  );
};

export default Carousel;
