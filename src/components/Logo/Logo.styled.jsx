import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MainLogo = styled(NavLink)`
  @media (min-width: 1200px) {
    margin-right: 160px;
  }
`;

export const Img = styled.img`
  width: 162px;
  height: 28px;

  @media (max-width: 768px) {
    width: 116px;
    height: 20px;
  }
`;
