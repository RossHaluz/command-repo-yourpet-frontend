import { useSelector } from 'react-redux';
import { UserLink, UserName } from './UserNav.styled';
import { RiAccountCircleLine } from 'react-icons/ri';
import { selectUser } from 'redux/auth/selectors';
const UserNav = () => {
  const user = useSelector(selectUser);
  const nickName = user.email.split('@')[0];
  return (
    <>
      <UserLink to="user">
        <RiAccountCircleLine />
        <UserName>{nickName}</UserName>
      </UserLink>
    </>
  );
};

export default UserNav;
