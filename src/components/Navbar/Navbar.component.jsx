import React from 'react';

import { Navbar, Nav } from './Navbar.style';
import { NavbarContainer } from './Navbar.style';
import LogoMobile from '../../assets/images/logo_mob.png';
import Logo from '../../assets/images/logo.png';
import FacebookMobileIcon from '../../assets/images/facebook_mob.png';
import InstagramMobileIcon from '../../assets/images/instagram_mob.png';
import FacebookIcon from '../../assets/images/facebook.png';
import InstagramIcon from '../../assets/images/instagram.png';

const NavbarDefault = ({ showCarousel, setShowCarousel }) => (
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
          <Nav.Item className="first-nav-item">
            <button>
              Home<span className="bar">|</span>
            </button>
          </Nav.Item>
          <Nav.Item>
            <button>
              Cardápio<span className="bar">|</span>
            </button>
          </Nav.Item>
          <Nav.Item>
            <button>
              Sobre<span className="bar">|</span>
            </button>
          </Nav.Item>
          <Nav.Item>
            <button>
              Equipe<span className="bar">|</span>
            </button>
          </Nav.Item>
          <Nav.Item className="last-nav-item">
            <button>Contato</button>
          </Nav.Item>
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

export default NavbarDefault;
