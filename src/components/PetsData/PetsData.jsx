import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectPetsInfo,
} from 'redux/pets/selectors';

import AddIcon from '@mui/icons-material/Add';
import { Container, Title, AddButton, TitleContainer } from './PetsData.styled';

import PetsList from '../PetsList';

const PetsData = () => {
  const petsInfo = useSelector(selectPetsInfo);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Container>
      <TitleContainer>
        <Title>My pets:</Title>
        <AddButton to="/add-pet">
          Add pet <AddIcon />
        </AddButton>
      </TitleContainer>

      {!isLoading && !petsInfo ? (
        <div>There is no Pets Info</div>
      ) : (
        <PetsList pets={petsInfo} />
      )}
    </Container>
  );
};

export default PetsData;
