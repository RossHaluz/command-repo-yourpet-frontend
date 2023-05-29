import Home from 'components/Home/Home';
import { useEffect } from 'react';

const MainPage = () => {
  useEffect(() => {
    document.title = 'YourPet | Main';
  });

  return <Home />;
};

export default MainPage;
