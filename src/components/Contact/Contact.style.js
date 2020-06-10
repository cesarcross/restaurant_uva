import styled from 'styled-components';

export const ContactContainer = styled.div`
  background: #3b2670;

  @media screen and (min-width: 992px) {
    padding: 70px 0;
  }
`;

export const TitleWidth = styled.div`
  max-width: 1300px;
  margin: 0 auto 35px;
`;

export const WidthMax = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  margin: 0 auto;

  @media screen and (min-width: 992px) {
    flex-direction: row-reverse;
    flex-wrap: nowrap;
  }

  @media screen and (min-width: 1200px) {
    justify-content: center;
  }
`;

export const Form = styled.div`
  margin: 5px auto 0;
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

  textarea {
    resize: none;
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
      width: 50%;
      padding: 5px 100px;
      margin-bottom: 30px;
    }
  }

  @media screen and (min-width: 1200px) {
    width: 40%;
    margin: 0 5px;
    margin-left: 20px;

    h3 {
      text-align: left;
      margin: 0 0 60px;
    }
  }
`;

export const Map = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-bottom: 20px;

  img {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 80%;
    margin: 20px auto 40px;
  }

  @media screen and (min-width: 992px) {
    width: 45%;
  }

  @media screen and (min-width: 1200px) {
    width: 35%;
    margin: 5px;
    padding-top: 10px;
    margin-right: 20px;
  }
`;

export const FormTitle = styled.h3`
  color: #fff;

  width: 200px;
  padding-top: 20px;
  text-align: left;
  margin-left: 35px;

  @media screen and (min-width: 768px) {
    margin-left: 75px;
  }

  @media screen and (min-width: 992px) {
    width: 400px;
    margin: 0 0 30px 35px;
    font-size: 2rem;
    font-weight: 500;
  }

  @media screen and (min-width: 1200px) {
    margin-left: 140px;
  }
`;
