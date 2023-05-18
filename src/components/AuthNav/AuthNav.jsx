import { AuthNavigation, AuthNavigationItem } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <AuthNavigation>
      <AuthNavigationItem to="register">Register</AuthNavigationItem>
      <AuthNavigationItem to="login">Login</AuthNavigationItem>
    </AuthNavigation>
  );
};

export default AuthNav;
