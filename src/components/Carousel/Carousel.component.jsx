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
import featured5 from '../../assets/images/featured5.png';

const Carousel = ({ showCarousel }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <CarouselContainer showCarousel={showCarousel}>
      <MobileImage>
        <img src={featured1} alt="" />
      </MobileImage>

      <SliderContainer>
        <Slider {...settings}>
          <CarouselItem>
            <img src={featured1} alt=""></img>
          </CarouselItem>
          <CarouselItem>
            <img src={featured3} alt=""></img>
          </CarouselItem>
          <CarouselItem>
            <img src={featured5} alt=""></img>
          </CarouselItem>
        </Slider>
      </SliderContainer>
    </CarouselContainer>
  );
};

export default Carousel;
