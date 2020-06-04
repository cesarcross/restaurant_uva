import styled from 'styled-components';

export const CarouselContainer = styled.div`
  /* border: 2px solid yellow; */
  display: ${({ showCarousel }) => (showCarousel ? '' : 'none')};

  @media screen and (min-width: 768px) {
  }
`;

export const CarouselImage = styled.div`
  /* border: 2px solid green; */
  position: relative;

  img {
    width: 100%;
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
