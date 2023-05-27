import React, { useEffect, useState } from 'react';
import {
  // StyledNavLink, 
  StyledButton,
  StyledNavLinkWrapper,
} from './NoticesCategoriesNav.styled';
import { nanoid } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsUserLogin } from 'redux/auth/selectors';
import { fetchNoticesByCategory } from 'redux/notices/operations';

const NoticesCategoriesNav = () => {
  const isLoggedIn = useSelector(selectIsUserLogin)
  const dispatch = useDispatch();

  const [categories, setCategories] = useState([
    'sell',
    'lost/found',
    'in good hands',
    'favorite ads',
    'my ads',
  ]);

  useEffect(() => {
    if (!isLoggedIn) {
      setCategories(categories =>
        categories.slice(0,3))
    }
  }, [isLoggedIn]);

  const chooseCategory = (category) => {
    dispatch(fetchNoticesByCategory(category))
  }

  return (
    <StyledNavLinkWrapper>      
      {categories.map(category => (
        <StyledButton key={nanoid()} onClick={() => chooseCategory(category)}>
          {category}{' '}
        </StyledButton>
      ))}
    </StyledNavLinkWrapper>
  );
};

export default NoticesCategoriesNav;
