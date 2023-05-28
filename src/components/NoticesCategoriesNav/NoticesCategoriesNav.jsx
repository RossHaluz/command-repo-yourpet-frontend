import {
  StyledNavLink,
  StyledNavLinkWrapper,
} from './NoticesCategoriesNav.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsUserLogin } from 'redux/auth/selectors';
import {
  fetchNoticesFavourite, fetchUserNotices,
} from 'redux/notices/operations';

const NoticesCategoriesNav = () => {
  const isLoggedIn = useSelector(selectIsUserLogin);
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(fetchNoticesFavourite());
  };

  const handleMyNotices = () => {
    dispatch(fetchUserNotices());
  };

  return (
    <StyledNavLinkWrapper>
      <StyledNavLink to={`/notices/sell`}>sell</StyledNavLink>
      <StyledNavLink to={`/notices/lost-found`}>lost/found</StyledNavLink>
      <StyledNavLink to={`/notices/for-free`}>in good hands</StyledNavLink>

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
