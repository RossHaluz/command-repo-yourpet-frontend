import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operetions';
import UserInfoField from './UserInfoFild';
import { Formik, Form } from 'formik';
import {
  Box,
  Title,
  Img,
  Photo,
  EditPhoto,
  IconCamera,
  IconLogOut,
  ButtonLogOut,
} from './UserData.styled';

const initialValues = {
  Name: 'Anna',
  Email: 'Anna@gmail.com',
  Phone: '+3800000000',
  Birthday: '00.00.0000',
  City: 'Dnipro',
};

const UserData = () => {
  const [activeInput, setActiveInput] = useState(null);

  const dispatch = useDispatch();

  const handleSubmit = values => {
    // отправка данных на сервер
    console.log('Отправка данных:', values);
  };

  const userInfoFields = ['Name', 'Email', 'Phone', 'Birthday', 'City'];

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
          <IconCamera onClick={() => setActiveInput('photo')} />
          Edit photo
        </EditPhoto>

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            {userInfoFields.map(field => (
              <UserInfoField
                key={field}
                field={field}
                activeInput={activeInput}
                setActiveInput={setActiveInput}
              />
            ))}

            <ButtonLogOut type="button" onClick={() => dispatch(logout())}>
              <IconLogOut />
              Log Out
            </ButtonLogOut>
          </Form>
        </Formik>
      </Box>
    </>
  );
};

export default UserData;
