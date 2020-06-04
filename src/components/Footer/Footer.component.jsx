import React from 'react';

import { FooterContainer, Logo, Text, Caravan } from './Footer.style';
import LogoIcon from '../../assets/images/logo_mob.png';

const Footer = () => (
  <FooterContainer>
    <Logo>
      <img src={LogoIcon} alt="" />
    </Logo>
    <Text>Todos os Direitos Reservados</Text>
    <Caravan>
      Desenvolvido por{' '}
      <a
        href="https://www.codecaravan.com.br"
        target="_blank"
        rel="noopener noreferrer"
      >
        Code Caravan
      </a>
    </Caravan>
  </FooterContainer>
);

export default Footer;
