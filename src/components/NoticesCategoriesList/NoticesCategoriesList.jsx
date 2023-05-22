import React from 'react';
import NoticeCategoryItem from './NoticeCategoryItem/NoticeCategoryItem';
import { nanoid } from '@reduxjs/toolkit';

const NoticesCategoriesList = ({ notices }) => {
  return (
    <>
      {notices.length > 0 &&
        notices.map(item => {
          const { name, dateOfBirth, breed, imgURL, comments } = item;

          return (
            <NoticeCategoryItem
              key={nanoid()}
              petInfo={{ name, dateOfBirth, breed, imgURL, comments }}
            />
          );
        })}
    </>
  );
};

export default NoticesCategoriesList;
