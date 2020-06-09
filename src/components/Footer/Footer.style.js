import styled from 'styled-components';

export const FooterContainer = styled.div`
  /* border: 2px solid green; */
  max-width: 1300px;
  margin: 0 auto;
  color: #67267a;
`;

export const Logo = styled.div`
  /* border: 2px solid green; */
  width: 85px;
  margin: 40px auto 10px;

  img {
    width: 100%;
  }
`;

export const Text = styled.p`
  /* border: 2px solid green; */
`;

export const Caravan = styled.p`
  /* border: 2px solid green; */
  margin: 30px auto;

  a {
    :hover,
    :visited,
    :link,
    :active {
      text-decoration: none;
    }
  }
`;
