import SharedLayout from 'components/SharedLayout';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Theme from 'components/Theme/Theme';
import { getCurrentUser } from 'redux/auth/operetions';
import { useDispatch } from 'react-redux';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute/PublicRoute';


const LoginPage = lazy(() => import('../../pages/LoginPage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const MainPage = lazy(() => import('../../pages/MainPage'));
const UserPage = lazy(() => import('../../pages/UserPage'));
const NoticesPage = lazy(() => import('../../pages/NoticesPage'));
const AddPetPage = lazy(() => import('../../pages/AddPetPage'));
const OurFriendsPage = lazy(() => import('pages/OurFriendsPage'));

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
          <Route path="login" element={<PublicRoute redirectTo='/user' component={<LoginPage/>}/>} />
          <Route path="register" element={<PublicRoute redirectTo='/user' component={<RegisterPage/>}/>}/>
          <Route path="user" element={<PrivateRoute redirectTo='/login' component={<UserPage/>}/>} />
          <Route path="add-pet" element={<PrivateRoute redirectTo='/login' component={<AddPetPage/>}/>} />
          <Route path="notices" element={<NoticesPage />} />
          <Route path="friends" element={<OurFriendsPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
