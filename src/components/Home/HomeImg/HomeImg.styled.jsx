import styled from '@emotion/styled';

export const ImageWrapper = styled.div`
  position: absolute;
  top: 108px;
  width: 474px;
  height: 394px;

  @media (min-width: 768px) {
    width: 985px;
  }
  @media (min-width: 1280px) {
    top: -195px;
    right: -135px;
  }
`;

export const CatImg = styled.img`
  position: absolute;
  bottom: -19px;
  right: 187px;

  @media (min-width: 768px) {
    left: 400px;
    top: 640px;
  }
`;

export const DogImg = styled.img`
  position: absolute;
  bottom: 130px;
  left: 115px;

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
    top: 470px;
  }
`;
