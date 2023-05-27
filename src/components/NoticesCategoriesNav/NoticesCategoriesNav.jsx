import {
  StyledButton,
  StyledNavLinkWrapper,
} from './NoticesCategoriesNav.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsUserLogin } from 'redux/auth/selectors';
import {
  fetchNoticesByCategory,
  fetchNoticesFavourite,
} from 'redux/notices/operations';
import { fetchPets } from 'redux/pets/operations';

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
    dispatch(fetchPets());
  };

  return (
    <StyledNavLinkWrapper>
      {categories.map(category => (
        <StyledButton key={category} onClick={() => chooseCategory(category)}>
          {category}
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
