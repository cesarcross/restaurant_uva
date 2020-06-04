import React from 'react';

import {
  MenuContainer,
  MenuTitle,
  MenuText,
  MenuDelivery,
  MenuImage,
} from './Menu.style';

import menu from '../../assets/images/menu.png';

const Menu = () => (
  <MenuContainer>
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
    <MenuDelivery>
      <h3>Peça Agora!</h3>
    </MenuDelivery>
    <MenuImage>
      <img src={menu} alt="" />
    </MenuImage>
  </MenuContainer>
);

export default Menu;
