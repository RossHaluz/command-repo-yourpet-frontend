import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectError,
  selectAllCurrentInfo,
} from 'redux/pets/selectors';

import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operetions';

import AddIcon from '@mui/icons-material/Add';
import { Title, AddButton, TitleContainer } from './PetsData.styled';

import PetsList from '../PetsList';

const PetsData = () => {
  const dispatch = useDispatch();

  const allCurrentInfo = useSelector(selectAllCurrentInfo);
  const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  console.log(allCurrentInfo.petsInfo);
  return (
    <>
      <TitleContainer>
        <Title>My pets:</Title>
        <AddButton to="/add-pet">
          Add pet <AddIcon />
        </AddButton>
      </TitleContainer>

      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
      {isLoading && allCurrentInfo.petsInfo ? (
        <div>There is no Pets Info</div>
      ) : (
        <PetsList pets={allCurrentInfo.petsInfo} />
      )}
    </>
  );
};

export default PetsData;
