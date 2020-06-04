import React from 'react';

import { EventContainer, Title, Image, Button } from './Event.style';

import event1 from '../../assets/images/event1.png';

import eventbutton from '../../assets/images/eventbutton.png';

const Event = () => (
  <EventContainer>
    <Title>
      <span>Eventos</span>& Festas
    </Title>
    <Image>
      <img src={event1} alt="" />
    </Image>

    <Button
      href="https://www.thefork.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* <WhatsappIcon /> */}
      <img src={eventbutton} alt="" />
    </Button>
  </EventContainer>
);

export default Event;
