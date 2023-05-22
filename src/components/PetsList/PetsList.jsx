import { List, Item } from './PetsList.styled';
import PetsItem from 'components/PetsItem';

export const PetsList = ({ pets }) => {
  return (
    <List>
      {pets &&
        pets.map(pet => (
          <Item key={pet._id}>
            <PetsItem pet={pet} />
          </Item>
        ))}
    </List>
  );
};

export default PetsList;
