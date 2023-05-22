import Header from 'components/Header';

import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from '@mui/material';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <div>
        <Suspense fallback={'Loading...'}>
          <Container fixed sx={{ pr: '20px', pl: '20px' }}>
            <Outlet />
          </Container>
        </Suspense>
      </div>
    </>
  );
};

export default SharedLayout;
