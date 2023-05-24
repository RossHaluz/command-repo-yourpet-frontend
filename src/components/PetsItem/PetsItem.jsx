import { Image, Descr, Bold, Button } from './PetsItem.styled';
import Box from '@mui/material/Box';
import { RiDeleteBin6Line } from 'react-icons/ri';

export const PetsItem = ({ pet }) => {
  const handleDelete = () => {
    console.log('Delete pet');
  };
  
  return (
    <>
      <Image src={pet.imgURL} alt="pet description" width="240" height="240" />
      <Box
        sx={{
          position: 'relative',
          width: '100%',
        }}
      >
        <Descr>
          <Bold>Name:</Bold> {pet.name}
        </Descr>
        <Button onClick={handleDelete}>
          <RiDeleteBin6Line size="24" />
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
    </>
  );
};

export default PetsItem;
