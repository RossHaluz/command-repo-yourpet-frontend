import { List, Item, Name, ImgThumb, Image, Contacts } from './OurFriendsList.styled';
import Box from '@mui/material/Box';
 
export const OurFriendsList = ({ ourFriends }) => {
  return (
    <List>
      {ourFriends.length > 0 &&
        ourFriends.map(friend => (
          <Item key={friend.id}>
            <Name href={friend.link} target="_blank">{friend.name}</Name>
            <Box
              sx={{
                display: 'flex', marginTop: "16px", justifyContent: 'space-between'
              }}
            >
              <ImgThumb>
                <Image src={friend.image} alt={friend.name}  />
              </ImgThumb>
              <Box
                sx={{
                  width: '50%',
                  textAlign: 'left',
                }}
              >
                <Contacts>
                  Time
                  <br />
                  {friend.time}
                </Contacts>
                <Contacts>
                  Address
                  <br />
                  {friend.address}
                </Contacts>
                <Contacts>
                  Email
                  <br />
                  {friend.email}
                </Contacts>
                <Contacts>
                  Phone
                  <br />
                  {friend.phone}
                </Contacts>
              </Box>
              </Box>
          </Item>
        ))}
    </List>
  );
};

export default OurFriendsList;
