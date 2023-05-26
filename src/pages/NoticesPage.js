import NoticesAddPetBtn from 'components/NoticesAddPetBtn/NoticesAddPetBtn';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesSearch from 'components/NoticesSearch';
import PaginationBox from 'components/PaginationBox/PaginationBox';
import { fetchNotices } from 'redux/notices/operations';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { PageTitle } from 'components/PageTitle/PageTitle.styled';
import Box from '@mui/material/Box';

import { selectNotices, selectTotalPages } from 'redux/notices/selectors';
import { useLocation } from 'react-router-dom';
// import { selectIsUserLogin } from 'redux/auth/selectors';
// import ErrorPage from './ErrorPage';

const NoticesPage = () => {
  const [page, setPage] = useState(1);
  const notices = useSelector(selectNotices);
  // const IsLogin = useSelector(selectIsUserLogin);
  const totalPages = useSelector(selectTotalPages);

  // console.log(notices);

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    document.title = 'YourPet | Find pet';
    // const param = location.pathname.split('/')[2];
    dispatch(fetchNotices()); //param
  }, [dispatch, location]);

  useEffect(() => {
    document.title = 'YourPet | Find pet';

    dispatch(fetchNotices(page));
  }, [dispatch, page]);

  const handlePageChange = (e, page) => {
    setPage(page);
  };

  return (
    <>
      <PageTitle>Find your favorite pet</PageTitle>
      <NoticesSearch />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <NoticesCategoriesNav />
        <NoticesAddPetBtn />
      </Box>

      <NoticesCategoriesList notices={notices} />
      <PaginationBox onChange={handlePageChange} pagesCount={totalPages} />
    </>
  );
};

export default NoticesPage;
