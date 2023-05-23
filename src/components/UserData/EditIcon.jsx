import { IconEdit, IconCheck } from './UserData.styled';

const EditIcon = ({ isActive, onClick }) => {
  return isActive ? (
    <IconCheck onClick={onClick}></IconCheck>
  ) : (
    <IconEdit onClick={onClick}></IconEdit>
  );
};

export default EditIcon;
