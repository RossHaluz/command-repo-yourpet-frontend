import { useEffect } from 'react';
import AddPetForm from 'components/AddPetForm';

const AddPetPage = () => {
  useEffect(() => {
    document.title = 'YourPet | Add pet';
  });

  return <AddPetForm />;
};

export default AddPetPage;
