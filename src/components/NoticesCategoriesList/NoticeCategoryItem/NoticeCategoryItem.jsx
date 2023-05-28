import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsUserLogin, selectUser } from 'redux/auth/selectors';
import { selectIsNoticeLoading } from 'redux/notices/selectors';
import { deleteNotice } from 'redux/notices/operations';

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
  StyledCardLinkBottom,
  StyledCardWrapper,
  StyledComent,
} from './NoticeCategoryItem.styled';

import {
  makeNoticeFavourite,
  removeNoticeFavourite,
} from 'redux/notices/operations';
import { toast } from 'react-hot-toast';

const NoticeCategoryItem = ({ petInfo }) => {
  const dispatch = useDispatch();
  const [isOpen, toggleModal] = useModal();

  const {
    _id: noticeId,
    category,
    dateOfBirth,
    sex,
    imgURL,
    place,
    favorite,
    comments,
    owner,
  } = petInfo;
  const isLoading = useSelector(selectIsNoticeLoading);
  const { _id: userId } = useSelector(selectUser);
  const [isFavorite, setIsFavorite] = useState(favorite.includes(userId));
  function calculateTimeElapsedYears(dateString) {
    const startDate = new Date(dateString.split('.').reverse().join('.'));
    const currentDate = new Date();
    const yearsElapsed = currentDate.getFullYear() - startDate.getFullYear();
    return Math.round(yearsElapsed);
  }

  function calculateTimeElapsedMonthses(dateString) {
    const startDate = new Date(dateString.split('.').reverse().join('.'));
    const currentDate = new Date();
    const monthsElapsed =
      (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
      (currentDate.getMonth() - startDate.getMonth());
    return Math.floor(monthsElapsed);
  }

  function formatComments(comment) {
    if (comment && comment.length > 40) {
      return comment.slice(0, 40) + '...';
    } else return comment;
  }

  const isLoggedIn = useSelector(selectIsUserLogin);

  const isCreatedByMe = owner ? userId === owner._id : owner;
  const handleToggleFavorite = noticeId => {
    if (isLoggedIn) {
      if (!isFavorite) {
        dispatch(makeNoticeFavourite(noticeId));
        setIsFavorite(!isFavorite);
      } else {
        dispatch(removeNoticeFavourite(noticeId));
        setIsFavorite(!isFavorite);
      }
    } else {
      toast.error('You should be authorized.');
    }
  };

  const handleDelete = id => {
    dispatch(deleteNotice(id));
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
            <StyledCardLinkBottom
              target="_blank"
              href={`https://www.google.com/maps/place/${place}`}
            >
              <Location />
              <span>{place}</span>
            </StyledCardLinkBottom>
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
            <StyledCardButtonRight
              onClick={() => handleToggleFavorite(noticeId)}
            >
              {isFavorite ? <FavoriteChecked /> : <Favorite />}
            </StyledCardButtonRight>
            {isCreatedByMe && (
              <StyledCardButtonRight
                onClick={() => handleDelete(noticeId)}
                disable={isLoading}
              >
                <GarbageCan />
              </StyledCardButtonRight>
            )}
          </RightButtonWrapper>
        </StyledCardImgWrapper>

        <StyledComent>{formatComments(comments)}</StyledComent>
        <LearnMore onClick={toggleModal}>
          <span>Learn more</span> <Claw />
        </LearnMore>

        <ModalNotice
          isOpen={isOpen}
          toggleModal={toggleModal}
          noticeId={noticeId}
          handleToggleFavorite={handleToggleFavorite}
          isFavorite={isFavorite}
        />
      </StyledCardWrapper>
    </>
  );
};

export default NoticeCategoryItem;
