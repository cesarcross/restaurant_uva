import styled from 'styled-components';
import { Nav as NavItem, Navbar as NavbarBootstrap } from 'react-bootstrap';

export const NavbarContainer = styled.div`
  /* border: 2px solid green; */
`;

export const Navbar = styled(NavbarBootstrap)`
  margin: 0;
  padding: 0;

  .navbar-toggler {
    margin-right: 10px;
  }

  img {
    width: 52px;
    margin-left: 10px;
  }
`;

export const Nav = styled(NavItem)`
  background: #67267a;

  button {
    font-family: 'Brevia-semibold';
    color: #fff;
    background: transparent;
    border: none;
    margin: 5px;
  }

  .first-nav-item {
    margin-top: 50px;
  }

  .last-nav-item {
    margin-bottom: 50px;
  }

  a {
    img {
      width: 37px;
      margin-bottom: 30px;
    }
  }
`;
