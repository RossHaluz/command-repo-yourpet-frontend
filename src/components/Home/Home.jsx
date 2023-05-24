import { SectionHero } from './Home.styled';
import HomeImg from './HomeImg';
import HomeTitle from './HomeTitle';

const Home = () => {
  return (
    <SectionHero>
      <HomeTitle />
      <HomeImg />
    </SectionHero>
  );
};

export default Home;
