import SharedLayout from 'components/SharedLayout';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Theme from 'components/Theme/Theme';


const LoginPage = lazy(() => import('../../pages/LoginPage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const MainPage = lazy(() => import('../../pages/MainPage'));

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
