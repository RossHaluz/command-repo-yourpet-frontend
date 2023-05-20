import styled from '@emotion/styled';

export const Title = styled.h2`
  text-align: center;
  font-size: 24px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
`;

export const Name = styled.h4`
  font-size: 24px;
  color: #54adff;
`;

export const Item = styled.li`
  text-align: center;
  border-radius: 40px;
  padding: 16px;
  box-shadow: 3px 8px 8px rgba(136, 198, 253, 0.19);
  background-color: #ffffff;

  @media screen and (min-width: 748px) {
  }

  :not(:first-of-type) {
    margin-top: 20px;
  }
`;
