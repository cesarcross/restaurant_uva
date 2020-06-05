import React from 'react';
import { Element } from 'react-scroll';

import {
  AboutContainer,
  Sub1,
  AboutTitle,
  AboutText,
  Sub2,
  AboutImage,
  AboutImage2,
  AboutTitle2,
  AboutText2,
  AboutDiv1,
  AboutDiv2,
  AboutDiv3,
} from './About.style';

import about1 from '../../assets/images/about1.png';
import about2 from '../../assets/images/about2.png';

const About = () => (
  <Element id="sobre" name="sobre">
    <AboutContainer>
      <AboutDiv1>
        <Sub1>
          <AboutTitle>
            <span>Sonho</span>& Dedicação
          </AboutTitle>
          <AboutText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            lobortis enim sed mi fringilla malesuada. Morbi lobortis enim sed mi
            fringilla malesuada. Lorem ipsum dolor sit amet,consectetur
            adipiscing elit. Morbi lobortis enim sed mi fringilla malesuada.
            Morbi lobortis enim sed mi fringilla malesuada.
          </AboutText>
        </Sub1>
        <Sub2>
          <AboutImage>
            <img src={about1} alt="" />
          </AboutImage>
        </Sub2>
      </AboutDiv1>
      <AboutDiv3>
        <Sub2>
          <AboutImage>
            <img src={about1} alt="" />
          </AboutImage>
        </Sub2>
        <Sub1>
          <AboutTitle>
            <span>Sonho</span>& Dedicação
          </AboutTitle>
          <AboutText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            lobortis enim sed mi fringilla malesuada. Morbi lobortis enim sed mi
            fringilla malesuada. Lorem ipsum dolor sit amet,consectetur
            adipiscing elit. Morbi lobortis enim sed mi fringilla malesuada.
            Morbi lobortis enim sed mi fringilla malesuada.
          </AboutText>
        </Sub1>
      </AboutDiv3>
      <AboutDiv2>
        <Sub1>
          <AboutTitle2>
            <span>Família</span>& Tradição
          </AboutTitle2>
          <AboutText2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            lobortis enim sed mi fringilla malesuada. Morbi lobortis enim sed mi
            fringilla malesuada. Lorem ipsum dolor sit amet,consectetur
            adipiscing elit. Morbi lobortis enim sed mi fringilla malesuada.
            Morbi lobortis enim sed mi fringilla malesuada.
          </AboutText2>
        </Sub1>
        <Sub2>
          <AboutImage2>
            <img src={about2} alt="" />
          </AboutImage2>
        </Sub2>
      </AboutDiv2>
      {/* <AboutDiv3>
      <Sub1>
        <AboutTitle2>
          <span>Família</span>& Tradição
        </AboutTitle2>
        <AboutText2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          lobortis enim sed mi fringilla malesuada. Morbi lobortis enim sed mi
          fringilla malesuada. Lorem ipsum dolor sit amet,consectetur adipiscing
          elit. Morbi lobortis enim sed mi fringilla malesuada. Morbi lobortis
          enim sed mi fringilla malesuada.
        </AboutText2>
      </Sub1>
      <Sub2>
        <AboutImage2>
          <img src={about2} alt="" />
        </AboutImage2>
      </Sub2>
    </AboutDiv3> */}
    </AboutContainer>
  </Element>
);

export default About;
