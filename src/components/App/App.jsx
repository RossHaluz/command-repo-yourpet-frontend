import SharedLayout from 'components/SharedLayout';
import { lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { getCurrentUser } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute/PublicRoute';
import MobileMenuMain from 'components/MobileMenu/MobileMenu';
import Theme from 'theme/Theme';
import { Toaster } from 'react-hot-toast';

const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const MainPage = lazy(() => import('pages/MainPage'));
const UserPage = lazy(() => import('pages/UserPage'));
const NoticesPage = lazy(() => import('pages/NoticesPage'));
const AddPetPage = lazy(() => import('pages/AddPetPage'));
const OurFriendsPage = lazy(() => import('pages/OurFriendsPage'));
const ErrorPage = lazy(() => import('pages/ErrorPage'));
const NewsPage = lazy(() => import('pages/NewsPage'));

const App = () => {
  const dispatch = useDispatch();
  const [isOpenMenu, setIsOpenMenu] = useState();

  const openMobileMenu = () => {
    setIsOpenMenu(true);
  };

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={Theme}>
      <Toaster />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route
            path="login"
            element={
              <PublicRoute redirectTo="/user" component={<LoginPage />} />
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute redirectTo="/user" component={<RegisterPage />} />
            }
          />
          <Route
            path="user"
            element={
              <PrivateRoute redirectTo="/login" component={<UserPage />} />
            }
          />
          <Route
            path="add-pet"
            element={
              <PrivateRoute redirectTo="/login" component={<AddPetPage />} />
            }
          />
          <Route
            path="notices/"
            element={
              <PublicRoute redirectTo="sell" element={<NoticesPage />} />
            }
          />
          <Route path="notices/:category" element={<NoticesPage />} />

          <Route path="friends" element={<OurFriendsPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      {isOpenMenu && <MobileMenuMain isOpen={openMobileMenu} />}
    </ThemeProvider>
  );
};

export default App;
