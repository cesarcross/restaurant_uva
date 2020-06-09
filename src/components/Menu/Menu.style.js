import styled from 'styled-components';

export const MenuContainer = styled.div`
  /* border: 2px solid green; */
  max-width: 1300px;
  margin: 20px auto;

  @media screen and (min-width: 768px) {
    display: flex;
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
    margin-left: 45px;
  }
`;

export const MenuText = styled.p`
  /* border: 2px solid green; */
  margin: auto 20px 0.5rem;
  text-align: left;

  @media screen and (min-width: 992px) {
    width: 400px;
    margin-left: 45px;
    margin-bottom: 20px;
  }
`;

export const DeliveryText = styled.div`
  /* border: 2px solid green; */
  margin: 20px;
  width: 150px;
  text-align: left;

  h3 {
    font-weight: 700;
    font-size: 1.2rem;
    color: #67267a;
  }

  @media screen and (min-width: 992px) {
    margin-left: 45px;
  }
`;

export const DeliveryContainer = styled.div`
  display: flex;
  /* border: 2px solid yellow; */
  justify-content: space-between;

  @media screen and (min-width: 992px) {
    width: 300px;
    margin-left: 25px;
  }
`;

export const Ifood = styled.a`
  margin: 10px 30px 0 0;

  img {
    width: 120px;
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
      width: 120px;
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
