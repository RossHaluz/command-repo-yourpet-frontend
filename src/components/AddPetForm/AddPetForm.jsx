import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoading } from 'redux/pets/selectors';
import { selectIsNoticeLoading } from 'redux/notices/selectors';
import { addNotice } from 'redux/notices/operations';
import { addPet } from 'redux/pets/operations';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import ChooseOption from './ChooseOption/ChooseOption';
import PersonalDetails from './PersonalDetails/PersonalDetails';
import MoreInfo from './MoreInfo/MoreInfo';
import {
  AddPetFormWrapper,
  PetFormTitle,
  StepsList,
  Step,
  Button,
  ButtonFilled,
  ButtonWrap,
  FormWrap,
} from './AddPetForm.styled';
import { Pets, West } from '@mui/icons-material';
import validationSchema from './validationSchema';

const initialValues = {
  category: 'my-pet',
  name: '',
  dateOfBirth: '',
  breed: '',
  image: '',
  sex: '',
  place: '',
  price: '',
  comments: '',
  title: '',
};

const AddPetForm = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const steps = ['Choose option', 'Personal details', 'More info'];
  const isLoading = useSelector(selectIsLoading);
  const isNoticeLoading = useSelector(selectIsNoticeLoading);

  const handleClickNext = e => {
    e.preventDefault();

    if (step === 2) {
      return;
    }
    setStep(step + 1);
  };

  const handleClickBack = e => {
    e.preventDefault();
    setStep(step - 1);
  };

  const handleCancel = e => {
    e.preventDefault();
    navigate(-1);
  };

  const handleSubmit = async (values, { resetForm }) => {
    const formData = new FormData();

    formData.append('name', values.name.trim());
    formData.append('dateOfBirth', values.dateOfBirth);
    formData.append('breed', values.breed.trim());
    formData.append('comments', values.comments.trim());
    formData.append('image', values.image, values.image.name);

    if (values.category === 'my-pet') {
      dispatch(addPet(formData))
        .then(response => {
          if (!response.error) {
            navigate('/user');
            resetForm();
            return;
          }
          return;
        })
        .catch(error => console.log(error));
    }

    formData.append('title', values.title.trim());
    formData.append('place', values.place.trim());
    formData.append('sex', values.sex);

    if (values.category === 'lost-found') {
      dispatch(addNotice([values.category, formData])).then(response => {
        if (!response.error) {
          navigate(`/notices/${values.category}`);
          resetForm();
          return;
        }
        return;
      });
    }

    if (values.category === 'for-free') {
      dispatch(addNotice([values.category, formData])).then(response => {
        if (!response.error) {
          navigate(`/notices/${values.category}`);
          resetForm();
          return;
        }
        return;
      });
    }

    formData.append('price', values.price.toString());

    if (values.category === 'sell') {
      dispatch(addNotice([values.category, formData])).then(response => {
        if (!response.error) {
          navigate(`/notices/${values.category}`);
          resetForm();
          return;
        }
        return;
      });
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema(step)}
      onSubmit={handleSubmit}
    >
      {({
        values,
        touched,
        errors,
        setFieldValue,
        validateField,
        setTouched,
      }) => (
        <AddPetFormWrapper
          step={step}
          category={values.category}
          autoComplete="off"
        >
          <PetFormTitle step={step} category={values.category}>
            {step === 0
              ? 'Add pet'
              : values.category === 'my-pet'
              ? 'Add pet'
              : values.category === 'sell'
              ? 'Add pet for sale'
              : values.category === 'lost-found'
              ? 'Add lost pet'
              : 'Add for free'}
          </PetFormTitle>
          <FormWrap>
            <StepsList>
              {steps.map((stepName, index) => (
                <Step
                  key={stepName}
                  step={step}
                  index={index}
                  category={values.category}
                >
                  {stepName}
                </Step>
              ))}
            </StepsList>

            {step === 0 && (
              <ChooseOption category={values.category} values={values} />
            )}

            {step === 1 && (
              <PersonalDetails
                category={values.category}
                errors={errors}
                touched={touched}
              />
            )}

            {step === 2 && (
              <MoreInfo
                category={values.category}
                step={step}
                values={values}
                setFieldValue={setFieldValue}
                errors={errors}
                touched={touched}
              />
            )}
            <ButtonWrap category={values.category} step={step}>
              {step === 2 ? (
                <ButtonFilled
                  type="submit"
                  disabled={isLoading || isNoticeLoading}
                >
                  <span>Done</span>
                  <Pets
                    sx={{
                      width: 24,
                      height: 20,
                      color: 'white',
                      transform: 'rotate(25deg)',
                    }}
                  />
                </ButtonFilled>
              ) : (
                <ButtonFilled
                  type="button"
                  onClick={e => {
                    if (step === 0) {
                      setTouched({});
                      handleClickNext(e);
                    }
                    if (step === 1) {
                      validateField('name');
                      validateField('dateOfBirth');
                      validateField('breed');
                      validateField('title');
                      setTouched({
                        name: true,
                        dateOfBirth: true,
                        breed: true,
                        title: true,
                      });
                    }
                    if (
                      step === 1 &&
                      Object.keys(errors).length === 0 &&
                      Object.keys(touched).length !== 0
                    ) {
                      handleClickNext(e);
                    }
                  }}
                >
                  <span>Next</span>
                  <Pets
                    sx={{ width: 24, height: 24, transform: 'rotate(25deg)' }}
                  />
                </ButtonFilled>
              )}
              <Button
                type="button"
                onClick={step === 0 ? handleCancel : handleClickBack}
              >
                <West sx={{ width: 24, height: 24 }} />
                <span>{step === 0 ? 'Cancel' : 'Back'}</span>
              </Button>
            </ButtonWrap>
          </FormWrap>
        </AddPetFormWrapper>
      )}
    </Formik>
  );
};

export default AddPetForm;
