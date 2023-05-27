import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  // selectError,
  selectPetsInfo,
} from 'redux/pets/selectors';

import AddIcon from '@mui/icons-material/Add';
import {Conteiner, Title, AddButton, TitleContainer } from './PetsData.styled';

import PetsList from '../PetsList';

const PetsData = () => {
  const petsInfo = useSelector(selectPetsInfo);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Conteiner>
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
    </Conteiner>
  );
};

export default PetsData;
