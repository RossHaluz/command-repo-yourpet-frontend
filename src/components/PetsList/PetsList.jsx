import { List, Item, Image, Descr, Bold } from './PetsList.styled';
import Box from '@mui/material/Box';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const PetsList = pets => {
  return (
    <List>
      {pets.map(pet => (
        <Item key={pet.id}>
          <Image alt="pet description" width="240" height="240" />
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Descr>
                <Bold>Name:</Bold> Jack
              </Descr>
              <DeleteForeverOutlinedIcon />
            </Box>
            <Descr>
              <Bold>Date of birth:</Bold> 22.04.2018
            </Descr>
            <Descr>
              <Bold>Breed:</Bold> Persian
            </Descr>
            <Descr>
              <Bold>Comments:</Bold> Jack is a gray Persian cat with green eyes.
              He loves to be pampered and groomed, and enjoys playing with toys.
              Although a bitshy, he's a loyal and affectionate lap cat.
            </Descr>
          </Box>
        </Item>
      ))}
    </List>
  );
};

export default PetsList;
