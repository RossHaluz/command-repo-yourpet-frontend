import React, {forwardRef} from 'react';
import NoticeCategoryItem from './NoticeCategoryItem/NoticeCategoryItem';
import { CategoriesListWrapper } from './NoticesCategoriesList.styled';

const NoticesCategoriesList = forwardRef(({ notices }, ref) => {
  return (
    <>
      <CategoriesListWrapper ref={ref}>
        {notices.length > 0 &&
          notices.map(item => <NoticeCategoryItem key={item._id} petInfo={item} />)
        }
      </CategoriesListWrapper>
    </>
  );
});

export default NoticesCategoriesList;
