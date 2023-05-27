import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsUserLogin } from 'redux/auth/selectors';
import { deleteNotice } from 'redux/notices/operations';
import { useDispatch } from 'react-redux';

import { ReactComponent as Femail } from './icons/famail.svg';
import { ReactComponent as Male } from './icons/male.svg';
import { ReactComponent as Favorite } from './icons/favorite.svg';
import { ReactComponent as FavoriteChecked } from './icons/favoriteChecked.svg';
import { ReactComponent as Location } from './icons/lacation.svg';
import { ReactComponent as Age } from './icons/old.svg';
import { ReactComponent as GarbageCan } from './icons/trash.svg';
import { ReactComponent as Claw } from './icons/claw.svg';
import useModal from 'hooks/useModal';
import ModalNotice from 'components/ModalNotice/ModalNotice';

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

const NoticeCategoryItem = ({ petInfo }) => {
  const [isOpen, toggleModal] = useModal();
  const { _id: id, category, dateOfBirth, sex, imgURL, place, favorite, comments } = petInfo;
  const dispatch = useDispatch()

  function calculateTimeElapsedYears(dateString) {
    const startDate = new Date(dateString);
    const currentDate = new Date();
    const yearsElapsed = currentDate.getFullYear() - startDate.getFullYear();
    return Math.round(yearsElapsed);
  }

  function calculateTimeElapsedMonthses(dateString) {
    const startDate = new Date(dateString);
    const currentDate = new Date();
    const monthsElapsed =
      (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
      (currentDate.getMonth() - startDate.getMonth());
    return Math.floor(monthsElapsed);
  }

  const isLoggedIn = useSelector(selectIsUserLogin);
  // const id = '12314141414'; // will take from back and by Redux
  const isWasCreatedByMe = false; // will take from back and by Redux
  const handleToggleFavorite = () => {
    if (isLoggedIn) {
      console.log('logined');
      // patch favorite to !favorite
    } else {
      alert('you should login');
      // function that call notification "you should logIn"
    }
  };

  const handleDelete = id => {
    dispatch(deleteNotice(id))
  };

  const years = calculateTimeElapsedYears(dateOfBirth);
  const monthes = calculateTimeElapsedMonthses(dateOfBirth);

  return (
    <>
      <StyledCardWrapper>
        <StyledCardImgWrapper>
          <img
            src={
              imgURL.includes('http') ? imgURL : 'https://placehold.co/262x298'
            }
            alt="img"
          />
          <CategoryBadge>{category}</CategoryBadge>
          <BottomButtonWrapper>
            <StyledCardButtonBottom>
              <Location />
              <span>{place}</span>
            </StyledCardButtonBottom>
            <StyledCardButtonBottom>
              <Age />
              <span>{years < 1 ? monthes + ' mon' : years + ' year'}</span>
            </StyledCardButtonBottom>
            <StyledCardButtonBottom>
              {sex === 'male' ? <Male /> : <Femail />}
              <span>{'sex'}</span>
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


        <StyledComent>{comments}</StyledComent>
        <LearnMore onClick={toggleModal}>       
          <span>Learn more</span> <Claw />
        </LearnMore>
        
        <ModalNotice
          isOpen={isOpen}
          toggleModal={toggleModal}
          noticeId={id}
        ></ModalNotice>
      </StyledCardWrapper>
    </>
  );
};

export default NoticeCategoryItem;
