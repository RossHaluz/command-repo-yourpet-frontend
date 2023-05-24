import styled from '@emotion/styled';

export const ImageWrapper = styled.div`
  position: absolute;
  top: 108px;
  right: -60px;
  width: 474px;
  height: 394px;

  @media (min-width: 768px) {
    top: 200px;
    right: -260px;
    width: 1085px;
    height: 918px;
  }

  @media (min-width: 1280px) {
    top: 30px;
    right: 0;
    width: 917px;
    height: 920px;
  }
`;

export const CatImg = styled.img`
  position: absolute;
  top: 197px;
  right: 25px;

  @media (min-width: 768px) {
    top: 490px;
    right: 250px;
  }
  @media (min-width: 1280px) {
    top: 405px;
    right: 50px;
  }
`;

export const DogImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;

  @media (min-width: 768px) {
    top: 40px;
    right: 160px;
  }

  @media (min-width: 1280px) {
    top: -35px;
    right: -40px;
  }
`;

export const DoggyImg = styled.img`
  position: absolute;
  top: 130px;
  right: 243px;

  @media (min-width: 768px) {
    top: 320px;
    right: 665px;
  }
  @media (min-width: 1280px) {
    top: 230px;
    right: 463px;
  }
`;
