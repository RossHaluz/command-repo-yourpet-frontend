import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const UserNav = () => {
  return (
    <Typography component="p">
      Welcome, <NavLink to="user"> userName</NavLink>
    </Typography>
  );
};

export default UserNav;
