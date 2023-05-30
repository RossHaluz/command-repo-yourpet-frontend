import styled from '@emotion/styled';

export const Image = styled.img`
  display: block;
  width: 240px;
  height: 240px;
  border-radius: 20px;
  object-fit: cover;

  @media screen and (min-width: 748px) and (max-width: 1279.98px) {
    width: 128px;
    height: 128px;
  }

  @media screen and (min-width: 1280px) {
    width: 161px;
    height: 161px;
  }
`;

export const Descr = styled.p`
  font-size: 14px;
  line-height: 1.57;
  margin: 0;
  margin-top: 12px;

  @media screen and (min-width: 748px) {
    font-size: 16px;

    :first-of-type {
      margin-top: 0;
    }

    :not(:first-of-type) {
      margin-top: 16px;
    }
  }
`;

export const Bold = styled.span`
  font-weight: 700;
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: #54adff;
`;
