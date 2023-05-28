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
      <StyledNavLink to={`/notices/for-free`}>for free</StyledNavLink>

      {isLoggedIn && (
        <>
          <StyledNavLink to={`/notices/favourite`} onClick={handleFavorite}>favourite</StyledNavLink>

          <StyledNavLink to={`/notices/own`} onClick={handleMyNotices}>own</StyledNavLink>
        </>
      )}
    </StyledNavLinkWrapper>
  );
};

export default NoticesCategoriesNav;
