import { styled } from '@mui/material/styles';
import {Button, Icon} from '@mui/material';

export const FormButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('desktop')]: {
    margin: '40px 0 0 0'
  },
  [theme.breakpoints.up('desktop')]: {
    margin: '5px 0 0 0'
  },
}));

export const IconButtonStyled = styled(Icon)(({ theme }) => ({
  '&:hover' : {
    color: '#54ADFF'
  }
}));
