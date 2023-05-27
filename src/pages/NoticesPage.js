import NoticesAddPetBtn from 'components/NoticesAddPetBtn/NoticesAddPetBtn';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesSearch from 'components/NoticesSearch';
import PaginationBox from 'components/PaginationBox/PaginationBox';
import { fetchNoticesByCategory } from 'redux/notices/operations';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { PageTitle } from 'components/PageTitle/PageTitle.styled';
import Box from '@mui/material/Box';

import { selectNotices, selectTotalPages } from 'redux/notices/selectors';

const NoticesPage = () => {
  const [page, setPage] = useState(1);
  const [searchParam, useSearchParam] = useState('')  // i am search params and should me given to dispach function
  const dispatch = useDispatch();
  const notices = useSelector(selectNotices);
  const totalPages = useSelector(selectTotalPages);

  const params = useParams();
  const category = params.category;

  // console.log(notices);

  function formatPath(path) {
    if (path === 'lost-found') return 'lost/found';
    else return path.split('-').join(' ');
  }

 



  useEffect(() => {
    document.title = 'YourPet | Find pet';
    console.log(' searchParam',  searchParam)
   
    dispatch(fetchNoticesByCategory(formatPath(category)));
  }, [dispatch, page, category,searchParam]);

  const handlePageChange = (e, page) => {
    setPage(page);
  };

  return (
    <>
      <PageTitle>Find your favorite pet</PageTitle>
      <NoticesSearch handleSearch={useSearchParam} />
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
