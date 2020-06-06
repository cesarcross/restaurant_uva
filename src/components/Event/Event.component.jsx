import React from 'react';
import { Element } from 'react-scroll';
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
import event4 from '../../assets/images/event4.png';
import event5 from '../../assets/images/event5.png';

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
    <Element id="eventos" name="eventos">
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
              <img src={event4} alt="" />
            </CarouselItem>
            <CarouselItem>
              <img src={event5} alt="" />
            </CarouselItem>
          </Slider>
        </SliderContainer>
        <Button
          href="https://www.thefork.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Reservar para Evento</h3>
        </Button>
      </EventContainer>
    </Element>
  );
};

export default Event;
