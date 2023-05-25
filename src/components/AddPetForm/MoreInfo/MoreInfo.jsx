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
} from './MoreInfo.styled';
import { Field } from 'formik';
import { Add, Male, Female } from '@mui/icons-material';

const MoreInfo = ({
  file,
  handleFileChange,
  category,
  step,
  values,
  errors,
  touched,
}) => {
  return (
    <MoreInfoWrapper step={step} category={category}>
      <div>
        {category !== 'my-pet' && (
          <TheSexWrapper>
            <p>The sex</p>
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
            {errors.sex && touched.sex ? <span>{errors.sex}</span> : null}
          </TheSexWrapper>
        )}
        <PhotoWrap step={step} category={category}>
          <PhotoText step={step} category={category}>
            {file ? 'Add photo' : 'Load the pet’s image: '}
          </PhotoText>
          <AddLabel>
            {file ? (
              <img src={file} alt="pet" />
            ) : (
              <Add sx={{ fontSize: 50, color: '#54ADFF' }} />
            )}
            <input type="file" onChange={handleFileChange} hidden />
          </AddLabel>
        </PhotoWrap>
      </div>

      <FormFields error={errors.location}>
        {category !== 'my-pet' && (
          <Label>
            Location
            <Input type="text" name="location" placeholder="Type location" />
            {touched.location && errors.location ? (
              <span>{errors.location}</span>
            ) : null}
          </Label>
        )}

        {category === 'sell' && (
          <Label>
            Price
            <Input type="text" name="price" placeholder="Type price" />
            {errors.price && touched.price ? <span>{errors.price}</span> : null}
          </Label>
        )}

        <CommentsLabel>
          Comments
          <TextArea as="textarea" name="comments" placeholder="Type comment" />
        </CommentsLabel>
      </FormFields>
    </MoreInfoWrapper>
  );
};

export default MoreInfo;
