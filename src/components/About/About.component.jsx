import React from "react";

import {
  AboutContainer,
  AboutTitle,
  AboutText,
  AboutImage,
  AboutImage2,
  AboutTitle2,
  AboutText2,
  AboutDiv1,
  AboutDiv2,
} from "./About.style";

import about1 from "../../assets/images/about1.png";
import about2 from "../../assets/images/about2.png";

const About = () => (
  <AboutContainer>
    <AboutDiv1>
      <AboutTitle>Sonho & Dedicação</AboutTitle>
      <AboutText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis
        enim sed mi fringilla malesuada. Morbi lobortis enim sed mi fringilla
        malesuada. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Morbi
        lobortis enim sed mi fringilla malesuada. Morbi lobortis enim sed mi
        fringilla malesuada.
      </AboutText>
      <AboutImage>
        <img src={about1} alt="" />
      </AboutImage>
    </AboutDiv1>
    <AboutDiv2>
      <AboutTitle2>Família e Tradição</AboutTitle2>
      <AboutText2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis
        enim sed mi fringilla malesuada. Morbi lobortis enim sed mi fringilla
        malesuada. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Morbi
        lobortis enim sed mi fringilla malesuada. Morbi lobortis enim sed mi
        fringilla malesuada.
      </AboutText2>
      <AboutImage2>
        <img src={about2} alt="" />
      </AboutImage2>
    </AboutDiv2>
  </AboutContainer>
);

export default About;
