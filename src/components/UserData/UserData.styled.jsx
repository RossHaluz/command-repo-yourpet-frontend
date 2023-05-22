import styled from '@emotion/styled';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';

// import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 395px;
  height: 520px;
  padding: 0 17px 0 17px;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;
  background-color: #fff;
`;

export const Title = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('tablet')]: {
    fontSize: '24px',
    fontWeight: theme.typography.fontWeightBold,
  },
  [theme.breakpoints.up('tablet')]: {
    fontSize: '28px',
    margin: '70px 0 24px 0',
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export const Photo = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 15px 0;
`;

export const Img = styled.img`
  display: block;
  max-width: 182px;
  height: auto;
  border-radius: 40px;
  background-color: #ccc;
`;

export const EditPhoto = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  background-color: #fff;
  padding: 0;
  margin-bottom: 25px;

  cursor: pointer;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0.04em;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.04em;
`;

export const Input = styled.input`
  width: 255px;
  height: 32px;
  padding: 0 15px 0 15px;
  border: 1px solid #54adff;
  border-radius: 20px;
  outline: none;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
`;

export const ButtonLogOut = styled.button`
  display: flex;
  align-items: center;

  border: none;
  background-color: #fff;
  padding: 0;

  cursor: pointer;
  color: #888888;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
`;
export const IconCamera = styled(CameraAltOutlinedIcon)`
  margin-right: 10px;
  color: #54adff;
  font-size: 18px;
`;

export const IconLogOut = styled(LogoutOutlinedIcon)`
  transform: rotate(180deg);
  margin-right: 10px;

  color: #54adff;
`;
export const IconEdit = styled(DriveFileRenameOutlineOutlinedIcon)`
  position: absolute;
  left: 90%;

  cursor: pointer;
  color: #54adff;
`;
