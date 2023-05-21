import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Container, IconButton } from '@mui/material';
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
        <HeaderToolBar>
          <Logo />
          <IconButton edge="end" color="inherit" aria-label="menu" onClick={openMenu}>
            <MenuIcon/>
          </IconButton>
          {isOpenMenu && <Navigation />}
        </HeaderToolBar>
      </Container>
    </AppBar>
  );
};

export default Header;
