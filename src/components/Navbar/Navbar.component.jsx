import React from 'react';

import { Navbar, Nav } from './Navbar.style';
import { NavbarContainer } from './Navbar.style';
import LogoIcon from '../../assets/images/logo_mob.png';
import FacebookIcon from '../../assets/images/facebook_mob.png';
import InstagramIcon from '../../assets/images/instagram_mob.png';

const NavbarDefault = ({ showCarousel, setShowCarousel }) => (
  <NavbarContainer>
    <Navbar
      // bg="light"
      expand="lg"
    >
      <Navbar.Brand>
        <img src={LogoIcon} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setShowCarousel(!showCarousel)}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item className="first-nav-item">
            <button>Home</button>
          </Nav.Item>
          <Nav.Item>
            <button>Cardápio</button>
          </Nav.Item>
          <Nav.Item>
            <button>Sobre</button>
          </Nav.Item>
          <Nav.Item>
            <button>Equipe</button>
          </Nav.Item>
          <Nav.Item className="last-nav-item">
            <button>Contato</button>
          </Nav.Item>
          <Nav.Item>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={FacebookIcon} alt="" srcset="" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={InstagramIcon} alt="" srcset="" />
            </a>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </NavbarContainer>
);

export default NavbarDefault;
