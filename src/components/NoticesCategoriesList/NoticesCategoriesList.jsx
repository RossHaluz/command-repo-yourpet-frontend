import React from 'react';
import NoticeCategoryItem from './NoticeCategoryItem/NoticeCategoryItem';
import { nanoid } from '@reduxjs/toolkit';
import { CategoriesListWrapper } from './NoticesCategoriesList.styled';

const NoticesCategoriesList = ({ notices }) => {
  return (
    <>
      <CategoriesListWrapper>
        {notices.length > 0 &&
          notices.map(item => {
            const { name, dateOfBirth, breed, imgURL, comments, _id: noticeId } = item;

            return (
              <NoticeCategoryItem
                key={nanoid()}
                petInfo={{ name, dateOfBirth, breed, imgURL, comments, noticeId }}
              />
            );
          })}
      </CategoriesListWrapper>
    </>
  );
};

export default NoticesCategoriesList;
