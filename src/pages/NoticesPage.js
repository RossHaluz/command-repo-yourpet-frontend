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

const NoticesPage = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const notices = useSelector(selectNotices);
  const totalPages = useSelector(selectTotalPages);

  console.log(notices);

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
