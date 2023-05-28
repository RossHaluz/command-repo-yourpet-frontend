import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import useModal from 'hooks/useModal';
import LogoutModal from '../Modal/LogoutModal';
import { logout } from 'redux/auth/operetions';
import { updateUserInfo } from 'redux/pets/operations';
import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  // selectError,
  selectUserInfo,
} from 'redux/pets/selectors';
import { avatarDefault } from 'images';

import {
  Conteiner,
  Box,
  Title,
  Img,
  PhotoBox,
  PhotoWrapper,
  DivEditPhoto,
  EditButtonPhoto,
  IconWrapperCheck,
  IconWrapperCross,
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

const Field = React.memo(({ name, activeInput, handleClick, handleSubmit }) => {
  const isActive = activeInput === name;
  const isEditing = isActive && activeInput !== null;

  const handleChange = event => {
    const { name, value } = event.target;
    handleSubmit(name, value); // Виклик оновленої функції handleSubmit з назвою поля і значенням
  };

  return (
    <Label>
      {name}:
      <Input
        type="text"
        name={name}
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
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Birthday: '',
    City: '',
  });

  const fileInputRef = useRef(null);
  const { name, email, phone, birthday, city, image } =
    useSelector(selectUserInfo);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const handleFileChange = event => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleClick = inputName => {
    setActiveInput(prevInput => (prevInput === inputName ? null : inputName));
    // handleSubmit();
  };

  const handleSubmit = (fieldName, fieldValue) => {
    const updatedData = {
      [fieldName]: fieldValue,
    };

    dispatch(updateUserInfo(updatedData));
  };

  const handleEditPhoto = () => {
    setIsEditingPhoto(true);
    fileInputRef.current.click();
  };

  const handleConfirmPhoto = () => {
    setIsEditingPhoto(false);
    // Dispatch the updateUserInfo action with the updated data

    // Викликати дію для оновлення фото користувача
    const updatedData = {
      image: selectedFile,
    };
    console.log(updatedData);
    dispatch(updateUserInfo(updatedData));
    // .then(() => {
    //   // Обробка успішного оновлення фото
    // })
    // .catch(error => {
    //   // Обробка помилки оновлення фото
    // });
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
  };

  const initialValues = {
    Name: name ? name : 'Name',
    Email: email ? email : 'Name@gmail.com',
    Phone: phone ? phone : '+380000000000',
    Birthday: birthday ? birthday : '00.00.0000',
    City: city ? city : 'Dnipro',
  };

  const userInfoFields = ['Name', 'Email', 'Phone', 'Birthday', 'City'];

  return (
    <Conteiner>
      <Title>My information:</Title>

      {!isLoading && (
        <Box>
          <PhotoBox>
            <PhotoWrapper>
              {selectedFile ? (
                <Img src={URL.createObjectURL(selectedFile)} alt="Photo" />
              ) : (
                <Img src={image ? image : avatarDefault} alt="User" />
              )}
            </PhotoWrapper>

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
          </PhotoBox>

          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
              {userInfoFields.map(field => (
                <Field
                  key={field}
                  name={field}
                  activeInput={activeInput}
                  handleClick={handleClick}
                  handleChange={handleChange}
                  value={formData[field]}
                />
              ))}

              <DivLogOut>
                <ButtonLogOut type="button" onClick={handleLogout}>
                  <IconLogOut />
                  Log Out
                </ButtonLogOut>
                <LogoutModal
                  isOpen={isOpen}
                  toggleModal={toggleModal}
                  onLogout={handleLogout}
                ></LogoutModal>
              </DivLogOut>
            </Form>
          </Formik>
        </Box>
      )}
    </Conteiner>
  );
};

export default UserData;
