import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';

export const BurgerMenu = styled(MenuIcon)(({theme}) => ({
    backgroundColor: "FFC107",

    [theme.breakpoints.up('sm')]: {
       display: 'none'
    },
}))