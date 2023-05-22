import AddIcon from '@mui/icons-material/Add';

import { Title, AddButton, TitleContainer } from './PetsData.styled';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operetions';

const PetsData = () => {
  const dispatch = useDispatch();

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
      {/* <PetsList /> */}
    </>
  );
};

export default PetsData;
