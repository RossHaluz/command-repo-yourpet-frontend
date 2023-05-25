import styled from '@emotion/styled';
import { CiEdit, CiLogout } from 'react-icons/ci';
import { BsCamera } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';
import { AiOutlineCheck } from 'react-icons/ai';
import { Field, Form } from 'formik';
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
  width: 182px;
  height: 182px;
  border-radius: 40px;
  background-color: #ebebeb;
`;

export const DivEditPhoto = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 25px;
`;

export const EditButtonPhoto = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 120px;
  height: 25px;

  border: none;
  background-color: #fff;
  padding: 0;

  cursor: pointer;
  font-size: 12px;
  letter-spacing: 0.04em;
`;

export const IconWrapperCheck = styled.div`
  margin-right: 5px;
`;

export const IconWrapperCross = styled.div`
  margin-left: 5px;
`;

export const MyForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.04em;
`;

export const Input = styled(Field)`
  width: 255px;
  height: 32px;
  padding: 0 40px 0 15px;
  border: 1px solid #54adff;
  border-radius: 20px;
  outline: none;
  background-color: #fff;

  font-size: 16px;
  letter-spacing: 0.04em;

  &.editing {
    border: 1px solid #20e820;
  }

  ::placeholder {
    color: #000000;
  }
`;

export const DivLogOut = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const ButtonLogOut = styled.button`
  display: flex;
  align-items: center;

  border: none;
  background-color: #fff;
  padding: 0;

  cursor: pointer;
  color: #888888;
  font-size: 16px;
  letter-spacing: 0.04em;
`;

export const IconCamera = styled(BsCamera)`
  margin-right: 10px;
  color: #54adff;
  font-size: 18px;
`;

export const IconLogOut = styled(CiLogout)`
  margin-right: 10px;

  color: #54adff;
  font-size: 25px;
`;

export const IconEdit = styled(CiEdit)`
  position: absolute;
  left: 90%;

  font-size: 25px;
  cursor: pointer;
  color: #54adff;

  :hover {
    color: red;
  }
`;

export const DivIconCheck = styled.div`
  position: absolute;
  left: 90.5%;
`;

export const IconCheck = styled(AiOutlineCheck)`
  font-size: 23px;

  cursor: pointer;
  color: #20e820;
`;

export const IconCross = styled(RxCross1)`
  font-size: 18px;

  cursor: pointer;
  color: #e82d20;
`;
