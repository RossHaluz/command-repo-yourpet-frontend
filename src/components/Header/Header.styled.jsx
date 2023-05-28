import styled from '@emotion/styled';

export const MainHeader = styled.header`
margin-bottom: 30px;
`;

export const HeaderContainer = styled.div`
 display: flex;
  margin: 0 auto;
  padding: 0 15px;

  @media (min-width: 320px) {
    width: 320px;
    justify-content: space-between;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 1200px) {
    width: 1280px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 32px 0px;

  @media (max-width: 1200px) {
    justify-content: space-between;
  }

  @media (min-width: 1200px) {
    justify-content: space-between;
  }
`;

export const AuthNavigation = styled.div`
  display: flex;
  align-items: center;
`;

export const BurgerMenuBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
