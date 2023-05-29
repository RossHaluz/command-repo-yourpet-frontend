import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

import { logout } from 'redux/auth/operations';
import { updateUserInfo } from 'redux/pets/operations';
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
  console.log('rerender')
  const { name, email, phone, birthday, city } = useSelector(selectUser);
  const initialValues = {
    Name: name || 'Name',
    Email: email,
    Phone: phone || '+380000000000',
    Birthday: birthday || '00.00.0000',
    City: city || 'city',
  };

  const [activeInput, setActiveInput] = useState(null);
  const [isOpen, toggleModal] = useModal();
  const [formValues, setFormValues] = useState(initialValues);
  const handleFieldChange = (fieldName, fieldValue) => {
    console.log('Changed value =', fieldValue)
    setActiveInput(fieldName);
    setFormValues(prevValues => ({
      ...prevValues,
      [fieldName]: fieldValue,
    }));
  };

  const handleFormSubmit = values => {
    const updatedData = new FormData();
    updatedData.append('name', values.Name);
    updatedData.append('phone', values.Phone);
    updatedData.append('birthday', values.Birthday);
    updatedData.append('city', values.City);
    dispatch(updateUserInfo(updatedData));
  };

  const handleLogout = () => {
    toggleModal();
    dispatch(logout());
  };

  const renderField = name => {
    const isActive = activeInput === name;
    const isEditing = isActive && activeInput !== null;

    const handleIconCheckClick = () => {
      handleFormSubmit(formValues);
      handleFieldChange(name);
      setActiveInput(null);
    };

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
                console.log('test', field)
                field.onChange(e);
                handleFieldChange(name, field.value);
              }}
            />
          )}
        </Field>
        {isActive ? (
          <DivIconCheck>
            <IconCheck onClick={handleIconCheckClick} />
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
              <ButtonLogOut type="button" onClick={handleLogout}>
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
