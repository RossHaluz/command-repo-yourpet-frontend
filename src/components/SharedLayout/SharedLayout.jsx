import Header from 'components/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from '@mui/material';
import { PageTitle } from 'components/PageTitle/PageTitle.styled';
import { Section } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Section>
        <Suspense fallback={<PageTitle>Loading...</PageTitle>}>
          <Container fixed>
            <Outlet />
          </Container>
        </Suspense>
      </Section>
    </>
  );
};

export default SharedLayout;
