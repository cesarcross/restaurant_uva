import React from 'react';

import { NavbarContainer, Navbar, Nav } from './Navbar.style';
import Scroll from 'react-scroll';

import LogoMobile from '../../assets/images/logo_mob.png';
import Logo from '../../assets/images/logo.png';
import FacebookMobileIcon from '../../assets/images/facebook_mob.png';
import InstagramMobileIcon from '../../assets/images/instagram_mob.png';
import FacebookIcon from '../../assets/images/facebook.png';
import InstagramIcon from '../../assets/images/instagram.png';

const NavbarDefault = ({ showCarousel, setShowCarousel }) => {
  const ScrollLink = Scroll.Link;

  return (
    <NavbarContainer>
      <Navbar expand="md">
        <Navbar.Brand>
          <img className="logo-mobile" src={LogoMobile} alt="" />
          <img className="logo" src={Logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setShowCarousel(!showCarousel)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <ScrollLink to="home" spy={true} smooth={true} duration={500}>
              <Nav.Item className="first-nav-item">
                <button>Home</button>
                <span className="bar">|</span>
              </Nav.Item>
            </ScrollLink>
            <ScrollLink to="cardapio" spy={true} smooth={true} duration={1000}>
              <Nav.Item>
                <button>Cardápio</button>
                <span className="bar">|</span>
              </Nav.Item>
            </ScrollLink>
            <ScrollLink to="sobre" spy={true} smooth={true} duration={1000}>
              <Nav.Item>
                <button>Sobre</button>
                <span className="bar">|</span>
              </Nav.Item>
            </ScrollLink>
            <ScrollLink to="eventos" spy={true} smooth={true} duration={1000}>
              <Nav.Item>
                <button>Eventos</button>
                <span className="bar">|</span>
              </Nav.Item>
            </ScrollLink>
            <ScrollLink to="contato" spy={true} smooth={true} duration={1000}>
              <Nav.Item className="last-nav-item">
                <button>Contato</button>
              </Nav.Item>
            </ScrollLink>
            <Nav.Item className="icons-container">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="icon-mobile" src={FacebookMobileIcon} alt="" />
                <img className="icon fb" src={FacebookIcon} alt="" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="icon-mobile" src={InstagramMobileIcon} alt="" />
                <img className="icon inst" src={InstagramIcon} alt="" />
              </a>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </NavbarContainer>
  );
};

export default NavbarDefault;
