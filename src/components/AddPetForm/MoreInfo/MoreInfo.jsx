import {
  MoreInfoWrapper,
  AddLabel,
  PhotoWrap,
  CommentsLabel,
  Label,
  Input,
  TheSexWrapper,
  TextArea,
  FormFields,
  SexLabel,
  PhotoText,
  TheSexTitle,
} from './MoreInfo.styled';
import { Field } from 'formik';
import { Message } from './MoreInfo.styled';
import { Add, Male, Female } from '@mui/icons-material';

const MoreInfo = ({
  setFieldValue,
  category,
  step,
  values,
  errors,
  touched,
}) => {
  const handleFileChange = e => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    if (file && file.size < 3000000) {
      setFieldValue('file', file);
    } else {
      setFieldValue('file', '');
      alert('File is too big');
    }
  };
  return (
    <MoreInfoWrapper step={step} category={category}>
      <div>
        {category !== 'my-pet' && (
          <TheSexWrapper>
            <TheSexTitle>The sex</TheSexTitle>
            <div>
              <SexLabel checked={values.sex === 'female'}>
                <Female
                  sx={{
                    width: 24,
                    height: 24,
                    color: values.sex === 'male' ? '#888888' : '#F43F5E',
                  }}
                />
                Female
                <Field
                  type="radio"
                  name="sex"
                  value="female"
                  checked={values.sex === 'female'}
                />
              </SexLabel>
              <SexLabel checked={values.sex === 'male'}>
                <Male
                  sx={{
                    width: 24,
                    height: 24,
                    color: values.sex === 'female' ? '#888888' : '#54ADFF',
                    transform: 'rotate(-45deg)',
                  }}
                />
                Male
                <Field
                  type="radio"
                  name="sex"
                  value="male"
                  checked={values.sex === 'male'}
                />
              </SexLabel>
            </div>
            <Message name="sex" component="p" />
          </TheSexWrapper>
        )}

        <PhotoWrap step={step} category={category}>
          <PhotoText step={step} category={category}>
            {values.file ? 'Add photo' : 'Load the pet’s image: '}
          </PhotoText>
          <AddLabel>
            {/* {console.log(values.file)} */}
            {values.file ? (
              <img src={URL.createObjectURL(values.file)} alt="pet" />
            ) : (
              <Add sx={{ fontSize: 50, color: '#54ADFF' }} />
            )}
            <input
              type="file"
              name="file"
              accept="image/*"
              multiple={false}
              onChange={handleFileChange}
              hidden
            />
          </AddLabel>
        </PhotoWrap>
      </div>

      <FormFields>
        {category !== 'my-pet' && (
          <Label>
            Location
            <Input
              type="text"
              name="location"
              placeholder="Type location"
              errors={touched.location && errors.location}
            />
            <Message name="location" component="p" />
          </Label>
        )}

        {category === 'sell' && (
          <Label>
            Price
            <Input
              type="text"
              name="price"
              placeholder="Type price"
              errors={touched.price && errors.price}
            />
            <Message name="price" component="p" />
          </Label>
        )}

        <CommentsLabel>
          Comments
          <TextArea
            as="textarea"
            name="comments"
            placeholder="Type comment"
            errors={touched.comments && errors.comments}
          />
          <Message name="comments" component="p" />
        </CommentsLabel>
      </FormFields>
    </MoreInfoWrapper>
  );
};

export default MoreInfo;
