import { styled } from '@mui/material/styles';
import { Toolbar } from "@mui/material";

export const HeaderToolBar = styled(Toolbar)(({theme}) => ({
    [theme.breakpoints.down('tablet')]: {
        justifyContent: 'space-between'
    }
}))
      