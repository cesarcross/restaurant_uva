import styled from 'styled-components';

export const ContactContainer = styled.div`
  border: 2px solid green;
  background: #3b2670;

  @media screen and (min-width: 768px) {
    /* display: flex; */
  }
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
    font-weight: bold;
    justify-content: center;
  }

  border: 2px solid green;

  h3 {
    color: #fff;
  }

  @media screen and (min-width: 768px) {
    /* width: 50%; */
  }
`;

export const Map = styled.div`
  border: 2px solid green;

  img {
    margin: 20px auto;
    width: 90%;
  }

  @media screen and (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
`;
