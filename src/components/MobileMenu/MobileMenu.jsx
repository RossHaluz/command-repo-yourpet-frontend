import { NavLink } from 'react-router-dom';
import {MobileMenu} from './MobileMenu.styled';

const MobileMenuMain = () => {
    return <MobileMenu>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>

        <nav>
            <NavLink to="/">News</NavLink>
            <NavLink to="/notices">Find pets</NavLink>
            <NavLink to="/">Our friends</NavLink>
        </nav>
    </MobileMenu>
}

export default MobileMenuMain