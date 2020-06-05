import styled from 'styled-components';

export const ContactContainer = styled.div`
  /* border: 2px solid green; */
  background: #3b2670;
`;

export const WidthMax = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Form = styled.div`
  margin: 30px auto;

  input,
  textarea {
    display: flex;
    border-radius: 15px;
    width: 80%;
    margin: 15px auto;
    padding: 10px;
    border: none;
  }

  input:last-of-type {
    background: #6ccfa7;
    color: #242f62;
    font-size: 1.5rem;
    font-weight: 700;
    justify-content: center;
  }

  /* border: 2px solid green; */

  h3 {
    color: #fff;

    @media screen and (min-width: 1200px) {
      text-align: left;
      margin: 0 0 60px 60px;
    }
  }

  @media screen and (min-width: 992px) {
    width: 650px;

    input:last-of-type {
      width: 300px;
    }
  }
`;

export const Map = styled.div`
  /* border: 2px solid green; */

  height: fit-content;

  img {
    margin: 20px auto;
    width: 90%;
  }

  @media screen and (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }

  @media screen and (min-width: 992px) {
    width: 550px;
  }

  @media screen and (min-width: 1200px) {
    align-self: center;

    img {
      width: 400px;
    }
  }
`;
