import React from "react";

import { EventContainer, Title, Image, Button } from "./Event.style";

import event1 from "../../assets/images/event1.png";

const Event = () => (
  <EventContainer>
    <Title>Eventos & Festas</Title>
    <Image>
      <img src={event1} alt="" />
    </Image>
    <Button>Reservar para Evento</Button>
  </EventContainer>
);

export default Event;
