import { UserLink, UserName } from './UserNav.styled';
import { RiAccountCircleLine } from 'react-icons/ri';

const UserNav = () => {
  return (
    <>
      <UserLink to="user">
        <RiAccountCircleLine />
        <UserName>John</UserName>
      </UserLink>
    </>
  );
};

export default UserNav;
