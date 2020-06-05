import React from 'react';
import Slider from 'react-slick';

import {
  EventContainer,
  Title,
  SliderContainer,
  CarouselItem,
  Button,
} from './Event.style';

import event1 from '../../assets/images/event1.png';
import event2 from '../../assets/images/event2.png';
import event3 from '../../assets/images/event3.png';

// import eventbutton from '../../assets/images/eventbutton.png';

const Event = () => {
  const minWidth = window.matchMedia('(min-width: 768px)');
  const WidthChange = (minWidth) => (minWidth.matches ? 3 : 1);

  const settings = {
    arrows: true,
    acessibility: true,
    infinite: true,
    speed: 500,
    slidesToShow: WidthChange(minWidth),
    slidesToScroll: WidthChange(minWidth),
  };

  return (
    <EventContainer>
      <Title>
        <span>Eventos</span>& Festas
      </Title>
      <SliderContainer>
        <Slider {...settings}>
          <CarouselItem>
            <img src={event1} alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src={event2} alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src={event3} alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src={event2} alt="" />
          </CarouselItem>
        </Slider>
      </SliderContainer>
      <Button
        href="https://www.thefork.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>Faça sua Reserva</h3>
      </Button>
    </EventContainer>
  );
};

export default Event;
