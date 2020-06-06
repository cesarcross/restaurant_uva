import React from 'react';
import { Element } from 'react-scroll';

import {
  MenuContainer,
  Container1,
  MenuTitle,
  MenuText,
  DeliveryText,
  DeliveryContainer,
  Whatsapp,
  Ifood,
  Container2,
  MenuImage,
} from './Menu.style';

import whatsapp from '../../assets/images/whatsappicon.png';
import ifood from '../../assets/images/ifood.png';
import menu from '../../assets/images/menu.png';
import menuuva from '../../assets/images/menuuva.jpg';

const Menu = () => (
  <Element id="cardapio" name="cardapio">
    <MenuContainer>
      <Container1>
        <MenuTitle>
          <span>Frescos</span>& Orgânicos
        </MenuTitle>
        <MenuText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          lobortis enim sed mi fringilla malesuada. Morbi lobortis enim sed mi
          fringilla malesuada. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Morbi lobortis enim
        </MenuText>
        <DeliveryText>
          <h3>Peça agora!</h3>
        </DeliveryText>
        <DeliveryContainer>
          <Whatsapp
            href="https://web.whatsapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <WhatsappIcon /> */}
            <img src={whatsapp} alt="" />
          </Whatsapp>
          <Ifood
            href="http://www.ifood.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ifood} alt="" />
          </Ifood>
        </DeliveryContainer>
      </Container1>
      <Container2>
        <MenuImage>
          <a href={menuuva} target="_blank" rel="noopener noreferrer">
            <img src={menu} alt="" />
          </a>
        </MenuImage>
      </Container2>
    </MenuContainer>
  </Element>
);

export default Menu;
