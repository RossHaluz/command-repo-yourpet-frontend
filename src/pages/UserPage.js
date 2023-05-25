import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPets } from 'redux/pets/operations';
import { useSelector } from 'react-redux';

import UserData from 'components/UserData';
import PetsData from 'components/PetsData/PetsData';
import useModal from 'hooks/useModal';
import { selectModalSuccessRegister } from 'redux/auth/selectors';
import CongratsModal from 'components/Modal/CongratsModal';

const UserPage = () => {
  const dispatch = useDispatch();
  const successRegister = useSelector(selectModalSuccessRegister);
  const [isOpen, toggleModal, setIsOpen] = useModal();

  useEffect(() => {
    setIsOpen(true);
    dispatch(fetchPets());
  }, [dispatch, setIsOpen]);

  return (
    <>
      {successRegister && (
        <CongratsModal isOpen={isOpen} toggleModal={toggleModal} />
      )}
      <UserData />
      <PetsData />
    </>
  );
};

export default UserPage;
