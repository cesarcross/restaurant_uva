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
  padding-top: 20px;
  width: 150px;
  color: #67267a;
  text-align: left;
  margin-left: 20px;
  font-size: 1.5rem;

  span {
    display: block;
  }

  @media screen and (min-width: 992px) {
    margin-bottom: 20px;
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
    /* height: 255px; */
    width: 100%;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    img {
      /* height: auto; */
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

  h3 {
    background: #6ccfa7;
    color: #242f62;
    font-size: 1.5rem;
    font-weight: 700;
    justify-content: center;
    width: 80%;
    margin: 20px auto;
    padding: 10px;
    border-radius: 15px;
  }

  @media screen and (min-width: 992px) {
    h3 {
      font-size: 1.2rem;
      width: 40%;
    }
  }
`;
