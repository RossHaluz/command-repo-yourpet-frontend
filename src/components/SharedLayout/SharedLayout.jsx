import Header from 'components/Header';

import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <div>
        <Suspense fallback={'Loading...'}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default SharedLayout;
