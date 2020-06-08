import styled from 'styled-components';

export const ContactContainer = styled.div`
  /* border: 2px solid green; */
  background: #3b2670;
`;

export const WidthMax = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;

  @media screen and (min-width: 992px) {
    flex-direction: row-reverse;
    flex-wrap: nowrap;
  }
`;

export const Form = styled.div`
  margin: 30px auto 0;
  width: 80%;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    text-align: left;
    color: #fff;

    span {
      display: block;
    }
  }

  input,
  textarea {
    display: flex;
    border-radius: 10px;
    width: 100%;
    margin: 15px auto;
    padding: 20px;
    border: none;
  }

  input:last-of-type {
    background: #6ccfa7;
    color: #242f62;
    font-size: 1.2rem;
    font-weight: 700;
    justify-content: center;
  }

  @media screen and (min-width: 992px) {
    width: 40%;

    textarea {
      height: 255px;
    }

    input:last-of-type {
      /* width: 300px; */
      width: 70%;
      padding: 5px 100px;
      margin-bottom: 30px;
    }
  }

  @media screen and (min-width: 1200px) {
    h3 {
      text-align: left;
      margin: 0 0 60px;
    }
  }
`;

export const Map = styled.div`
  /* border: 2px solid green; */
  width: 90%;
  margin: 20px 35px 40px;

  img {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 80%;
    margin: 20px auto 40px;
  }

  @media screen and (min-width: 992px) {
    width: 45%;
    margin: auto;
    margin-top: 110px;
  }

  @media screen and (min-width: 1200px) {
    width: 37%;
    margin-top: 155px;
  }
`;
