import Logo from 'components/Logo';
import { NavLink } from 'react-router-dom';
import {MobileMenu} from './MobileMenu.styled';
import { RxCross2 } from 'react-icons/rx';


const MobileMenuMain = ({closeMenu}) => {

    return <MobileMenu>
        <Logo/>
        <button type="button" onClick={closeMenu}><RxCross2/></button>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <nav>
      <NavLink to="news">Our news</NavLink>
      <NavLink to="notices">Notices</NavLink>
      <NavLink to="friends">Our friends</NavLink>
    </nav>
    </MobileMenu>
}

export default MobileMenuMain