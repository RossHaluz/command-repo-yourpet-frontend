import Home from 'components/Home/Home';
import { useEffect } from 'react';

const MainPage = () => {
  useEffect(() => {
    document.title = 'YourPet';
  });

  return <Home />;
};

export default MainPage;
