import OurFriendsList from 'components/OurFriendsList';
import { ourFriends } from 'components/OurFriendsList/ourFriends';
import { PageTitle } from 'components/PageTitle/PageTitle.styled';
import { useEffect } from 'react';

const OurFriendsPage = () => {
  useEffect(() => {
    document.title = 'YourPet | Our Friends';
  });

  return (
    <>
      <PageTitle>Our friends</PageTitle>
      <OurFriendsList ourFriends={ourFriends} />
    </>
  );
};

export default OurFriendsPage;
