import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectIsUserLogin } from 'redux/auth/selectors';

import { ReactComponent as Famail } from './icons/famail.svg';
// import { ReactComponent as Male } from './icons/male.svg';
import { ReactComponent as Favorite } from './icons/favorite.svg';
import { ReactComponent as FavoriteChecked } from './icons/favoriteChecked.svg';
import { ReactComponent as Location } from './icons/lacation.svg';
import { ReactComponent as Age } from './icons/old.svg';
import { ReactComponent as GarbageCan } from './icons/trash.svg';
import { ReactComponent as Claw } from './icons/claw.svg';

import {
  BottomButtonWrapper,
  CategoryBadge,
  LearnMore,
  RightButtonWrapper,
  StyledCardButtonBottom,
  StyledCardButtonRight,
  StyledCardImgWrapper,
  StyledCardWrapper,
  StyledComent,
} from './NoticeCategoryItem.styled';

// name, dateOfBirth, breed, comments;

const NoticeCategoryItem = ({ petInfo }) => {
  const { imgURL } = petInfo;

  const isLoggeIn = useSelector(selectIsUserLogin);
  const id = '12314141414'; // will take from back and by Redux
  const favorite = false; // will take from back and by Redux
  const isWasCreatedByMe = false; // will take from back and by Redux
  const handleToggleFavorite = () => {
    if (isLoggeIn) {
      console.log('logined');
      // patch favorite to !favorite
    } else {
      alert('you should login');
      // function that call notification "you should logIn"
    }
  };
  const handleDelete = id => {
    // call delete function from redux
  };
  const handleShowPopUp = id => {
    if (isLoggeIn) {
      // show pop up function
    } else {
      alert('you should login');
      // function that call notification "you should logIn"
    }
  };

  return (
    <>
      <StyledCardWrapper>
        <StyledCardImgWrapper>
          <img src={imgURL} alt="img" />
          <CategoryBadge>{'sell'}</CategoryBadge>
          <BottomButtonWrapper>
            <StyledCardButtonBottom>
              <Location />
              <span>{'location'}</span>
            </StyledCardButtonBottom>
            <StyledCardButtonBottom>
              <Age />
              <span>{'age'}</span>
            </StyledCardButtonBottom>
            <StyledCardButtonBottom>
              <Famail /> <span>{'sex'}</span>
            </StyledCardButtonBottom>
          </BottomButtonWrapper>
          <RightButtonWrapper>
            <StyledCardButtonRight onClick={() => handleToggleFavorite()}>
              {favorite ? <FavoriteChecked /> : <Favorite />}
            </StyledCardButtonRight>
            {isWasCreatedByMe && (
              <StyledCardButtonRight onClick={() => handleDelete(id)}>
                <GarbageCan />
              </StyledCardButtonRight>
            )}
          </RightButtonWrapper>
        </StyledCardImgWrapper>

        <StyledComent>Сute dog looking for a home</StyledComent>
        <LearnMore onClick={() => handleShowPopUp()}>
          <span>Learn more</span> <Claw />
        </LearnMore>
      </StyledCardWrapper>
    </>
  );
};

NoticeCategoryItem.propTypes = {
  petInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    dateOfBirth: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    imgURL: PropTypes.string.isRequired,
    comments: PropTypes.string,
  }).isRequired,
};
export default NoticeCategoryItem;
