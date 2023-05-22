import { MainLogo } from './Logo.styled';
import logo from './LogoImg/logo.png'

const Logo = ({ closeMobileMenu }) => {
  return (
    <MainLogo to="/" onClick={() => closeMobileMenu()}>
      <img src={logo} alt="Logo" />
    </MainLogo>
  );
};

export default Logo;
