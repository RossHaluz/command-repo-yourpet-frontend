import MenuIcon from '@mui/icons-material/Menu';

import { AppBar, Container, IconButton, Toolbar } from '@mui/material';
import Logo from 'components/Logo';
import Navigation from 'components/Navigation';
import { useState } from 'react';


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
            onClick={openMenu}
          >
            <MenuIcon/>
          </IconButton>
          {isOpenMenu && <Navigation />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
