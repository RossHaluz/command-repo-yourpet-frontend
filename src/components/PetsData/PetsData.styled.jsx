import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';

export const Title = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('tablet')]: {
    fontSize: '20px',
    fontWeight: theme.typography.fontWeightBold,
  },
  [theme.breakpoints.up('tablet')]: {
    fontSize: '28px',
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AddButton = styled(NavLink)`
  width: 129px;
  height: 40px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;

  background: #54adff;
  border-radius: 40px;

  font-weight: 700;
  font-size: 16px;
  line-height: 22px;

  align-items: center;

  color: #fef9f9;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;

  margin: 0;
  padding: 0;

  gap: 24px;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 32px;
  max-width: 821px;

  height: 212px;
  padding: 20px;

  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;
`;

export const Image = styled.img`
  width: 161px;
  height: 161px;

  border-radius: 40px;

  outline: 1px solid red;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Text = styled.p`
  margin: 0;
`;
