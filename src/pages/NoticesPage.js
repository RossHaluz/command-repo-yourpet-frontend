
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesSearch from 'components/NoticesSearch';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const NoticesPage = () => {
  return (
    <>
      <NoticesSearch />
      <NoticesCategoriesNav/>
    </>
  )
}

export default NoticesPage;
