import OurFriendsList from 'components/OurFriendsList';
import { ourFriends } from 'components/OurFriendsList/ourFriends';
import { Title } from 'components/OurFriendsList/OurFriendsList.styled';
import { useEffect } from 'react';

const OurFriendsPage = () => {
  useEffect(() => {
    document.title = 'YourPet | Our Friends';
  });

  return (
    <>
      <Title>Our friends</Title>
      <OurFriendsList ourFriends={ourFriends} />
    </>
  );
};

export default OurFriendsPage;
