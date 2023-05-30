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

export const AuthNavigationItemLogin = styled(NavLink)`
  background-color: #ffc107;
  border-radius: 40px;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.04em;
  line-height: 22px;
  color: white;
  padding: 9px 40px;
`;

export const AuthNavigationItemRegister = styled(NavLink)`
  background: none;
  border-radius: 40px;
  border: 1px solid #ffc107;
  color: #ffc107;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.04em;
  line-height: 22px;
  padding: 9px 40px;
`;
