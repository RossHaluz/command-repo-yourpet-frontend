import Header from 'components/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from '@mui/material';
import { PageTitle } from 'components/PageTitle/PageTitle.styled';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <div>
        <Suspense fallback={<PageTitle>Loading...</PageTitle>}>
          <Container fixed>
            <Outlet />
          </Container>
        </Suspense>
      </div>
    </>
  );
};

export default SharedLayout;
