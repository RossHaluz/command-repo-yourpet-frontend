import {
  List,
  Item,
  Image,
  Descr,
  Bold,
  Button,
} from './PetsList.styled';
import Box from '@mui/material/Box';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

export const PetsList = ({ pets }) => {
  return (
    <List>
      {pets.length > 0 &&
        pets.map(pet => (
          <Item key={pet.id}>
              <Image
                src={pet.imgURL}
                alt="pet description"
                width="240"
                height="240"
              />
            <Box
              sx={{
                position: 'relative',
                width: '100%',
              }}
            >
              <Descr>
                <Bold>Name:</Bold> {pet.name}
              </Descr>
              <Button>
                <DeleteForeverOutlinedIcon size="42" />
              </Button>

              <Descr>
                <Bold>Date of birth:</Bold> {pet.dateOfBirth}
              </Descr>
              <Descr>
                <Bold>Breed:</Bold> {pet.breed}
              </Descr>
              <Descr>
                <Bold>Comments:</Bold> {pet.comments}
              </Descr>
            </Box>
          </Item>
        ))}
    </List>
  );
};

export default PetsList;
