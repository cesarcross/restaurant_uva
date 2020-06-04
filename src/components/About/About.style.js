import styled from 'styled-components';

export const AboutContainer = styled.div`
  border: 2px solid green;
`;

export const AboutDiv1 = styled.div`
  background: #3b2670;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Sub1 = styled.div`
  border: 2px solid green;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const AboutTitle = styled.h3`
  border: 2px solid green;
  color: white;
  font-size: 1.5rem;
  /* font-weight: bolder; */
  text-align: left;
  margin-left: 20px;

  span {
    display: block;
  }

  @media screen and (min-width: 768px) {
    margin-top: 20px;
  }
`;

export const AboutText = styled.p`
  border: 2px solid green;
  color: white;
  font-size: 0.7rem;

  @media screen and (min-width: 768px) {
    margin: 0 20px;
    text-align: left;
  }
`;

export const Sub2 = styled.div`
  border: 2px solid green;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const AboutImage = styled.div`
  border: 2px solid green;

  img {
    width: 100%;
  }
`;

export const AboutDiv2 = styled.div`
  background: #6ccfa7;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const AboutTitle2 = styled.h3`
  border: 2px solid green;
  color: #67267a;
  font-size: 1.5rem;
  /* font-weight: bold; */
  text-align: left;
  margin-left: 20px;

  span {
    display: block;
  }

  @media screen and (min-width: 768px) {
    margin-top: 20px;
  }
`;

export const AboutText2 = styled.p`
  border: 2px solid green;
  color: white;
  font-size: 0.7rem;

  @media screen and (min-width: 768px) {
    margin: 0 20px;
    text-align: left;
  }
`;

export const AboutImage2 = styled.div`
  border: 2px solid green;

  img {
    width: 100%;
  }
`;

export const AboutDiv3 = styled.div`
  background: #3b2670;
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;

    img {
      margin-bottom: 20px;
    }
  }
`;
