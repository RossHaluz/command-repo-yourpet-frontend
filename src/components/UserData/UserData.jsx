import React, { useState } from 'react';
import {
  Box,
  Title,
  Img,
  Photo,
  EditPhoto,
  Form,
  Label,
  Input,
  IconCamera,
  IconLogOut,
  IconEdit,
  ButtonLogOut,
} from './UserData.styled';

const initialValues = {
  name: 'Anna',
  email: 'Anna@gmai.com',
  phone: '+380-000-00-00',
  birthday: '00.00.0000',
  city: 'Dnipro',
};

const UserData = () => {
  const [userData, setUserData] = useState(initialValues);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setUserData(prevUserData => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleEditClick = e => {
    e.preventDefault();
    // Отправка данных на сервер или другие действия при нажатии кнопки "Изменить"
    console.log(userData);
  };

  return (
    <>
      <Title>My information:</Title>
      <Box>
        <Photo>
          <Img
            src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
            alt="User"
          />
        </Photo>

        <EditPhoto>
          <IconCamera /> Edit photo
        </EditPhoto>

        <Form>
          <Label>
            Name:
            <Input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
            />
            <IconEdit onClick={handleEditClick}>Edit</IconEdit>
          </Label>

          <Label>
            Email:
            <Input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
            />
            <IconEdit onClick={handleEditClick}>Edit</IconEdit>
          </Label>

          <Label>
            Phone:
            <Input
              type="tel"
              name="phone"
              value={userData.phone}
              onChange={handleInputChange}
            />
            <IconEdit onClick={handleEditClick}>Edit</IconEdit>
          </Label>

          <Label>
            Birthday:
            <Input
              type="tel"
              name="birthday"
              value={userData.birthday}
              onChange={handleInputChange}
            />
            <IconEdit onClick={handleEditClick}>Edit</IconEdit>
          </Label>

          <Label>
            City:
            <Input
              type="text"
              name="city"
              value={userData.city}
              onChange={handleInputChange}
            />
            <IconEdit onClick={handleEditClick}>Edit</IconEdit>
          </Label>
        </Form>

        <ButtonLogOut type="button">
          <IconLogOut />
          Log Out
        </ButtonLogOut>
      </Box>
    </>
  );
};

export default UserData;
