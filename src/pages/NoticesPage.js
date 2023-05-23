import NoticesAddPetBtn from 'components/NoticesAddPetBtn/NoticesAddPetBtn';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesSearch from 'components/NoticesSearch';
import { fetchNotices } from 'redux/notices/operations';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  // selectIsLoading,
  selectNotices,
} from 'redux/notices/selectors';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { selectIsUserLogin } from 'redux/auth/selectors';
import ErrorPage from './ErrorPage';

const NoticesPage = () => {
  // const isLoading = useSelector(selectIsLoading);
  const notices = useSelector(selectNotices);
  const IsLogin = useSelector(selectIsUserLogin);
  const dispatch = useDispatch();
  const location = useLocation()

  useEffect(() => {
    document.title = 'YourPet | Find pet';
    const param = location.pathname.split('/')[2]
    dispatch(fetchNotices()); //param
  }, [dispatch, location]);

  return (
    <>
      <NoticesSearch />
      <NoticesCategoriesNav />
      <NoticesAddPetBtn />
      <Routes>
        <Route
          exact
          path="/"
          element={<NoticesCategoriesList notices={notices} />}
        />
        <Route
          path="/sell"
          element={<NoticesCategoriesList notices={notices} />}
        />
        <Route
          path="/lost-found"
          element={<NoticesCategoriesList notices={notices} />}
        />
        <Route
          path="/for-free"
          element={<NoticesCategoriesList notices={notices} />}
        />
        <Route
          path="/favorite"
          element={IsLogin ? <NoticesCategoriesList notices={notices} /> : <ErrorPage />}
        />
        <Route
          path="/own"
          element={IsLogin ? <NoticesCategoriesList notices={notices} /> : <ErrorPage />}
        />
      </Routes>
    </>
  );
};

export default NoticesPage;
