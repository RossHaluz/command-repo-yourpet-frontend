import Logo from 'components/Logo';
import {
  MobileMenu,
  MobileMenuWrapper,
  MobileMenuCrossBtn,
  CrossIcon,
  LoginBtn,
  MobileMenuAuthWrapper,
  RegisterBtn,
  MobileMenuAuthNav,
  MobileManuMainNavigation,
  MobileManuMainNavigationItem,
  UserIcon,
  MobileMenuUser,
  NameUser,
} from './MobileMenu.styled';
import { useSelector } from 'react-redux';
import { selectIsUserLogin, selectUser } from 'redux/auth/selectors';

const MobileMenuMain = ({ closeMenu }) => {
  const isLogin = useSelector(selectIsUserLogin);
  const user = useSelector(selectUser);
  const nickName = user.email ? user.email.split('@')[0] : '';

  return (
    <MobileMenu>
      <MobileMenuWrapper>
        <Logo closeMobileMenu={closeMenu} />
        <MobileMenuCrossBtn type="button" onClick={closeMenu}>
          <CrossIcon />
        </MobileMenuCrossBtn>
      </MobileMenuWrapper>
      <MobileMenuAuthNav>
        {isLogin ? (
          <MobileMenuUser to="user" onClick={() => closeMenu()}>
            <NameUser>{nickName}</NameUser>
            <UserIcon />
          </MobileMenuUser>
        ) : (
          <MobileMenuAuthWrapper>
            <LoginBtn to="/login" onClick={() => closeMenu()}>
              Login
            </LoginBtn>
            <RegisterBtn to="/register" onClick={() => closeMenu()}>
              Register
            </RegisterBtn>
          </MobileMenuAuthWrapper>
        )}
        <MobileManuMainNavigation>
          <MobileManuMainNavigationItem to="news" onClick={() => closeMenu()}>
            Our news
          </MobileManuMainNavigationItem>
          <MobileManuMainNavigationItem
            to="notices/sell"
            onClick={() => closeMenu()}
          >
            Notices
          </MobileManuMainNavigationItem>
          <MobileManuMainNavigationItem
            to="friends"
            onClick={() => closeMenu()}
          >
            Our friends
          </MobileManuMainNavigationItem>
        </MobileManuMainNavigation>
      </MobileMenuAuthNav>
    </MobileMenu>
  );
};

export default MobileMenuMain;
