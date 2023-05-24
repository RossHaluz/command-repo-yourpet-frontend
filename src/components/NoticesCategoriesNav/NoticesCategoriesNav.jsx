import React, { useEffect, useState } from 'react';
import {
  StyledNavLink,
  StyledNavLinkWrapper,
} from './NoticesCategoriesNav.styled';
import { nanoid } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { selectIsUserLogin } from 'redux/auth/selectors';

const NoticesCategoriesNav = () => {
  const isLoggeIn = useSelector(selectIsUserLogin)
 

  const [categories, setCategories] = useState([
    'sell',
    'lost/found',
    'in good hands',
    'favorite ads',
    'my ads',
  ]);

  useEffect(() => {
    if (!isLoggeIn) {
      setCategories(categories =>
        categories.slice(0,3))
    }
  }, [isLoggeIn]);

  const categoriesObjLinks = {
    sell: '/notices/sell',
    'lost/found': '/notices/lost-found',
    'in good hands': '/notices/for-free',
    'favorite ads': '/notices/favorite',
    'my ads': '/notices/own',
  };
  return (
    <StyledNavLinkWrapper>
      {categories.map(category => (
        <StyledNavLink key={nanoid()} to={categoriesObjLinks[category]}>
          {category}{' '}
        </StyledNavLink>
      ))}
    </StyledNavLinkWrapper>
  );
};

export default NoticesCategoriesNav;
