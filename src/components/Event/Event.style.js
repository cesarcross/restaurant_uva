import styled from 'styled-components';

export const EventContainer = styled.div`
  /* border: 2px solid green; */
  max-width: 1300px;
  margin: 0 auto;
`;

export const Title = styled.h3`
  /* border: 2px solid green; */
  padding-top: 20px;
  width: 150px;
  color: #67267a;
  text-align: left;
  margin-left: 30px;
  font-size: 1.5rem;
  font-weight: 700;

  span {
    display: block;
  }

  @media screen and (min-width: 768px) {
    margin-left: 35px;
  }

  @media screen and (min-width: 992px) {
    margin-bottom: 20px;
    margin-left: 50px;
  }

  @media screen and (min-width: 1200px) {
    margin-left: 140px;
  }
`;

export const SliderContainer = styled.div`
  margin: 0 auto;

  .slick-slider {
    margin: 0 30px;

    .slick-prev {
      left: -20px;
    }

    .slick-next {
      right: -20px;
    }

    .slick-prev,
    .slick-next {
      z-index: 1;
    }

    .slick-arrow::before {
      color: #67267a;
      opacity: 1;
    }
  }

  @media screen and (min-width: 1200px) {
    width: 85%;
  }
`;

export const CarouselItem = styled.div`
  /* border: 2px solid green; */
  img {
    width: 100%;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    img {
      width: 90%;
    }
  }
`;

export const Button = styled.a`
  :hover,
  :visited,
  :link,
  :active {
    text-decoration: none;
  }

  button {
    background: #6ccfa7;
    color: #242f62;
    font-size: 1.5rem;
    font-weight: 700;
    justify-content: center;
    width: 80%;
    margin: 20px auto;
    padding: 10px;
    border: none;
    border-radius: 15px;
  }

  @media screen and (min-width: 768px) {
    button {
      width: 37%;
    }
  }

  @media screen and (min-width: 992px) {
    button {
      font-size: 1.2rem;
      width: 23%;
    }
  }

  @media screen and (min-width: 1200px) {
    button {
      width: 21%;
    }
  }
`;
