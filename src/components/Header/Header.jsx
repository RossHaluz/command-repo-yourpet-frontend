import BurgerMenu from 'components/BurgerMenu';
import MobileMenuMain from 'components/MobileMenu/MobileMenu';
import Navigation from 'components/Navigation';
import { useState } from 'react';
import {
  HeaderContainer,
  MainHeader,
  BurgerMenuBtn,
} from './Header.styled';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MainHeader>
      <HeaderContainer>
            <Navigation />
            <BurgerMenuBtn type="button" onClick={toggleMobileMenu}>
              <BurgerMenu />
            </BurgerMenuBtn>
            {isOpen && <MobileMenuMain closeMenu={toggleMobileMenu} />}
      </HeaderContainer>
    </MainHeader>
  );
};

export default Header;
