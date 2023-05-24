import styled from '@emotion/styled';

export const ImageWrapper = styled.div`
  position: relative;
  top: 188px;
  width: 474px;
  height: 394px;

  @media (min-width: 768px) {
    width: 985px;
  }
  @media (min-width: 1280px) {
    height: auto;
    top: 55px;
    right: 70px;
  }
`;

export const CatImg = styled.img`
  position: absolute;
  bottom: -10px;
  right: 150px;

  @media (min-width: 768px) {
    left: 400px;
    top: 260px;
  }
`;

export const DogImg = styled.img`
  position: absolute;
  bottom: 180px;
  left: 125px;

  @media (min-width: 768px) {
    left: 350px;
    bottom: -335px;
  }
`;

export const DoggyImg = styled.img`
  position: absolute;
  bottom: 16px;
  right: 367px;

  @media (min-width: 768px) {
    left: -75px;
    top: 180px;
  }
`;
