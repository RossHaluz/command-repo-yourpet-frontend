import { styled } from '@mui/material/styles';
import {  Toolbar, IconButton } from "@mui/material";

export const HeaderToolBar = styled(Toolbar)(({theme}) => ({
    [theme.breakpoints.down('tablet')]: {
        justifyContent: 'space-between'
    },

}))
      
export const BurgerMenu = styled(IconButton)(({theme}) => ({
marginRight: 'none',

    [theme.breakpoints.up('tablet')]: {
        display: 'none'
    }
}))
