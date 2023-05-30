import styled from '@emotion/styled';
import { CiEdit, CiLogout } from 'react-icons/ci';
import { BsCamera } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';
import { AiOutlineCheck } from 'react-icons/ai';
import { Field } from 'formik';
import { Typography } from '@mui/material';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 40px 0;

  @media screen and (min-width: 768px) {
    margin: 35px 0 40px 0;
  }

  @media screen and (min-width: 1280px) {
    display: inline-flex;

    margin: 35px 32px 0 0;
  }
`;

export const Title = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('tablet')]: {
    fontSize: '24px',
    margin: '0 0 18px 0',
    fontWeight: theme.typography.fontWeightBold,
  },
  [theme.breakpoints.up('tablet')]: {
    fontSize: '28px',
    margin: '0 0 24px 0',
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 517px;
  padding: 20px 8px 20px 8px;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;
  background-color: #fff;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap-reverse;

    width: 704px;
    height: 268px;
    padding: 20px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
    height: 520px;

    padding: 20px 17px 0 17px;
  }
`;

export const PhotoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PhotoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

export const Img = styled.img`
  display: block;
  width: 182px;
  height: 182px;
  border-radius: 40px;
  background-color: #ebebeb;
  object-fit: cover;
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
  display: flex;
  align-items: center;
  margin-right: 5px;
`;

export const IconWrapperCross = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;

  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.04em;

  @media screen and (min-width: 768px) {
    width: 355px;

    font-weight: 600;
    font-size: 18px;
    letter-spacing: 0.04em;
  }
`;

export const Input = styled(Field)`
  width: 190px;
  height: 28px;

  padding: 0 40px 0 15px;
  border: 1px solid #54adff;
  border-radius: 20px;
  outline: none;
  background-color: #fff;

  font-size: 12px;
  letter-spacing: 0.04em;
  color: #000000;

  &.editing {
    border: 1px solid #20e820;
  }

  @media screen and (min-width: 768px) {
    width: 255px;
    height: 32px;

    font-size: 16px;
    letter-spacing: 0.04em;
  }
`;

export const DivLogOut = styled.div`
  display: flex;
  margin-top: 25px;

  @media screen and (min-width: 768px) {
    margin-top: 15px;
  }
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

export const IconLogOut = styled(CiLogout)`
  margin-right: 10px;

  color: #54adff;
  font-size: 25px;
`;

export const IconCamera = styled(BsCamera)`
  margin-right: 10px;
  color: #54adff;
  font-size: 18px;
`;

export const IconEdit = styled(CiEdit)`
  position: absolute;
  left: 88%;

  font-size: 20px;
  cursor: pointer;
  color: #54adff;

  @media screen and (min-width: 768px) {
    left: 90%;
    font-size: 23px;
  }

  :hover {
    color: red;
  }
`;

export const DivIconCheck = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  left: 89%;

  @media screen and (min-width: 768px) {
    left: 90.5%;
  }
`;

export const IconCheck = styled(AiOutlineCheck)`
  font-size: 18px;

  cursor: pointer;
  color: #20e820;

  @media screen and (min-width: 768px) {
    font-size: 21px;
  }
`;

export const IconCross = styled(RxCross1)`
  font-size: 18px;

  cursor: pointer;
  color: #e82d20;
`;
