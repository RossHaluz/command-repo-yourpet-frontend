import BurgerMenu from 'components/BurgerMenu';
import Logo from 'components/Logo';
import MobileMenuMain from 'components/MobileMenu/MobileMenu';
import Navigation from 'components/Navigation';
import { useState } from 'react';
import { HeaderContainer, MainHeader, HeaderWrapper, AuthNavigation } from './Header.styled';


const Header = () => {
const [isOpen, setIsOpen] = useState(false);
 
const openMobileMenu = () => {
  setIsOpen(true)
}

const closeMobileMenu = () => {
  setIsOpen(false)
}


  return (
<MainHeader>
  <HeaderContainer>
    <HeaderWrapper>
<Logo/>
    <AuthNavigation>
    <Navigation/>
    <button type="button" onClick={openMobileMenu}><BurgerMenu/></button>
    {isOpen && <MobileMenuMain closeMenu={closeMobileMenu}/>}
    </AuthNavigation>
    </HeaderWrapper>
  </HeaderContainer>
</MainHeader>
  );
};

export default Header;
