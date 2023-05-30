import styled from '@emotion/styled';
import { FiMenu } from 'react-icons/fi';

export const MobileMenuBurger = styled(FiMenu)`
  color: #ffc107;
  font-size: 24px;
  display: flex;
  align-items: center;

  @media (min-width: 1280px) {
    display: none;
  }
`;

export const BurgerMenuBtn = styled.button`
  background-color: none;
  border: none;
  cursor: pointer;
`;
