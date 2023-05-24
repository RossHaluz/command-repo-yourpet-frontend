import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  // selectError,
  selectAllCurrentInfo,
} from 'redux/pets/selectors';

import AddIcon from '@mui/icons-material/Add';
import { Title, AddButton, TitleContainer } from './PetsData.styled';

import PetsList from '../PetsList';

const PetsData = () => {
  const allCurrentInfo = useSelector(selectAllCurrentInfo);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <TitleContainer>
        <Title>My pets:</Title>
        <AddButton to="/add-pet">
          Add pet <AddIcon />
        </AddButton>
      </TitleContainer>

      {!isLoading && !allCurrentInfo.petsInfo ? (
        <div>There is no Pets Info</div>
      ) : (
        <PetsList pets={allCurrentInfo.petsInfo} />
      )}
    </>
  );
};

export default PetsData;