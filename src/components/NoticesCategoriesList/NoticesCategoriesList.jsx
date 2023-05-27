import React from 'react';
import NoticeCategoryItem from './NoticeCategoryItem/NoticeCategoryItem';
import { CategoriesListWrapper } from './NoticesCategoriesList.styled';

const NoticesCategoriesList = ({ notices }) => {
  return (
    <>
      <CategoriesListWrapper>
        {notices.length > 0 &&
          notices.map(item => 
            <NoticeCategoryItem
                key={item._id}
                petInfo={item}
              />
          )}
      </CategoriesListWrapper>
    </>
  );
};

export default NoticesCategoriesList;
