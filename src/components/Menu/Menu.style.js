import styled from 'styled-components';

export const MenuContainer = styled.div`
  border: 2px solid green;

  @media screen and (min-width: 768px) {
    display: flex;
    margin: 20px auto;
  }
`;

export const Container1 = styled.div`
  border: 2px solid orange;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const Container2 = styled.div`
  border: 2px solid orange;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

// export const Sub1 = styled.div`
//   border: 2px solid orange;
// `;

export const MenuTitle = styled.h3`
  border: 2px solid green;
  font-family: 'Brevia-semibold';
  font-size: 1.5rem;
  width: 150px;
  text-align: left;
  margin-left: 20px;
  color: #67267a;

  span {
    display: block;
  }
`;

export const MenuText = styled.p`
  border: 2px solid green;
  margin: auto 20px 0.5rem;
  text-align: left;
`;

export const Sub2 = styled.div`
  border: 2px solid orange;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const DeliveryText = styled.div`
  border: 2px solid green;
  margin: auto 20px 0.5rem;
  width: 150px;
  text-align: left;

  h3 {
    font-family: 'Brevia-semibold';
    font-size: 1.2rem;
    /* width: 145px; */
    /* margin-left: 20px; */
    /* text-align: left; */
    color: #67267a;
  }
`;

export const DeliveryContainer = styled.div`
  display: flex;
  border: 2px solid yellow;
  justify-content: space-between;
`;

export const Ifood = styled.a`
  img {
    width: 120px;
    margin: 10px 20px 0 2px;
  }
`;

export const Whatsapp = styled.a`
  margin-left: 20px;
`;

export const MenuImage = styled.div`
  border: 2px solid green;

  img {
    width: 100%;
  }
`;
