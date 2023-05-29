import { styled } from '@mui/material/styles';
import { Box, Chip, Link, ListItemText, Typography } from '@mui/material';

export const ImageBoxStyled = styled(Box)(({ theme }) => ({
  position: 'relative',
  flexBasis: '260px',
}));

export const CategoryChipStyled = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  left: 0,
  top: '20px',
  minWidth: '126px',
  justifyContent: 'left',
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  backgroundColor: '#CCE4FB',
  color: '#111111',
  textTransform:'capitalize',
}));


export const PetImageStyled = styled('img')(({ theme }) => ({
  maxWidth: '260px',
  [theme.breakpoints.down('tablet')]: {
    maxWidth: '230px',
  },
}));


export const InfoBoxStyled = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('tablet')]: {
    marginLeft: '24px',
    width: '260px',
  },
}));


export const InfoTitleStyled = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 700,
  [theme.breakpoints.up('tablet')]: {
    fontSize: '28px',
  },
  [theme.breakpoints.down('tablet')]: {
    marginTop: '10px'
  }
}));

export const ListItemTextStyled = styled(ListItemText)(({ theme }) => ({
  fontSize: '16px',
}));


export const LinkStyled = styled(Link)(({ theme }) => ({
  color: '#FFC107',
  textDecorationColor: '#FFC107',
  '&:hover': {
    color: '#54ADFF',
    textDecorationColor: '#54ADFF',
  }
}));
