import React from "react";

import { FooterContainer, Logo, Text, Caravan } from "./Footer.style";

const Footer = () => (
  <FooterContainer>
    <Logo>
      <img src="" alt="" />
    </Logo>
    <Text>Todos os Direitos Reservados</Text>
    <Caravan>
      Desenvolvido por{" "}
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
