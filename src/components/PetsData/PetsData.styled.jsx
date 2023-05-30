import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 703px;
    margin: 0 0 40px 0;
  }

  @media screen and (min-width: 1280px) {
    display: inline-flex;

    width: 821px;
    margin: 35px 0 0 0;
  }
`;

export const Title = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('tablet')]: {
    fontSize: '20px',
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: theme.typography.fontFamily,
  },
  [theme.breakpoints.up('tablet')]: {
    fontSize: '28px',
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: theme.typography.fontFamily,
  },
}));

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 20px;
  }
`;

export const AddButton = styled(NavLink)`
  box-sizing: border-box;
  color: #fef9f9;
  background: #54adff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 40px;
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  align-items: center;
  letter-spacing: 0.04em;
  gap: 15px;
  cursor: pointer;
  border: none;

  &:hover {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }
`;
