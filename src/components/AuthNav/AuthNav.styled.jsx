import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthNavigation = styled.nav`
  display: flex;
  gap: 15px;

  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: flex;
    gap: 20px;
    margin-left: auto;
    margin-right: 28px;
  }

  @media (min-width: 1200px) {
   margin-left: auto;
  }
`;

export const AuthNavigationItem = styled(NavLink)`
  background-color: #ffc107;
  border-radius: 40px;
  color: white;
  padding: 9px 40px;
`;
