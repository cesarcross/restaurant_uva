import styled from 'styled-components';

export const EventContainer = styled.div`
  border: 2px solid green;

  @media screen and (min-width: 768px) {
    width: 80%;
    margin: 30px auto;
  }
`;

export const Title = styled.h3`
  border: 2px solid green;
  color: #67267a;
  text-align: left;
  margin-left: 20px;
  font-size: 1.5rem;

  span {
    display: block;
  }
`;

export const Image = styled.div`
  border: 2px solid green;

  img {
    width: 100%;
  }
`;

export const Button = styled.a`
  h3 {
    background: #6ccfa7;
    color: #242f62;
    font-size: 1.5rem;
    font-weight: bold;
    justify-content: center;
    width: 80%;
    margin: 15px auto;
    padding: 10px;
    border-radius: 15px;
  }

  /* img {
    margin: 20px auto;
  } */
`;
