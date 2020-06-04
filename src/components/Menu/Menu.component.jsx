import React from 'react';

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

const Menu = () => (
  <MenuContainer>
    <Container1>
      <MenuTitle>
        <span>Frescos</span>& Orgânicos
      </MenuTitle>
      <MenuText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis
        enim sed mi fringilla malesuada. Morbi lobortis enim sed mi fringilla
        malesuada. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Morbi
        lobortis enim sed mi fringilla malesuada. Morbi lobortis enim sed mi
        fringilla malesuada.
      </MenuText>
      <DeliveryText>
        <h3>Peça Agora!</h3>
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
        <img src={menu} alt="" />
      </MenuImage>
    </Container2>
  </MenuContainer>
);

export default Menu;
