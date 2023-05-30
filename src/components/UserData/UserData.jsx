import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

import { logout } from 'redux/auth/operations';
import { updateUserInfo } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

import LogoutModal from '../Modal/LogoutModal';

import useModal from 'hooks/useModal';
import EditPhoto from './EditPhoto';

import {
  Container,
  Box,
  Title,
  Label,
  Input,
  IconLogOut,
  IconEdit,
  DivLogOut,
  ButtonLogOut,
  DivIconCheck,
  IconCheck,
} from './UserData.styled';

const validationSchema = yup.object().shape({
  Name: yup.string().min(3).max(17),
  Email: yup.string().email('Invalid email'),
  Phone: yup.string(),
  Birthday: yup.string(),
  City: yup.string(),
});

const UserData = () => {
  const dispatch = useDispatch();
  const { name, email, phone, birthday, city } = useSelector(selectUser);

  const initialValues = {
    Name: name || 'Your name',
    Email: email,
    Phone: phone || '+38 000 000 00 00',
    Birthday: birthday || '00.00.0000',
    City: city || 'Dnipro',
  };

  const [activeInput, setActiveInput] = useState(null);
  const [formValues, setFormValues] = useState(initialValues);
  const [isOpen, toggleModal] = useModal();

  const handleFieldChange = (fieldName, fieldValue) => {
    setActiveInput(fieldName);
    setFormValues(prevValues => ({
      ...prevValues,
      [fieldName]: fieldValue,
    }));
  };

  const handleFormSubmit = values => {
    const updatedValues = {
      ...formValues,
      ...values,
    };

    const hasEmptyValues = Object.values(updatedValues).some(
      value => value === undefined || value === ''
    );

    if (hasEmptyValues) {
      return;
    }

    const updatedData = new FormData();
    updatedData.append('name', updatedValues.Name);
    updatedData.append('phone', updatedValues.Phone);
    updatedData.append('birthday', updatedValues.Birthday);
    updatedData.append('city', updatedValues.City);
    dispatch(updateUserInfo(updatedData));
  };

  const handleLogout = () => {
    toggleModal();
    dispatch(logout());
  };

  const renderField = name => {
    const isActive = activeInput === name;
    const isEditing = isActive && activeInput !== null;

    return (
      <Label key={name}>
        {name}:
        <Field name={name}>
          {({ field }) => (
            <Input
              type="text"
              {...field}
              readOnly={!isActive}
              className={isEditing ? 'editing' : ''}
              onChange={e => {
                field.onChange(e);
                handleFieldChange(name, e.target.value);
              }}
            />
          )}
        </Field>
        {isActive ? (
          <DivIconCheck>
            <IconCheck
              onClick={() => {
                handleFormSubmit(formValues);
                setActiveInput(null);
              }}
            />
          </DivIconCheck>
        ) : (
          <IconEdit onClick={() => handleFieldChange(name)} />
        )}
      </Label>
    );
  };

  return (
    <Container>
      <Title>My information:</Title>

      <Box>
        <EditPhoto />

        <Formik
          initialValues={formValues}
          onSubmit={handleFormSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            {Object.keys(formValues).map(field => renderField(field))}

            <DivLogOut>
              <ButtonLogOut type="button" onClick={toggleModal}>
                <IconLogOut />
                Log Out
              </ButtonLogOut>
              <LogoutModal
                isOpen={isOpen}
                toggleModal={toggleModal}
                onLogout={handleLogout}
              />
            </DivLogOut>
          </Form>
        </Formik>
      </Box>
    </Container>
  );
};

export default UserData;
