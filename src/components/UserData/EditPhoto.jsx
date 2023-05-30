import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserInfo } from 'redux/auth/operations';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

import { avatarDefault } from 'images';

import {
  PhotoBox,
  PhotoWrapper,
  DivEditPhoto,
  EditButtonPhoto,
  IconWrapperCheck,
  IconWrapperCross,
  Img,
  IconCamera,
  IconCheck,
  IconCross,
} from './UserData.styled';

const EditPhoto = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isEditingPhoto, setIsEditingPhoto] = useState(false);

  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const { avatarURL } = useSelector(selectUser);

  const handleFileChange = event => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleEditPhoto = () => {
    setIsEditingPhoto(true);
    fileInputRef.current.click();
  };

  const handleConfirmPhoto = () => {
    if (!selectedFile) {
      return;
    }

    setIsEditingPhoto(false);

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
      handleConfirmPhoto();
    } else {
      handleEditPhoto();
    }
  };

  return (
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
  );
};

export default EditPhoto;
