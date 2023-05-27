import { styled } from '@mui/system';

export const StyledButton = styled('button')`
  color: #54adff;
  background-color: #cce4fb;
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
  transition: color 250ms ease-in, background-color 250ms ease-in;

  :hover,
  :focus-within {
    color: #fef9f9;
    background-color: #54adff;
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
