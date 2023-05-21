import MenuIcon from '@mui/icons-material/Menu';

import { AppBar, Container } from '@mui/material';
import Logo from 'components/Logo';
import Navigation from 'components/Navigation';
import { useState } from 'react';
import { HeaderToolBar, BurgerMenu } from './Header.styled';


const Header = () => {
const [isOpenMenu, setIsOpenMenu] = useState(false);

const openMenu = () => {
  setIsOpenMenu(true)
}

  return (
   <> <AppBar position="static">
   <Container fixed>
     <HeaderToolBar>
       <Logo />

       <BurgerMenu
         size="large"
         edge="end"
         aria-label="menu"
         onClick={openMenu}
         sx={{color: "white", mr: "none"}}
       >
         <MenuIcon/>
       </BurgerMenu>
     {isOpenMenu && <Navigation />}
     </HeaderToolBar>
   </Container>
 </AppBar>
</>
  );
};

export default Header;
