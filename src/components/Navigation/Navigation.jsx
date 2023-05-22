import AuthNav from 'components/AuthNav';
import Nav from 'components/Nav';
import UserNav from 'components/UserNav/UserNav';
import { useSelector } from 'react-redux';
// import { selectIsUserLogin } from 'redux/auth /selectors';

const Navigation = () => {
const isLogin = useSelector(state => state.auth.isUserLogin)

  return (
      <>
      <Nav />
      {isLogin ? <UserNav /> :  <AuthNav/>}</>

  );
};

export default Navigation;
