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
  file: null,
  sex: '',
  location: '',
  price: '',
  comments: '',
  title: '',
  step: 1,
};

const AddPetForm = () => {
  const [step, setStep] = useState(0);
  // const [category, setCategory] = useState(initialValues.category);
  const [file, setFile] = useState(initialValues.file);
  const navigate = useNavigate();
  const steps = ['Choose option', 'Personal details', 'More info'];

  // const handleChangeCategory = category => {
  //   console.log(initialValues.category);
  //   console.log(category);
  //   setCategory((initialValues.category = category));
  // };

  // const handleClickNext = e => {
  //   setStep(step + 1);
  // };

  const handleClickBack = e => {
    setStep(step - 1);
  };

  const handleFileChange = e => {
    if (e.target.files[0]) {
      const fileURL = URL.createObjectURL(e.target.files[0]);
      setFile(fileURL);
    }
    // URL.revokeObjectURL(fileURL);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleSubmit = e => {
    console.log('on submit');

    if (step === 2) {
      console.log('send data to server');
      // actions.resetForm();
    } else {
      setStep(prev => prev + 1);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema(step)}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, isValid }) => (
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
              {/* {console.log(values)} */}
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

            {step === 1 && <PersonalDetails category={values.category} />}

            {step === 2 && (
              <MoreInfo
                file={file}
                handleFileChange={handleFileChange}
                category={values.category}
                step={step}
                values={values}
                errors={errors}
                touched={touched}
              />
            )}

            <ButtonWrap category={values.category} step={step}>
              <ButtonFilled type="submit">
                <span>{step === 2 ? 'Done' : 'Next'}</span>
                <Pets
                  sx={{
                    width: 24,
                    height: 20,
                    color: 'white',
                    transform: 'rotate(25deg)',
                  }}
                />
              </ButtonFilled>
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
