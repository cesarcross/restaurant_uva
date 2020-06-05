import styled from 'styled-components';

export const EventContainer = styled.div`
  /* border: 2px solid green; */

  @media screen and (min-width: 768px) {
    width: 80%;
    margin: 30px auto;
  }
`;

export const Title = styled.h3`
  /* border: 2px solid green; */
  width: 150px;
  color: #67267a;
  text-align: left;
  margin-left: 20px;
  font-size: 1.5rem;

  span {
    display: block;
  }
`;

export const SliderContainer = styled.div`
  .slick-slider {
    margin: 0 45px;

    .slick-arrow::before {
      color: #67267a;
      opacity: 1;
    }
  }

  @media screen and (min-width: 768px) {
    /* display: block; */
  }
`;

export const CarouselItem = styled.div`
  /* border: 2px solid green; */

  img {
    height: 255px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    img {
      height: auto;
      width: 150px;
    }
  }
`;

export const Button = styled.a`
  h3 {
    background: #6ccfa7;
    color: #242f62;
    font-size: 1.5rem;
    font-weight: 700;
    justify-content: center;
    width: 80%;
    margin: 15px auto;
    padding: 10px;
    border-radius: 15px;
  }
`;
