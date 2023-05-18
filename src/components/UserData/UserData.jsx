import { NavLink } from 'react-router-dom';

const UserData = () => {
  return (
    <>
      <h1>Page with information about authorithation user</h1>
      <NavLink to="/add-pet">Add pet</NavLink>
    </>
  );
};

export default UserData;
