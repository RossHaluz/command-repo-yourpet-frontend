import BurgerMenu from 'components/BurgerMenu';
import Logo from 'components/Logo';
import MobileMenuMain from 'components/MobileMenu/MobileMenu';
import Navigation from 'components/Navigation';
import { useState } from 'react';
import {
  HeaderContainer,
  MainHeader,
  HeaderWrapper,
  AuthNavigation,
  BurgerMenuBtn,
} from './Header.styled';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMobileMenu = () => {
    setIsOpen(true);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <MainHeader>
      <HeaderContainer>
        <HeaderWrapper>
          <Logo />
          <AuthNavigation>
            <Navigation />
            <BurgerMenuBtn type="button" onClick={openMobileMenu}>
              <BurgerMenu />
            </BurgerMenuBtn>
            {isOpen && <MobileMenuMain closeMenu={closeMobileMenu} />}
          </AuthNavigation>
        </HeaderWrapper>
      </HeaderContainer>
    </MainHeader>
  );
};

export default Header;
