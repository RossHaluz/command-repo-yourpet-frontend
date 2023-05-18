import AuthNav from 'components/AuthNav';
import Nav from 'components/Nav';
import UserNav from 'components/UserNav/UserNav';

const Navigation = () => {
  return (
    <>
      <Nav />
      <UserNav />
      <AuthNav />
    </>
  );
};

export default Navigation;
