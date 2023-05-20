import { List, Item, Name } from './OurFriendsList.styled';
import Box from '@mui/material/Box';

export const OurFriendsList = ({ ourFriends }) => {
  return (
    <List>
      {ourFriends.length > 0 &&
        ourFriends.map(friend => (
          <Item key={friend.id}>
            <Name>{friend.name}</Name>
            <Box sx={{
                display: 'flex',
                }}>
            <Box>
              <img src={friend.image} alt={friend.name} />
            </Box>
            <Box
              sx={{
                width: '50%',
              }}
            >
              <p>{friend.time}</p>
              <p>{friend.address}</p>
              <p>{friend.email}</p>
              <p>{friend.phone}</p>
              </Box>
            </Box>
          </Item>
        ))}
    </List>
  );
};

export default OurFriendsList;
