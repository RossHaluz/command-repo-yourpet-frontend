import NoticesAddPetBtn from 'components/NoticesAddPetBtn/NoticesAddPetBtn';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesSearch from 'components/NoticesSearch';
import PaginationBox from 'components/PaginationBox/PaginationBox';
import { fetchNoticesByCategory } from 'redux/notices/operations';
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { PageTitle } from 'components/PageTitle/PageTitle.styled';
import Box from '@mui/material/Box';

import { selectNotices, selectTotalPages } from 'redux/notices/selectors';

const NoticesPage = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const categoriesListRef = useRef(null);
  const dispatch = useDispatch();
  const notices = useSelector(selectNotices);
  const totalPages = useSelector(selectTotalPages);

  const params = useParams();
  const category = params.category;

  useEffect(() => {
    document.title = 'YourPet | Find pet';

    if (category !== 'favourite' && category !== 'own') {
      dispatch(
        fetchNoticesByCategory({
          category,
          search,
          page,
          limit: 8,
        })
      );
    }
  }, [dispatch, page, category, search]);

  const handleCategoryChange = () => {
    setPage(1)
  }

  const handlePageChange = (e, page) => {
    categoriesListRef.current.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });

    setPage(page);
  };

  const handleNoticeSearch = search => {
    setPage(1);
    setSearch(search);
  };

  return (
    <>
      <PageTitle>Find your favorite pet</PageTitle>

      <NoticesSearch handleSearch={handleNoticeSearch} />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <NoticesCategoriesNav onCategoryChange={handleCategoryChange}/>
        <NoticesAddPetBtn />
      </Box>

      <NoticesCategoriesList ref={categoriesListRef} notices={notices} />

      {totalPages > 1 && (
        <PaginationBox page={page} onChange={handlePageChange} pagesCount={totalPages} />
      )}
    </>
  );
};

export default NoticesPage;
