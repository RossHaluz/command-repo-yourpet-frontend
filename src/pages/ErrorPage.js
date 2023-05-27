import Error from 'components/Error/Error';
import { useEffect } from 'react';

const ErrorPage = () => {
  useEffect(() => {
    document.title = 'YourPet | Error';
  });

  return <Error />;
};

export default ErrorPage;
