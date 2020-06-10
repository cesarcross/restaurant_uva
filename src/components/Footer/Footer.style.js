import styled from 'styled-components';

export const FooterContainer = styled.div`
  /* border: 2px solid green; */
  max-width: 1300px;
  margin: 0 auto;
  color: #67267a;

  @media screen and (min-width: 992px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Sub = styled.div`
  /* border: 2px solid green; */

  @media screen and (min-width: 992px) {
    display: flex;
    margin: 50px 50px 30px;
  }

  @media screen and (min-width: 1200px) {
    margin: 50px 140px 30px;
  }
`;

export const Logo = styled.div`
  /* border: 2px solid green; */
  width: 85px;
  margin: 40px auto 10px;

  img {
    width: 100%;
  }

  @media screen and (min-width: 992px) {
    margin: 0 auto;
  }
`;

export const Text = styled.p`
  span {
    display: none;
  }

  @media screen and (min-width: 992px) {
    margin: 0 auto;
    align-self: center;

    span {
      display: inline;
      margin: 0 15px;
    }
  }
`;

export const Caravan = styled.p`
  margin: 30px auto;

  a {
    color: #67267a;
    :hover,
    :visited,
    :link,
    :active {
      text-decoration: none;
    }
  }
`;
