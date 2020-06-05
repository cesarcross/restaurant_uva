import React from 'react';
import { Element } from 'react-scroll';

import { ContactContainer, Form, Map, WidthMax } from './Contact.style';

import map from '../../assets/images/map.png';

const Contact = () => (
  <Element id="contato" name="contato">
    <ContactContainer>
      <WidthMax>
        <Form>
          <form
            id="contactform"
            action="https://formsubmit.io/send/ebaf272f-0e6b-441c-8c2a-7881d541c7be"
            method="POST"
          >
            <h3>Entre em contato :)</h3>
            <input
              name="_redirect"
              type="hidden"
              id="name"
              value="https://restaurant-quitandavegana.now.sh/"
            />
            <input name="name" type="text" id="name" placeholder="Nome" />
            <input name="email" type="email" id="email" placeholder="Email" />
            <textarea
              name="comment"
              id="comment"
              rows="10"
              placeholder="Escreva sua mensagem"
            />
            <input
              name="_formsubmit_id"
              type="text"
              style={{ display: 'none' }}
            />
            <input type="submit" value="Enviar Pedido" />
          </form>
        </Form>
        <Map>
          <img src={map} alt="" />
        </Map>
      </WidthMax>
    </ContactContainer>
  </Element>
);

export default Contact;
