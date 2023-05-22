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
} from './MobileMenu.styled';

const MobileMenuMain = ({ closeMenu }) => {
  return (
    <MobileMenu>
      <MobileMenuWrapper>
        <Logo closeMobileMenu={closeMenu} />
        <MobileMenuCrossBtn type="button" onClick={closeMenu}>
          <CrossIcon />
        </MobileMenuCrossBtn>
      </MobileMenuWrapper>
      <MobileMenuAuthNav>
        <MobileMenuAuthWrapper>
          <LoginBtn to="/login" onClick={() => closeMenu()}>
            Login
          </LoginBtn>
          <RegisterBtn to="/register" onClick={() => closeMenu()}>
            Register
          </RegisterBtn>
        </MobileMenuAuthWrapper>
        <MobileManuMainNavigation>
          <MobileManuMainNavigationItem to="news" onClick={() => closeMenu()}>
            Our news
          </MobileManuMainNavigationItem>
          <MobileManuMainNavigationItem
            to="notices"
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
