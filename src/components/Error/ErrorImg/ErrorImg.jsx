import error_sm_1x from '../img/sm/error-sm-1x.png';
import error_sm_2x from '../img/sm/error-sm-2x.png';

import error_mb_1x from '../img/md/error-md-1x.png';
import error_mb_2x from '../img/md/error-md-2x.png';

import error_lg_1x from '../img/lg/error-lg-1x.png';
import error_lg_2x from '../img/lg/error-lg-2x.png';

import { Img } from './ErrorImg.styled';

const ErrorImg = () => {
  return (
    <Img
      srcSet={`${error_sm_1x} 280w, ${error_sm_2x} 560w, ${error_mb_1x} 704w, ${error_mb_2x} 1408w, ${error_lg_1x} 822w ${error_lg_2x} 1644w`}
      src={error_sm_1x}
      alt="Error img"
      sizes="(min-width: 1280px) 1644px, (min-width: 1280px) 822px, (min-width: 768px) 1408px, (min-width: 768px) 704px, (min-width: 480px) 560px, (min-width: 480px) 280px, 100vw"
    />
  );
};

export default ErrorImg;
