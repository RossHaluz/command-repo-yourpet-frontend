import EditIcon from './EditIcon';

import { Label, Input } from './UserData.styled';

const UserInfoField = ({ field, activeInput, setActiveInput }) => {
  const handleClick = () => {
    setActiveInput(field === activeInput ? null : field);
  };

  return (
    <Label>
      {field}:
      <Input
        type="text"
        name={field}
        disabled={!activeInput || activeInput !== field}
      />
      <EditIcon isActive={activeInput === field} onClick={handleClick} />
    </Label>
  );
};

export default UserInfoField;
