import cat_sm_1x from '../img/sm/cat-sm-1x.webp';
import cat_sm_2x from '../img/sm/cat-sm-2x.webp';
import cat_md_1x from '../img/md/cat-md-1x.webp';
import cat_md_2x from '../img/md/cat-md-2x.webp';

import dog_sm_1x from '../img/sm/dog-sm-1x.webp';
import dog_sm_2x from '../img/sm/dog-sm-2x.webp';
import dog_md_1x from '../img/md/dog-md-1x.webp';
import dog_md_2x from '../img/md/dog-md-2x.webp';

import dog2_sm_1x from '../img/sm/doggy-sm-1x.webp';
import dog2_sm_2x from '../img/sm/doffy-sm-2x.webp';
import dog2_md_1x from '../img/md/doggy-md-1x.webp';
import dog2_md_2x from '../img/md/doggy-md-2x.webp';

import { CatImg, DogImg, DoggyImg, ImageWrapper } from './HomeImg.styled';

const HomeImg = () => {
  return (
    <ImageWrapper>
      <CatImg
        srcSet={`${cat_sm_1x} 219w, ${cat_sm_2x} 438w, ${cat_md_1x} 362w, ${cat_md_2x} 724w`}
        src={cat_sm_1x}
        sizes="(max-width: 767px) 219px, (max-width: 767px) 438px, (min-width: 768px) 362px, (min-width: 768px) 724px, 100vw"
        alt="Background img"
      />

      <DogImg
        srcSet={`${dog_sm_1x} 219w, ${dog_sm_2x} 438w, ${dog_md_1x} 532w, ${dog_md_2x} 1064w`}
        src={dog_sm_1x}
        sizes="(max-width: 767px) 219px, (max-width: 768px) 438px, (min-width: 768px) 532px, (min-width: 768px) 1064px, 100vw"
        alt="Background img"
      />

      <DoggyImg
        srcSet={`${dog2_sm_1x} 219w, ${dog2_sm_2x} 438w, ${dog2_md_1x} 426w, ${dog2_md_2x} 852w`}
        src={dog2_sm_1x}
        sizes="(max-width: 767px) 219px, (max-width: 768px) 438px, (min-width: 768px) 426px, (min-width: 768px) 852px, 100vw"
        alt="Background img"
      />
    </ImageWrapper>
  );
};

export default HomeImg;
