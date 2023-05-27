import { NavLink } from 'react-router-dom';
import { styled } from '@mui/system';

export const StyledNavLink = styled(NavLink)`
  color: #54adff;
  background: #cce4fb;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 40px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  align-items: center;
  letter-spacing: 0.04em;

  &.active {
    color: #FEF9F9;
    background: #54adff;
  }
`;

export const StyledButton = styled('button')`
  color: #54adff;
  background: #cce4fb;
  padding: 8px 16px;
  border: none;
  border-radius: 40px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
  cursor: pointer;

  :hover, :focus-within {
    color: #FEF9F9;
    background: #54adff;
  }
`;

export const StyledNavLinkWrapper = styled('div')`
  max-width: 540px;
  min-width: 205px;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  gap: 12px;
`;
