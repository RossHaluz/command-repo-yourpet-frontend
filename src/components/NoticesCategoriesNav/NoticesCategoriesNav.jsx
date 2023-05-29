import {
  StyledNavLink,
  StyledNavLinkWrapper,
} from './NoticesCategoriesNav.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsUserLogin } from 'redux/auth/selectors';
import {
  fetchNoticesFavourite, fetchUserNotices,
} from 'redux/notices/operations';

const NoticesCategoriesNav = ({onCategoryChange}) => {
  const isLoggedIn = useSelector(selectIsUserLogin);
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(fetchNoticesFavourite());
    onCategoryChange();
  };

  const handleMyNotices = () => {
    dispatch(fetchUserNotices())
    onCategoryChange();
  };

  return (
    <StyledNavLinkWrapper>
      <StyledNavLink onClick={onCategoryChange} to={`/notices/sell`}>sell</StyledNavLink>
      <StyledNavLink onClick={onCategoryChange} to={`/notices/lost-found`}>lost/found</StyledNavLink>
      <StyledNavLink onClick={onCategoryChange} to={`/notices/for-free`}>in good hands</StyledNavLink>

      {isLoggedIn && (
        <>
          <StyledNavLink to={`/notices/favourite`} onClick={handleFavorite}>favorite ads</StyledNavLink>

          <StyledNavLink to={`/notices/own`} onClick={handleMyNotices}>my ads</StyledNavLink>
        </>
      )}
    </StyledNavLinkWrapper>
  );
};

export default NoticesCategoriesNav;
