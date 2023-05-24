import {
  Label,
  Input,
  Message,
  PersonalDetailsWrapper,
} from './PersonalDetails.styled';

const PersonalDetails = ({ category }) => {
  return (
    <PersonalDetailsWrapper category={category}>
      {category !== 'my-pet' && (
        <Label>
          Title of add
          <Input type="text" name="title" placeholder="Title of add" />
          <Message name="title" component="p" />
        </Label>
      )}
      <Label>
        Name pet
        <Input type="text" name="name" placeholder="Type name pet" />
        <Message name="name" component="p" />
      </Label>
      <Label>
        Date of birth
        <Input type="text" name="date" placeholder="Type date of birth" />
        <Message name="date" component="p" />
      </Label>
      <Label>
        Breed
        <Input type="text" name="breed" placeholder="Type breed" />
        <Message name="breed" component="p" />
      </Label>
    </PersonalDetailsWrapper>
  );
};

export default PersonalDetails;
