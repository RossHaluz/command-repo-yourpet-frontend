import {
  StyledButton,
  StyledNavLinkWrapper,
} from './NoticesCategoriesNav.styled';
import { nanoid } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsUserLogin } from 'redux/auth/selectors';
import {
  fetchNoticesByCategory,
  fetchNoticesFavourite,
} from 'redux/notices/operations';

const NoticesCategoriesNav = () => {
  const isLoggedIn = useSelector(selectIsUserLogin);
  const dispatch = useDispatch();

  const categories = ['sell', 'lost/found', 'in good hands'];

  const chooseCategory = category => {
    dispatch(fetchNoticesByCategory(category));
  };

  const handleFavorite = () => {
    dispatch(fetchNoticesFavourite());
  };

  const handleMyAds = () => {
    console.log('My ads');
  };

  return (
    <StyledNavLinkWrapper>
      {categories.map(category => (
        <StyledButton key={nanoid()} onClick={() => chooseCategory(category)}>
          {category}{' '}
        </StyledButton>
      ))}

      {isLoggedIn && (
        <>
          <StyledButton onClick={() => handleFavorite()}>favorite</StyledButton>

          <StyledButton onClick={() => handleMyAds()}>my ads</StyledButton>
        </>
      )}
    </StyledNavLinkWrapper>
  );
};

export default NoticesCategoriesNav;
