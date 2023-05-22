import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const BtnGoBack = styled(NavLink)`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 8px 28px;
  gap: 12px;
  color: white;
  background-color: #54adff;
  border-radius: 40px;
  border: none;
  margin-top: 60px;
  height: 40px;

  @media (min-width: 768px) {
    margin: 0 auto;
    margin-top: 70px;
    width: 248px;
  }

  @media (min-width: 1200px) {
    margin-top: 18px;
  }
`;
