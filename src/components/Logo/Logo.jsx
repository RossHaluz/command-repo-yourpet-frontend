import { MainLogo } from './Logo.styled';
import logo from './LogoImg/logo.png'

const Logo = () => {
  return <MainLogo to="/">
    <img src={logo} alt="Logo"/>
  </MainLogo>;
};

export default Logo;
