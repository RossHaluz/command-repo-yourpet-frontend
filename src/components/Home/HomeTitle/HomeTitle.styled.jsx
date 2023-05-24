import styled from '@emotion/styled';

export const Title = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #000000;
  width: 280px;

  @media (min-width: 768px) {
    margin: 0;
    font-size: 68px;
    line-height: 100px;
    width: 588px;
    margin-top: 80px;
  }

  @media (min-width: 1280px) {
    margin-top: 50px;
    font-weight: 800;
    font-size: 68px;
    line-height: 130%;
    min-width: 501px;
  }
`;
