import {
  List,
  Item,
} from './PetsList.styled';
import PetsItem from 'components/PetsItem';

export const PetsList = ({ pets }) => {
  return (
    <List>
      {pets.length > 0 &&
        pets.map(pet => (
          <Item key={pet.id}>
              <PetsItem pet={pet}/>
          </Item>
        ))}
    </List>
  );
};

export default PetsList;
