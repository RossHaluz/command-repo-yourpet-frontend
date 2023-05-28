import { styled } from '@mui/system';

export const StyledCardWrapper = styled('div')`
  position: relative;
  min-width: 280px;
  max-width: 286px;
  height: 456px;
  border-radius: 0 0 30px 30px;
  box-sizing: border-box;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
`;

export const StyledCardImgWrapper = styled('div')`
  position: relative;
  min-width: 280px;
  width: 286px;
  border-radius: 14px 14px;
  box-sizing: border-box;
  img {
    min-width: 280px;
    width: 286px;
    height: 288px;
    object-fit: cover;
  }
`;

export const BottomButtonWrapper = styled('div')`
  position: absolute;
  top: 248px;
  display: flex;
  gap: 12px;
  left: 50%;
  transform: translateX(-50%);
`;

export const RightButtonWrapper = styled('div')`
  top: 12px;
  right: 12px;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledCardButtonBottom = styled('button')`
  width: 80px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 6px 0;
  background-color: #cce4fb;
  color: #111111;
  font-family: 'Manrope', sans-serif;
  font-style: 'SemiBold';
  font-size: 12px;
  line-height: 16px;
  line-height: 100%;
  text-align: Left;
  vertical-align: Center;
  letter-spacing: 4%;
  border: none;
  border-radius: 15px;
`;
export const StyledCardLinkBottom = styled('a')`
  width: 80px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 6px 0;
  background-color: #cce4fb;
  color: #111111;
  font-family: 'Manrope', sans-serif;
  font-style: 'SemiBold';
  font-size: 12px;
  line-height: 16px;
  line-height: 100%;
  text-align: Left;
  vertical-align: Center;
  letter-spacing: 4%;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    background: linear-gradient(to bottom, #419ef1 0%, #9bd0ff 100%);
    color: white;
    svg {
      filter: brightness(0) invert(1);
    }
  }
`;
export const StyledCardButtonRight = styled('button')`
  background-color: #cce4fb;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  &:hover {
    background: linear-gradient(to bottom, #419ef1 0%, #9bd0ff 100%);
    color: white;
    svg {
      filter: brightness(0) invert(1);
    }
  }
`;

export const CategoryBadge = styled('div')`
  top: 16px;
  left: 0;
  position: absolute;
  line-height: 19px;
  padding: 11px 17px;
  text-align: center;
  vertical-align: middle;
  background-color: #cce4fb;
  color: #111111;
  font-family: 'Manrope', sans-serif;
  font-style: 'SemiBold';
  font-size: 14px;
  line-height: 10px;
  border-radius: 0 20px 20px 0;
  min-width: 126px;
`;

export const LearnMore = styled('button')`
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  bottom: 22px;
  width: 248px;
  background-color: white;
  color: #54adff;
  border: 2px solid #54adff;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Manrope', sans-serif;
  font-style: 'SemiBold';
  font-size: 16px;
  line-height: 22px;
  gap: 12px;
  padding: 9px 0 9px 0;
  cursor: pointer;
  svg {
    display: none;
  }
  &:hover {
    border: none;
    background: linear-gradient(to bottom, #419ef1 0%, #9bd0ff 100%);
    color: white;
    svg {
      filter: brightness(0) invert(1);
      display: inline-block;
    }
  }
`;

export const StyledComent = styled('p')`
  margin: 20px;
  font-family: 'Manrope', sans-serif;
  font-style: 'Bold';
  font-size: 24px;
  line-height: 33px;
`;
