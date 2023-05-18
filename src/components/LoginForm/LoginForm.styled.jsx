import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const FormButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('tablet')]: {
    margin: '70px 0 0 0'
  },
  [theme.breakpoints.up('tablet')]: {
    margin: '55px 0 0 0'
  },

  [theme.breakpoints.up('desktop')]: {
    margin: '50px 0 0 0'
  },
}));

