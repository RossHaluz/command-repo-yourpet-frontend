import MenuIcon from '@mui/icons-material/Menu';

import { AppBar, Container, IconButton, Toolbar } from '@mui/material';
import Logo from 'components/Logo';
import Navigation from 'components/Navigation';
import { useState } from 'react';
import { HeaderToolBar } from './Header.styled';


const Header = () => {
const [isOpenMenu, setIsOpenMenu] = useState(false);

const openMenu = () => {
  setIsOpenMenu(true)
}

  return (
    <AppBar position="static">
      <Container fixed>
        <Toolbar>
          <Logo />

          <IconButton
            size="large"
            edge="end"
            aria-label="menu"
          >
            <MenuIcon/>
          </IconButton>
          <Navigation />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
