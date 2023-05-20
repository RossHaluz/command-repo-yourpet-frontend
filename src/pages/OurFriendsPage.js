import OurFriendsList from 'components/OurFriendsList';
import { ourFriends } from 'components/OurFriendsList/ourFriends';
import { Title } from 'components/OurFriendsList/OurFriendsList.styled';

const OurFriendsPage = () => {
  return (
    <>
      <Title>Our friends</Title>
      <OurFriendsList ourFriends={ourFriends} />
    </>
  );
};

export default OurFriendsPage;
