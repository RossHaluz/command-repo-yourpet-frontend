// import React, { useState, useRef } from 'react';
// import { useDispatch } from 'react-redux';
// import { Formik, Form } from 'formik';
// import useModal from 'hooks/useModal';
// import LogoutModal from '../Modal/LogoutModal';
// import { logout } from 'redux/auth/operetions';
// import { updateUserInfo } from 'redux/pets/operations';
// import { useSelector } from 'react-redux';
// import {
//   // selectIsLoading,
//   // selectError,
//   selectUserInfo,
// } from 'redux/pets/selectors';
// import { avatarDefault } from 'images';

// import {
//   Container,
//   Box,
//   Title,
//   Img,
//   PhotoBox,
//   PhotoWrapper,
//   DivEditPhoto,
//   EditButtonPhoto,
//   IconWrapperCheck,
//   IconWrapperCross,
//   Label,
//   Input,
//   IconCamera,
//   IconLogOut,
//   IconEdit,
//   DivLogOut,
//   ButtonLogOut,
//   DivIconCheck,
//   IconCheck,
//   IconCross,
// } from './UserData.styled';

// const Field = React.memo(({ name, activeInput, handleClick }) => {
//   const isActive = activeInput === name;
//   const isEditing = isActive && activeInput !== null;

//   return (
//     <Label>
//       {name}:
//       <Input
//         type="text"
//         name={name}
//         disabled={!isActive}
//         className={isEditing ? 'editing' : ''}
//       />
//       {isActive ? (
//         <DivIconCheck>
//           <IconCheck onClick={() => handleClick(name)}></IconCheck>
//         </DivIconCheck>
//       ) : (
//         <IconEdit onClick={() => handleClick(name)}></IconEdit>
//       )}
//     </Label>
//   );
// });

// const UserData = () => {
//   const [activeInput, setActiveInput] = useState(null);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [isEditingPhoto, setIsEditingPhoto] = useState(false);
//   const [isOpen, toggleModal] = useModal();

//   const fileInputRef = useRef(null);
//   const { name, email, phone, birthday, city, avatarURL } =
//     useSelector(selectUserInfo);

//   const dispatch = useDispatch();

//   const handleFileChange = event => {
//     const file = event.target.files[0];
//     setSelectedFile(file);
//   };

//   // const handleChange = event => {
//   //   const { name, value } = event.target;
//   //   setFormData(prevFormData => ({
//   //     ...prevFormData,
//   //     [name]: value,
//   //   }));
//   // };

//   const handleClick = inputName => {
//     setActiveInput(prevInput => (prevInput === inputName ? null : inputName));
//     // handleSubmit();
//   };

//   const handleSubmit = (fieldName, fieldValue) => {
//     const updatedData = {
//       [fieldName]: fieldValue,
//     };
//     dispatch(updateUserInfo(updatedData));
//   };

//   const handleEditPhoto = () => {
//     setIsEditingPhoto(true);
//     fileInputRef.current.click();
//   };

//   const handleConfirmPhoto = () => {
//     setIsEditingPhoto(false);

//     const updatedData = new FormData();
//     updatedData.append('image', selectedFile, selectedFile.name);
//     dispatch(updateUserInfo(updatedData));
//   };

//   const handleCancelPhoto = () => {
//     setIsEditingPhoto(false);
//     setSelectedFile(null);
//   };

//   const handleButtonClick = () => {
//     if (isEditingPhoto) {
//       handleConfirmPhoto();
//     } else {
//       handleEditPhoto();
//     }
//   };

//   const handleLogout = () => {
//     toggleModal();
//     dispatch(logout());
//   };

//   const initialValues = {
//     Name: name ? name : 'Name',
//     Email: email ? email : 'Name@gmail.com',
//     Phone: phone ? phone : '+380000000000',
//     Birthday: birthday ? birthday : '00.00.0000',
//     City: city ? city : 'Dnipro',
//   };

//   const userInfoFields = ['Name', 'Email', 'Phone', 'Birthday', 'City'];

//   return (
//     <Container>
//       <Title>My information:</Title>

//       <Box>
//         <PhotoBox>
//           <PhotoWrapper>
//             {selectedFile ? (
//               <Img src={URL.createObjectURL(selectedFile)} alt="Photo" />
//             ) : (
//               <Img src={avatarURL ? avatarURL : avatarDefault} alt="User" />
//             )}
//           </PhotoWrapper>

//           <DivEditPhoto>
//             <EditButtonPhoto onClick={handleButtonClick}>
//               <input
//                 ref={fileInputRef}
//                 type="file"
//                 style={{ display: 'none' }}
//                 onChange={handleFileChange}
//               />
//               {isEditingPhoto ? (
//                 <>
//                   <IconWrapperCheck>
//                     <IconCheck onClick={handleConfirmPhoto} />
//                   </IconWrapperCheck>
//                   <span>Confirm</span>
//                   <IconWrapperCross>
//                     <IconCross onClick={handleCancelPhoto} />
//                   </IconWrapperCross>
//                 </>
//               ) : (
//                 <>
//                   <IconCamera />
//                   <span>Edit photo</span>
//                 </>
//               )}
//             </EditButtonPhoto>
//           </DivEditPhoto>
//         </PhotoBox>

