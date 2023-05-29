import AuthNav from 'components/AuthNav';
import Logo from 'components/Logo';
import Nav from 'components/Nav';
import UserNav from 'components/UserNav/UserNav';
import { useSelector } from 'react-redux';
import { NavWrapper } from './Navigation.styled';

const Navigation = () => {
const isLogin = useSelector(state => state.auth.isUserLogin)

  return (
      <>
      <NavWrapper>
      <Logo/>
      <Nav />
      </NavWrapper>
      {isLogin ? <UserNav /> :  <AuthNav/>}
      </>

  );
};

export default Navigation;
