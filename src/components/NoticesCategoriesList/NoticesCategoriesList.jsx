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
            console.log('item', item);
            const {
              category,
              dateOfBirth,
              sex,
              imgURL,
              comments,
              place,
              favorite,
            } = item;

            return (
              <NoticeCategoryItem
                key={item._id}
                petInfo={{
                  category,
                  dateOfBirth,
                  sex,
                  imgURL,
                  comments,
                  place,
                  favorite,
                }}
              />
            );
          })}
      </CategoriesListWrapper>
    </>
  );
};

export default NoticesCategoriesList;
