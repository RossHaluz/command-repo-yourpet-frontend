import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const UserLink = styled(NavLink)`
  color: #ffc107;
  font-size: 28px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
`;

export const LogoutBtn = styled(Button)(({ theme }) => ({
  backgroundColor: 'white',
}));

export const UserName = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: #ffc107;

  @media (max-width: 768px) {
    display: none;
  }
`;
