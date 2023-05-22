import styled from '@emotion/styled';
import { RxCross2 } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';
import { RiAccountCircleLine } from 'react-icons/ri';

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #fef9f9;
`;

export const MobileMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CrossIcon = styled(RxCross2)`
  color: #ffc107;
  font-size: 24px;
`;

export const MobileMenuCrossBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const LoginBtn = styled(NavLink)`
  background-color: #ffc107;
  padding: 9px 41px;
  text-align: center;
  border-radius: 40px;
  color: white;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
`;

export const RegisterBtn = styled(NavLink)`
  border: 1px solid #ffc107;
  padding: 9px 41px;
  text-align: center;
  border-radius: 40px;
  color: #ffc107;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
`;

export const MobileMenuAuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 165px;
  margin-top: 40px;
`;

export const MobileMenuAuthNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

export const MobileManuMainNavigation = styled.nav`
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const MobileManuMainNavigationItem = styled(NavLink)`
  font-weight: 500;
  font-size: 32px;
  line-height: 44px;
  letter-spacing: 0.04em;
  color: #111111;

  &.active {
    font-weight: 700;
    color: #ffc107;
  }
`;

export const MobileMenuUser = styled(NavLink)`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const UserIcon = styled(RiAccountCircleLine)`
  color: #ffc107;
  font-size: 28px;
`;

export const NameUser = styled.p`
  color: #ffc107;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
`;
