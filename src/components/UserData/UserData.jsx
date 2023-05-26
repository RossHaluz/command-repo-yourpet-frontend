import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operetions';

import { Formik } from 'formik';
import {
  Box,
  Title,
  Img,
  Photo,
  DivEditPhoto,
  EditButtonPhoto,
  IconWrapperCheck,
  IconWrapperCross,
  MyForm,
  Label,
  Input,
  IconCamera,
  IconLogOut,
  IconEdit,
  DivLogOut,
  ButtonLogOut,
  DivIconCheck,
  IconCheck,
  IconCross,
} from './UserData.styled';
import useModal from 'hooks/useModal';
import LogoutModal from "../Modal/LogoutModal";

const initialValues = {
  name: '',
  email: '',
  phone: '',
  birthday: '',
  city: '',
};

const Field = React.memo(({ name, value, activeInput, handleClick }) => {
  const isActive = activeInput === name;
  const isEditing = isActive && activeInput !== null;

  return (
    <Label>
      {name}:
      <Input
        type="text"
        name={name}
        placeholder={value}
        disabled={!isActive}
        className={isEditing ? 'editing' : ''}
      />
      {isActive ? (
        <DivIconCheck>
          <IconCheck onClick={() => handleClick(name)}></IconCheck>
        </DivIconCheck>
      ) : (
        <IconEdit onClick={() => handleClick(name)}></IconEdit>
      )}
    </Label>
  );
});

const UserData = () => {
  const [activeInput, setActiveInput] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isEditingPhoto, setIsEditingPhoto] = useState(false);
  const [isOpen, toggleModal] = useModal();

  const fileInputRef = useRef(null);
  const dispatch = useDispatch();

  const handleFileChange = event => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleClick = inputName => {
    setActiveInput(prevInput => (prevInput === inputName ? null : inputName));
  };

  const handleSubmit = values => {
    // код для отправки данных на сервер
    console.log('Отправка данных:', values);
  };

  const handleEditPhoto = () => {
    setIsEditingPhoto(true);
    fileInputRef.current.click();
  };

  const handleConfirmPhoto = () => {
    setIsEditingPhoto(false);
    // Отправить выбранное фото на бекенд
    // Отправить данные на бекенд (values)
  };

  const handleCancelPhoto = () => {
    setIsEditingPhoto(false);
    setSelectedFile(null);
  };

  const handleButtonClick = () => {
    if (isEditingPhoto) {
      handleConfirmPhoto();
    } else {
      handleEditPhoto();
    }
  };

  const handleLogout = () => {
    toggleModal();
    dispatch(logout());
  }

  const fields = [
    { name: 'Name', value: 'Anna' },
    { name: 'Email', value: 'Anna@gmail.com' },
    { name: 'Phone', value: '+3800000000' },
    { name: 'Birthday', value: '00.00.0000' },
    { name: 'City', value: 'Dnipro' },
  ];

  return (
    <>
      <Title>My information:</Title>

      <Box>
        <Photo>
          {selectedFile ? (
            <Img src={URL.createObjectURL(selectedFile)} alt="Photo" />
          ) : (
            <Img
              src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
              alt="User"
            />
          )}
        </Photo>

        <DivEditPhoto>
          <EditButtonPhoto onClick={handleButtonClick}>
            <input
              ref={fileInputRef}
              type="file"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            {isEditingPhoto ? (
              <>
                <IconWrapperCheck>
                  <IconCheck onClick={handleConfirmPhoto} />
                </IconWrapperCheck>
                <span>Confirm</span>
                <IconWrapperCross>
                  <IconCross onClick={handleCancelPhoto} />
                </IconWrapperCross>
              </>
            ) : (
              <>
                <IconCamera />
                <span>Edit photo</span>
              </>
            )}
          </EditButtonPhoto>
        </DivEditPhoto>

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <MyForm>
            {fields.map(field => (
              <Field
                key={field.name}
                name={field.name}
                value={field.value}
                activeInput={activeInput}
                handleClick={handleClick}
              />
            ))}
            <DivLogOut>
              <ButtonLogOut type="button" onClick={handleLogout}>
                <IconLogOut />
                Log Out
              </ButtonLogOut>
              <LogoutModal isOpen={isOpen} toggleModal={toggleModal} onLogout={handleLogout}></LogoutModal>
            </DivLogOut>
          </MyForm>
        </Formik>
      </Box>
    </>
  );
};

export default UserData;
