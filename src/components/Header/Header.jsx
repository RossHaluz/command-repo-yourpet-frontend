import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Container, IconButton, Toolbar } from '@mui/material';
import Logo from 'components/Logo';
import Navigation from 'components/Navigation';


const Header = () => {
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
