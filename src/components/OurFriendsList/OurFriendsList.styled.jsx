import styled from '@emotion/styled';

export const Title = styled.h2`
  text-align: center;
  font-size: 24px;
`;

export const List = styled.ul`
  margin-top: 24px;

  @media screen and (min-width: 748px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    row-gap: 20px;
  }
`;

export const Item = styled.li`
  text-align: center;
  border-radius: 40px;
  padding: 16px;
  box-shadow: 3px 8px 8px rgba(136, 198, 253, 0.19);
  background-color: #ffffff;
  width: 280px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 481px) {
    :not(:first-of-type) {
      margin-top: 20px;
    }
  }

  @media screen and (min-width: 748px) {
    width: 336px;
    height: 275px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
    height: 287px;
  }
`;

export const Name = styled.a`
  font-size: 24px;
  font-weight: 700;
  color: #54adff;
  text-decoration: none;
`;

export const ImgThumb = styled.div`
  @media screen and (max-width: 747px) {
    width: 90px;
  }

  @media screen and (min-width: 748px) and (max-width: 1279px) {
    width: 140px;
  }

  @media screen and (min-width: 1280px) {
    width: 146px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const Contacts = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #111111;

  :not(:first-of-type) {
    margin-top: 12px;
  }

  @media screen and (min-width: 748px) and (max-width: 1279px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;
