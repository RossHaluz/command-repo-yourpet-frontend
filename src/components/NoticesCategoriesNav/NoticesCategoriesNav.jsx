import React, { useEffect, useState } from 'react';
import {
  StyledNavLink,
  StyledNavLinkWrapper,
} from './NoticesCategoriesNav.styled';
import { nanoid } from '@reduxjs/toolkit';

const NoticesCategoriesNav = () => {
  const IsAuthorized = true; // will be recived from global redux object

  const [categories, setCategories] = useState([
    'sell',
    'lost/found',
    'in good hands',
    'favorite ads',
    'my ads',
  ]);

  useEffect(() => {
    if (!IsAuthorized) {
      setCategories(categories =>
        categories.slice(0,3))
    }
  }, [IsAuthorized]);

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
