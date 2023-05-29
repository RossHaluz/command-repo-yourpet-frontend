import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';

import { updateUserInfo } from 'redux/pets/operations';
import { selectUserInfo } from 'redux/pets/selectors';
import useModal from 'hooks/useModal';

import LogoutModal from '../Modal/LogoutModal';
import { logout } from 'redux/auth/operetions';
import PhotoEdit from './PhotoEdit';

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

const UserData = () => {
  const dispatch = useDispatch();
  const { name, email, phone, birthday, city } = useSelector(selectUserInfo);

  const [activeInput, setActiveInput] = useState(null);
  const [isOpen, toggleModal] = useModal();

  const initialValues = {
    Name: name || 'Name',
    Email: email,
    Phone: phone || '+380000000000',
    Birthday: birthday || '00.00.0000',
    City: city || 'Dnipro',
  };

  const [formValues, setFormValues] = useState(initialValues);

  const handleFieldChange = (fieldName, fieldValue) => {
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
        <PhotoEdit />

        <Formik initialValues={formValues} onSubmit={handleFormSubmit}>
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
