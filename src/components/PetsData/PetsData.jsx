import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import AddIcon from '@mui/icons-material/Add';

import {
  Title,
  Item,
  AddButton,
  List,
  TitleContainer,
  Image,
  TextWrapper,
  Text,
} from './PetsData.styled';

const PetData = [
  {
    id: 1,
    name: 'Jack',
    birth: '12.21.2003',
    breed: 'Persian cat',
    comment: 'Jack is a gray Persian cat with green eyes.',
  },
  {
    id: 2,
    name: 'Jack',
    birth: '12.21.2003',
    breed: 'Basenji',
    comment: 'Jack is a gray Persian cat with green eyes.',
  },
];

const PetsData = () => {
  return (
    <>
      <TitleContainer>
        <Title>My pets:</Title>
        <AddButton to="/add-pet">
          Add pet <AddIcon />
        </AddButton>
      </TitleContainer>

      <List>
        {PetData.map(({ id, name, birth, breed, comment }) => (
          <Item key={id}>
            <Image src="#" alt="" />

            <TextWrapper>
              <Text>
                <span>Name:</span> {name}
                <IconButton>
                  <DeleteIcon color="primary" />
                </IconButton>
              </Text>
              <Text>
                <span>Date of birth:</span> {birth}
              </Text>
              <Text>
                <span>Breed:</span> {breed}
              </Text>
              <parseInt>
                <span>Comments:</span> {comment}
              </parseInt>
            </TextWrapper>
          </Item>
        ))}
      </List>
    </>
  );
};

export default PetsData;

// export default function ContactList() {
//   const visibleContacts = useSelector(contactsSelectors.getVisibleContacts);

// //   const isLoading = useSelector(contactsSelectors.getIsLoading);
// //   const error = useSelector(contactsSelectors.getError);

//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         error && (
//           <p style={{ color: 'red' }}>
//             Sorry, something went wrong, try again.
//           </p>
//         )
//       )}
//       <List>
//         {visibleContacts.map(({ id, name, number }) => (
//           <Item key={id}>
//             <Contact name={name} number={number} id={id} />
//           </Item>
//         ))}
//       </List>
//     </>
//   );
// }
