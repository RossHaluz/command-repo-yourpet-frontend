import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const FormBox = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  width: '280px',
  margin: '50px auto 0',
  boxShadow: ' 3px 8px 14px rgba(136, 198, 253, 0.19)',
  padding: '40px 20px',
  borderRadius: '20px',
  [theme.breakpoints.up('tablet')]: {
    padding: '60px 75px',
    width: '608px',
    margin: '82px auto 0',
  },
}));

export const FormTitle = styled(Typography)(({ theme }) => ({
  letterSpacing: '0.04em',
  margin: '0 0 15px 0',
  [theme.breakpoints.down('tablet')]: {
    fontSize: '24px',
    fontWeight: theme.typography.fontWeightMedium,
  },
  [theme.breakpoints.up('tablet')]: {
    fontSize: '36px',
    fontWeight: theme.typography.fontWeightMedium,
  },
}))