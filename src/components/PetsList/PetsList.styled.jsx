import styled from '@emotion/styled';

export const List = styled.ul``;

export const Item = styled.li`
  border-radius: 20px;
  padding: 16px 20px 40px;
  box-shadow: 3px, 8px rgba(136, 198, 253, 0.19);

  @media screen and (min-width: 748px) {
    border-radius: 40px;
    display: flex;
    gap: 20px;
    padding: 20px;
  }

  :not(:first-child) {
    margin-top: 20px;
  }
`;

export const Image = styled.img`
  border-radius: 20px;
  width: 240px;
  height: 240px;
`;

export const Descr = styled.p`
  font-size: 14px;
  line-height: 1.57;

  :not(:first-child) {
    margin-top: 12px;
  }

  @media screen and (min-width: 748px) {
    :not(:first-child) {
      margin-top: 16px;
    }
  }
`;

export const Bold = styled.span`
  font-weight: 700;
`;
