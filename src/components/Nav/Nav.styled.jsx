import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MaineNavigation = styled.nav`
  display: flex;
  gap: 15px;

  @media (max-width: 768px){
    display: none;
  }
`;

export const MaineNavigationLink = styled(NavLink)`
  color: white;
`;
