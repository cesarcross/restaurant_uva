import React from 'react';

import { FooterContainer, Sub, Logo, Text, Caravan } from './Footer.style';
import LogoIcon from '../../assets/images/logo_mob.png';

const Footer = () => (
  <FooterContainer>
    <Sub>
      <Logo>
        <img src={LogoIcon} alt="" />
      </Logo>
      <Text>
        <span>|</span>Todos os Direitos Reservados
      </Text>
    </Sub>
    <Sub>
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
    </Sub>
  </FooterContainer>
);

export default Footer;
