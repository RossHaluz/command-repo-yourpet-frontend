import SharedLayout from 'components/SharedLayout';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Theme from 'components/Theme/Theme';
import { getCurrentUser } from 'redux/auth-end/operetions';
import { useDispatch } from 'react-redux';


const LoginPage = lazy(() => import('../../pages/LoginPage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const MainPage = lazy(() => import('../../pages/MainPage'));
const UserPage = lazy(() => import('../../pages/UserPage'));
const NoticesPage = lazy(() => import('../../pages/NoticesPage'));
const AddPetPage = lazy(() => import('../../pages/AddPetPage'));

const App = () => {
const dispatch = useDispatch()

useEffect(() => {
dispatch(getCurrentUser())
}, [dispatch])

  return (
    <ThemeProvider theme={Theme}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="add-pet" element={<AddPetPage />} />
          <Route path="notices" element={<NoticesPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
