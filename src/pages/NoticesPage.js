import NoticesSearch from 'components/NoticesSearch';
import { fetchNotices } from 'redux/notices/operations';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  // selectIsLoading,
  selectNotices,
} from 'redux/notices/selectors';
import NoticesCategoriesList from 'components/NoticesCategoriesList';

const NoticesPage = () => {
  // const isLoading = useSelector(selectIsLoading);
  const notices = useSelector(selectNotices);
  const dispatch = useDispatch();

  // console.log(notices);

  useEffect(() => {
    document.title = 'YourPet | Find pet';

    dispatch(fetchNotices());
  }, [dispatch]);

  return (
    <>
      <NoticesSearch />
      <NoticesCategoriesList notices={notices} />
    </>
  );
};

export default NoticesPage;