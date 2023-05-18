import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthNavigation = styled.nav`
  display: flex;
  gap: 15px;
`;

export const AuthNavigationItem = styled(NavLink)`
  color: white;

  &.active {
    border-bottom: 1px solid white;
  }
`;
