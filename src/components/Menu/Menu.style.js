import styled from 'styled-components';

export const MenuContainer = styled.div`
  border: 2px solid green;

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

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
  margin: auto 20px;
  text-align: left;
`;
export const MenuDelivery = styled.div`
  border: 2px solid green;

  h3 {
    font-family: 'Brevia-semibold';
    font-size: 1.2rem;
    width: 145px;
    margin-left: 20px;
    text-align: left;
    color: #67267a;
  }
`;
export const MenuImage = styled.div`
  border: 2px solid green;

  img {
    width: 100%;
  }
`;
