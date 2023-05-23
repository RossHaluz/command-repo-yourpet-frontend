import AddIcon from '@mui/icons-material/Add';

import { Title, AddButton, TitleContainer } from './PetsData.styled';

const PetsData = () => {
  return (
    <>
      <TitleContainer>
        <Title>My pets:</Title>
        <AddButton to="/add-pet">
          Add pet <AddIcon />
        </AddButton>
      </TitleContainer>

      {/* <PetsList /> */}
    </>
  );
};

export default PetsData;
