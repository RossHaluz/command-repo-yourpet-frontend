import NoticesAddPetBtn from 'components/NoticesAddPetBtn/NoticesAddPetBtn';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesSearch from 'components/NoticesSearch';
import PaginationBox from 'components/PaginationBox/PaginationBox';
import { fetchNotices } from 'redux/notices/operations';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  // selectIsLoading,
  selectNotices, selectTotalPages,
} from 'redux/notices/selectors';

const NoticesPage = () => {
  // const isLoading = useSelector(selectIsLoading);
  const [page, setPage] = useState(1);
  const notices = useSelector(selectNotices);
  const totalPages = useSelector(selectTotalPages);
  const dispatch = useDispatch();

  console.log(notices);

  useEffect(() => {
    document.title = 'YourPet | Find pet';

    dispatch(fetchNotices(page));
  }, [dispatch, page]);

  const handlePageChange = (e, page) => {
    setPage(page);
  }

  return (
    <>
      <NoticesSearch />
      <NoticesCategoriesNav />
      <NoticesAddPetBtn />
      <NoticesCategoriesList notices={notices} />
      <PaginationBox onChange={handlePageChange} pagesCount={totalPages} />
    </>
  );
};

export default NoticesPage;
