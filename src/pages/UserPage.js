import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPets } from 'redux/pets/operations';

import UserData from 'components/UserData';
import PetsData from 'components/PetsData/PetsData';

const UserPage = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  return (
    <>
      <UserData />
      <PetsData />
    </>
  );
};

export default UserPage;