//         <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//           <Form>
//             {userInfoFields.map(field => (
//               <Field
//                 key={field}
//                 name={field}
//                 activeInput={activeInput}
//                 handleClick={handleClick}
//               />
//             ))}

//             <DivLogOut>
//               <ButtonLogOut type="button" onClick={handleLogout}>
//                 <IconLogOut />
//                 Log Out
//               </ButtonLogOut>
//               <LogoutModal
//                 isOpen={isOpen}
//                 toggleModal={toggleModal}
//                 onLogout={handleLogout}
//               ></LogoutModal>
//             </DivLogOut>
//           </Form>
//         </Formik>
//       </Box>
//     </Container>
//   );
// };

// export default UserData;

import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';

import { updateUserInfo } from 'redux/pets/operations';
import { selectUserInfo } from 'redux/pets/selectors';
import useModal from 'hooks/useModal';

import LogoutModal from '../Modal/LogoutModal';
import { logout } from 'redux/auth/operetions';
import { avatarDefault } from 'images';

import {
  Container,
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

const UserData = () => {
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const { name, email, phone, birthday, city, avatarURL } =
    useSelector(selectUserInfo);

  const [activeInput, setActiveInput] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isEditingPhoto, setIsEditingPhoto] = useState(false);
  const [isOpen, toggleModal] = useModal();
  const [fieldValue, setFieldValue] = useState({
    Name: name || 'Name',
    Email: email,
    Phone: phone || '+380000000000',
    Birthday: birthday || '00.00.0000',
    City: city || 'Dnipro',
  });

  const Field = ({ name, activeInput, handleClick, onChange }) => {
    const isActive = activeInput === name;
    const isEditing = isActive && activeInput !== null;

    const handleIconCheckClick = () => {
      onChange();
      handleClick(name);
    };

    const handleInputChange = e => {
      const { name: fieldName, value: fieldValue } = e.target;
      setFieldValue(prevState => ({
        ...prevState,
        [fieldName]: fieldValue,
      }));
    };

    return (
      <Label>
        {name}:
        <Input
          type="text"
          name={name}
          readOnly={!isActive}
          className={isEditing ? 'editing' : ''}
          value={fieldValue[name]}
          onChange={handleInputChange}
        />
        {isActive ? (
          <DivIconCheck>
            <IconCheck onClick={handleIconCheckClick}></IconCheck>
          </DivIconCheck>
        ) : (
          <IconEdit onClick={() => handleClick(name)}></IconEdit>
        )}
      </Label>
    );
  };

  const handleFileChange = event => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleClick = inputName => {
    setActiveInput(prevInput => (prevInput === inputName ? null : inputName));
  };

  const handleSubmit = () => {
    const updatedData = new FormData();
    updatedData.append('name', fieldValue.Name);
    // updatedData.append('email', fieldValue.Email);
    updatedData.append('phone', fieldValue.Phone);
    updatedData.append('birthday', fieldValue.Birthday);
    updatedData.append('city', fieldValue.City);
    dispatch(updateUserInfo(updatedData));
  };

  const handleEditPhoto = () => {
    setIsEditingPhoto(true);
    fileInputRef.current.click();
  };

  const handleConfirmPhoto = () => {
    const updatedData = new FormData();
    updatedData.append('image', selectedFile, selectedFile.name);
    dispatch(updateUserInfo(updatedData));
  };

  const handleCancelPhoto = () => {
    setIsEditingPhoto(false);
    setSelectedFile(null);
  };

  const handleButtonClick = () => {
    if (isEditingPhoto) {
      setIsEditingPhoto(false);
    } else {
      handleEditPhoto();
    }
  };

  const handleLogout = () => {
    toggleModal();
    dispatch(logout());
  };

  const userInfoFields = ['Name', 'Email', 'Phone', 'Birthday', 'City'];

  return (
    <Container>
      <Title>My information:</Title>

      <Box>
        <PhotoBox>
          <PhotoWrapper>
            {selectedFile ? (
              <Img src={URL.createObjectURL(selectedFile)} alt="Photo" />
            ) : (
              <Img src={avatarURL || avatarDefault} alt="User" />
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

        <Formik initialValues={fieldValue} onSubmit={handleSubmit}>
          <Form>
            {userInfoFields.map(field => (
              <Field
                key={field}
                name={field}
                activeInput={activeInput}
                handleClick={handleClick}
                onChange={handleSubmit}
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
    </Container>
  );
};

export default UserData;
