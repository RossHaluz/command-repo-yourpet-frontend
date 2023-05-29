import mb_logo_1x from './LogoImg/mb/mb-logo-1x.png';
import mb_logo_2x from './LogoImg/mb/mb-logo-2x.png';

import tb_logo_1x from './LogoImg/tb/tb-logo-1x.png';
import tb_logo_2x from './LogoImg/tb/tb-logo-2x.png';

import lg_logo_1x from './LogoImg/lg/lg-logo-1x.png';
import lg_logo_2x from './LogoImg/lg/lg-logo-2x.png';

import { MainLogo, Img } from './Logo.styled';

const Logo = ({ closeMobileMenu }) => {
  return (
    <MainLogo to="/" onClick={() => closeMobileMenu()}>
      <Img
        srcSet={`${mb_logo_1x} 116w, ${mb_logo_2x} 232w, ${tb_logo_1x} 162w, ${tb_logo_2x} 324w, ${lg_logo_1x} 162w, ${lg_logo_2x} 324w`}
        sizes="(min-width: 1280px) 324px, (min-width: 1280px) 162px, (min-width: 768px) 324px, (min-width: 768px) 162px, (min-width: 320px) 232px, (min-width: 320px) 116px"
        src={mb_logo_1x}
        alt="Logo"
      />
    </MainLogo>
  );
};

export default Logo;
