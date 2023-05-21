import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/operetions';
import { selectUser } from 'redux/auth/selectors';
import { UserLink, LogoutBtn } from './UserNav.styled';

const UserNav = () => {
const user = useSelector(selectUser);
const dispatch = useDispatch();

  return (
    <>
   <UserLink to="user">{user.email}</UserLink>
   <LogoutBtn type="button" onClick={() => dispatch(logout())}>Logout</LogoutBtn>
    </>
  );
};

export default UserNav;
