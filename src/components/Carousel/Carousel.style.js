import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: ${({ showCarousel }) => (showCarousel ? '' : 'none')};
`;

export const MobileImage = styled.div`
  /* border: 2px solid green; */

  img {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const SliderContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;

    .slick-slider {
      margin: 0 45px;

      .slick-arrow::before {
        color: #67267a;
        opacity: 1;
      }

      .slick-dots {
        padding-bottom: 10px;

        button::before {
          font-size: 1rem;
          color: #67267a;
          opacity: 1;
        }

        .slick-active {
          button::before {
            color: #6dcfa8;
          }
        }
      }
    }
  }
`;

export const CarouselItem = styled.div`
  img {
    /* height: 370px; */
    width: 100%;
    margin: 0 auto;
  }
`;

// export const Text = styled.div`
//   position: absolute;
//   top: 50px;
//   left: 10px;
//   text-align: left;

//   p {
//     font-family: 'Brevia-semibold';
//     font-size: 2rem;
//     margin: 0;
//     padding: 5px 0 5px 5px;
//     background: #6dcfa8;
//     color: #fff;
//   }

//   p:nth-of-type(1n) {
//     width: 257px;
//     border-radius: 5px 15px 15px 0px;
//   }

//   p:nth-of-type(2n) {
//     width: 182px;
//     border-radius: 0px 0px 15px 0px;
//   }

//   p:nth-of-type(3n) {
//     width: 146px;
//     border-radius: 0px 0px 15px 0px;
//   }
// `;
