import styled from 'styled-components';

export const MenuContainer = styled.div`
  /* border: 2px solid green; */

  @media screen and (min-width: 768px) {
    display: flex;
    margin: 20px auto;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const Container1 = styled.div`
  /* border: 2px solid orange; */
  @media screen and (min-width: 768px) {
    width: 50%;
  }

  @media screen and (min-width: 992px) {
    padding-top: 60px;
  }

  @media screen and (min-width: 1200px) {
    margin-left: 70px;
  }
`;

export const Container2 = styled.div`
  /* border: 2px solid orange; */

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const MenuTitle = styled.h3`
  /* border: 2px solid green; */
  font-weight: 700;
  font-size: 1.5rem;
  width: 200px;
  text-align: left;
  margin-left: 20px;
  color: #67267a;

  span {
    display: block;
  }

  @media screen and (min-width: 992px) {
    font-size: 2rem;
    line-height: 2.7rem;
  }
`;

export const MenuText = styled.p`
  /* border: 2px solid green; */
  margin: auto 20px 0.5rem;
  text-align: left;

  @media screen and (min-width: 992px) {
    width: 400px;
    margin-bottom: 20px;
  }
`;

export const DeliveryText = styled.div`
  /* border: 2px solid green; */
  margin: auto 20px 0.5rem;
  width: 150px;
  text-align: left;

  h3 {
    font-weight: 700;
    font-size: 1.2rem;
    color: #67267a;
  }

  @media screen and (min-width: 992px) {
    h3 {
      margin-bottom: 20px;
    }
  }
`;

export const DeliveryContainer = styled.div`
  display: flex;
  /* border: 2px solid yellow; */
  justify-content: space-between;

  @media screen and (min-width: 992px) {
    display: flex;
    width: 300px;
    justify-content: space-between;
  }
`;

export const Ifood = styled.a`
  img {
    width: 120px;
    margin: 10px 20px 0 2px;
  }

  @media screen and (min-width: 992px) {
    img {
      width: 100px;
    }
  }
`;

export const Whatsapp = styled.a`
  margin-left: 20px;

  @media screen and (min-width: 992px) {
    img {
      width: 130px;
    }
  }
`;

export const MenuImage = styled.div`
  /* border: 2px solid green; */

  img {
    width: 100%;
  }

  @media screen and (min-width: 1200px) {
    img {
      width: 500px;
    }
  }
`;
