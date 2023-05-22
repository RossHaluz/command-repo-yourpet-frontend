import { styled } from '@mui/material/styles';
import {Dialog, DialogTitle, DialogContentText, Paper, Button, } from '@mui/material';

export const DialogStyled = styled(Dialog)(({ theme }) => ({

}));

export const DialogPaperStyled = styled(Paper)(({ theme }) => ({
  padding: '60px 0',
  [theme.breakpoints.down('tablet')]: {
    padding: '50px 0',
    maxWidth: 280,
    minWidth: 280,
    borderRadius: 20,
  },
  [theme.breakpoints.up('tablet')]: {
    minWidth: 608,
    borderRadius: 40
  },
}));


export const DialogTitleStyled = styled(DialogTitle)(({ theme }) => ({
  padding: 0,
  fontSize: '24px',
  color: '#111111',
  textAlign: 'center',
  [theme.breakpoints.up('tablet')]: {
    fontSize: '36px',
  },
}));

export const DialogContentTextStyled = styled(DialogContentText)(({ theme }) => ({
  margin: '24px 0',
  fontSize: '16px',
  color: '#111111',
  textAlign: 'center',
  [theme.breakpoints.up('tablet')]: {
    margin: '30px 0 40px' ,
    fontSize: '24px',
  },
}));

export const GoToProfileButtonStyled = styled(Button)(({ theme }) => ({
  margin: '0 auto',
  padding: '8px, 0',
  minWidth: '200px',
  display: 'block',
  textTransform: 'none',
  fontSize: '16px',
  color: '#FEF9F9',
  [theme.breakpoints.up('tablet')]: {
    margin: '0 auto',
    width: '248px'
  },
}));
