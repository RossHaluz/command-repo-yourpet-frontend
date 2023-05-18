import { AppBar, Container, Toolbar } from '@mui/material';
import Logo from 'components/Logo';
import Navigation from 'components/Navigation';

const Header = () => {
  return (
    <AppBar position="static">
      <Container fixed>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Logo />
          <Navigation />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
