import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MaineNavigation = styled.nav`
  display: flex;
  gap: 15px;
  margin-right: 30px;

  @media (max-width: 1280px) {
    display: none;
  }
`;

export const MaineNavigationLink = styled(NavLink)`
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.04em;
  color: #030303;
  transition: color 250ms ease-in-out;

  &.active {
    color: #ffc107;
  }

  &:hover,
  &:focus {
    color: #ffc107;
  }
`;
