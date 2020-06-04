import styled from 'styled-components';

export const EventContainer = styled.div`
  border: 2px solid green;

  @media screen and (min-width: 768px) {
    font-size: 2rem;
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
  img {
    margin: 20px auto;
  }
`;
