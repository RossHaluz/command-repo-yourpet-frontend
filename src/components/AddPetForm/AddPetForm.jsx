import { useState } from 'react';
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
  category: '',
  name: '',
  date: '',
  breed: '',
  file: '',
  sex: '',
  location: '',
  price: '',
  comments: '',
  title: '',
};

const AddPetForm = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const steps = ['Choose option', 'Personal details', 'More info'];

  const handleClickNext = e => {
    e.preventDefault();

    if (step === 2) {
      return;
    }
    setStep(step + 1);
  };

  const handleClickBack = e => {
    setStep(step - 1);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleSubmit = (values, helpers) => {
    console.log(values);
    // URL.revokeObjectURL(va);
    // if (step === 2) {
    console.log('send data to server');
    helpers.resetForm();
    navigate(-1);
    // } else {
    //   setStep(prev => prev + 1);
    //   helpers.setTouched({});
    // }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema(step)}
      onSubmit={handleSubmit}
    >
      {({ values, touched, errors, setFieldValue }) => (
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
                <ButtonFilled type="submit">
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
                  onClick={handleClickNext}
                  disabled={
                    step === 0
                      ? !values.category
                      : step === 1 && values.category === 'my-pet'
                      ? !values.name ||
                        !values.date ||
                        !values.breed ||
                        errors.name ||
                        errors.date ||
                        errors.breed
                      : !values.name ||
                        !values.date ||
                        !values.breed ||
                        !values.title ||
                        errors.title ||
                        errors.name ||
                        errors.date ||
                        errors.breed
                  }
                >
                  <span>Next</span>
                  <Pets sx={{ width: 24, height: 24 }} />
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
