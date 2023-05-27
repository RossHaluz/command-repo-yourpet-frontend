import styled from '@emotion/styled';

export const Conteiner = styled.div`
  width: 280px;

  @media screen and (min-width: 768px) {
    width: 703px;
  }

  @media screen and (min-width: 1280px) {
    width: 821px;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  border-radius: 20px;
  padding: 16px 20px 40px;
  box-shadow: 3px 8px 8px rgba(136, 198, 253, 0.19);
  background-color: #ffffff;

  @media screen and (min-width: 748px) {
    border-radius: 40px;
    display: flex;
    gap: 20px;
    padding: 20px;
  }

  :not(:first-of-type) {
    margin-top: 20px;
  }
`;
