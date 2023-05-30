import {
  AuthNavigation,
  AuthNavigationItemRegister,
  AuthNavigationItemLogin,
} from './AuthNav.styled';

const AuthNav = () => {
  return (
    <AuthNavigation>
      <AuthNavigationItemLogin to="login">Login</AuthNavigationItemLogin>
      <AuthNavigationItemRegister to="register">
        Register
      </AuthNavigationItemRegister>
    </AuthNavigation>
  );
};

export default AuthNav;
