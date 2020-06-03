import styled from "styled-components";

export const EventContainer = styled.div`
  border: 2px solid green;

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const Title = styled.h3`
  border: 2px solid green;
  color: #67267a;
`;

export const Image = styled.div`
  border: 2px solid green;

  img {
    width: 100%;
  }
`;

export const Button = styled.button`
  border-radius: 15px;
  background: #6ccfa7;
  color: #242f62;
  font-size: 1.2rem;
`;
