import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const FormButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('desktop')]: {
    margin: '40px 0 0 0'
  },
  [theme.breakpoints.up('desktop')]: {
    margin: '5px 0 0 0'
  },
}));
