import { Typography, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from 'redux/auth /operetions';
import { selectUser } from 'redux/auth /selectors';

const UserNav = () => {
const user = useSelector(selectUser);
const dispatch = useDispatch();

  return (
    <Typography component="p">
   <NavLink to="user">{user.email}</NavLink>
   <Button type="button" onClick={() => dispatch(logout())}>Logout</Button>
    </Typography>
  );
};

export default UserNav;
