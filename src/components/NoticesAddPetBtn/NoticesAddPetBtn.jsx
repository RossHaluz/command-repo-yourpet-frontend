import React from 'react';

import { ReactComponent as PlusIcon } from './icons/plus.svg';
import {
  AddPetStyledBtn,
  AddPetStyledBtnMobile,
  AddPetStyledLink,
  AddPetStyledLinkMobile,
} from './NoticesAddPetBtn.styled';
import { useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectIsUserLogin } from 'redux/auth/selectors';
import { toast } from 'react-hot-toast';

export const NoticesAddPetBtn = () => {
  const isMobileScreen = useMediaQuery('(max-width: 767px)');
  const isLoggeIn = useSelector(selectIsUserLogin)
  const handleNavLinkClick = () => {
    toast.error('You should be authorized.');
  };

  return (
    <>      
      {isMobileScreen ? (
        isLoggeIn ? (
          <AddPetStyledLinkMobile to={'/add-pet'}>
            <PlusIcon />
            <span>Add Pet</span>
          </AddPetStyledLinkMobile>
        ) : (
          <AddPetStyledBtnMobile onClick={() => handleNavLinkClick()}>
            <PlusIcon />
            <span>Add Pet</span>
          </AddPetStyledBtnMobile>
        )
      ) : isLoggeIn ? (
        <AddPetStyledLink to={'/add-pet'}>
          <span>Add Pet</span>
          <PlusIcon />
        </AddPetStyledLink>
      ) : (
        <AddPetStyledBtn onClick={() => handleNavLinkClick()}>
          <span>Add Pet</span>
          <PlusIcon />
        </AddPetStyledBtn>
      )}
    </>
  );
};

export default NoticesAddPetBtn;
