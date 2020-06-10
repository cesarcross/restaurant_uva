import styled from 'styled-components';

export const AboutContainer = styled.div`
  /* border: 2px solid green; */
`;

export const AboutDiv1 = styled.div`
  background: #3b2670;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Sub1 = styled.div`
  /* border: 2px solid green; */

  @media screen and (min-width: 768px) {
    width: 50%;
  }

  @media screen and (min-width: 992px) {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (min-width: 1200px) {
    max-width: 600px;
  }
`;

export const AboutTitle = styled.h3`
  /* border: 2px solid green; */
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  width: 210px;
  text-align: left;
  margin-top: 20px;
  margin-left: 20px;
  padding-top: 20px;

  span {
    display: block;
  }

  @media screen and (min-width: 768px) {
    margin-top: 20px;
  }

  @media screen and (min-width: 992px) {
    font-size: 2rem;
    font-weight: 500;
  }
`;

export const AboutText = styled.p`
  /* border: 2px solid green; */
  margin: 0 20px;
  color: white;
  font-size: 0.7rem;
  text-align: left;
`;

export const Sub2 = styled.div`
  /* border: 2px solid green; */

  @media screen and (min-width: 768px) {
    width: 50%;
  }

  @media screen and (min-width: 1200px) {
    max-width: 600px;
  }
`;

export const AboutImage = styled.div`
  /* border: 2px solid green; */

  img {
    width: 100%;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 992px) {
    height: 500px;
    display: flex;

    img {
      width: 500px;
      align-self: center;
      margin: 0 auto;
    }
  }
`;

export const AboutDiv2 = styled.div`
  background: #6ccfa7;

  @media screen and (min-width: 768px) {
    display: flex;
  }

  @media screen and (min-width: 992px) {
    p {
      width: 350px;
    }

    h3,
    p {
      margin: 0 30px 8px 50px;
    }
  }

  @media screen and (min-width: 1200px) {
    justify-content: center;

    h3,
    p {
      margin-left: 100px;
    }
  }
`;

export const AboutTitle2 = styled.h3`
  /* border: 2px solid green; */
  padding-top: 20px;
  color: #67267a;
  font-size: 1.5rem;
  font-weight: 700;
  width: 201px;
  text-align: left;
  margin-left: 20px;

  span {
    display: block;
  }

  @media screen and (min-width: 992px) {
    margin-bottom: 8px;
    font-size: 2rem;
    font-weight: 500;
  }
`;

export const AboutText2 = styled.p`
  /* border: 2px solid green; */
  margin: 0 20px;
  text-align: left;
  color: white;
  font-size: 0.7rem;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const AboutImage2 = styled.div`
  /* border: 2px solid green; */

  img {
    width: 100%;
  }

  @media screen and (min-width: 992px) {
    height: 500px;
    display: flex;

    img {
      width: 500px;
      align-self: center;
      margin: 0 auto;
    }
  }
`;

export const AboutDiv3 = styled.div`
  background: #3b2670;
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;

    p {
      font-size: 1rem;
    }

    img {
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 992px) {
    p {
      width: 350px;
    }

    h3,
    p {
      margin-left: 50px;
    }
  }

  @media screen and (min-width: 1200px) {
    justify-content: center;

    h3,
    p {
      margin-left: 150px;
    }
  }
`;
