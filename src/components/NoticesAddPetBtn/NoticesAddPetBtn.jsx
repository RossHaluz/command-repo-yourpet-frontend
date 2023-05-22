import React from 'react';

import { ReactComponent as PlusIcon } from './icons/plus.svg';
import {
  AddPetStyledBtn,
  AddPetStyledBtnMobile,
  AddPetStyledLink,
  AddPetStyledLinkMobile,
} from './NoticesAddPetBtn.styled';
import { useMediaQuery } from '@mui/material';

export const NoticesAddPetBtn = () => {
  const isMobileScreen = useMediaQuery('(max-width: 767px)');
  const isAuthorized = true; // will be recived from global redux object
  // const isPopUp = true; // will be recived from global redux object
  const handleNavLinkClick = () => {
    alert('You should be authorized.'); //will be should Authoized popUp
  };

  return (
    <>
      {/* {isPopUp && <popUp/>} */}
      {isMobileScreen ? (
        isAuthorized ? (
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
      ) : isAuthorized ? (
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
