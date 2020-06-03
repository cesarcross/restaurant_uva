import React from "react";

import { CarouselContainer, CarouselImage } from "./Carousel.style";

import featured1 from "../../assets/images/featured1.png";

const Carousel = () => (
  <CarouselContainer>
    <CarouselImage>
      <img src={featured1} alt="" />
    </CarouselImage>
  </CarouselContainer>
);

export default Carousel;
