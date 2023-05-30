import styled from '@emotion/styled';
import mb_bg_1x from './bg-img/md/mb-bg-1x.png';
import mb_bg_2x from './bg-img/md/mb-bg-2x.png';

import tb_bg_1x from './bg-img/tb/tb-bg-1x.png';
import tb_bg_2x from './bg-img/tb/tb-bg-2x.png';

import lg_bg_1x from './bg-img/lg/lg-bg-1x.png';
import lg_bg_2x from './bg-img/lg/lg-bg-2x.png';

export const Section = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${mb_bg_1x});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${mb_bg_2x});
  }

  @media (min-width: 768px) {
    background-image: url(${tb_bg_1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${tb_bg_2x});
    }
  }

  @media (min-width: 1280px) {
    background-image: url(${lg_bg_1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${lg_bg_2x});
    }
  }
`;
