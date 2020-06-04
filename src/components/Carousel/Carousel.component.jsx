import React from 'react';

import { CarouselContainer, CarouselImage } from './Carousel.style';

import featured1 from '../../assets/images/featured1.png';

const Carousel = ({ showCarousel }) => (
  <CarouselContainer showCarousel={showCarousel}>
    <CarouselImage>
      <img src={featured1} alt="" />
      {/* <Text>
        <p>Comida Vegana</p>
        <p>com sabor</p>
        <p>italiano</p>
      </Text> */}
    </CarouselImage>
  </CarouselContainer>
);

export default Carousel;
