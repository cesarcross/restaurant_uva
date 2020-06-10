import React from 'react';
import Slider from 'react-slick';

import {
  CarouselContainer,
  MobileImage,
  SliderContainer,
  CarouselItem,
} from './Carousel.style';

import featured1 from '../../assets/images/featured1.png';
import featured3 from '../../assets/images/featured3.png';
import featured7 from '../../assets/images/featured7.png';

const Carousel = ({ showCarousel }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <CarouselContainer showCarousel={showCarousel}>
      <MobileImage>
        <img src={featured3} alt="" />
      </MobileImage>

      <SliderContainer>
        <Slider {...settings}>
          <CarouselItem>
            <img src={featured3} alt=""></img>
          </CarouselItem>
          <CarouselItem>
            <img src={featured7} alt=""></img>
          </CarouselItem>
          <CarouselItem>
            <img src={featured1} alt=""></img>
          </CarouselItem>
        </Slider>
      </SliderContainer>
    </CarouselContainer>
  );
};

export default Carousel;
