import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MaineNavigation = styled.nav`
  display: flex;
  gap: 15px;
  margin-right: 30px;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const MaineNavigationLink = styled(NavLink)`
  color: #030303;
`;
