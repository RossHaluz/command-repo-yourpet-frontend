import styled from '@emotion/styled';
import { Field } from 'formik';

export const MoreInfoWrapper = styled.div`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    display: ${props =>
      props.category !== 'my-pet' && props.step === 2 ? 'flex' : 'block'};
    gap: 45px;
`;

export const TheSexWrapper = styled.div`
  position: relative;
  margin-bottom: 16px;

  > div {
    display: flex;
  }

  > p {
    font-weight: 500;
    font-size: 14px;
    line-height: calc(19 / 14);
    color: #111111;
  }

  > span {
    position: absolute;
    bottom: -10px;
    left: 20px;
    font-size: 12px;
    line-height: calc(16 / 12);
    color: #f43f5e;
  }
`;

export const SexLabel = styled.label`
  display: flex;
  align-items: center;

  font-weight: 400;
  font-size: 16px;
  line-height: calc(24 / 16);
  letter-spacing: 0.04em;
  color: ${props => (props.checked ? '#00C3AD' : '#888888')};
  cursor: pointer;

  > input {
    visibility: hidden;
    height: 0;
    width: 0;
  }
`;

export const PhotoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    display: ${props =>
      props.category !== 'my-pet' && props.step === 2 ? 'block' : 'flex'};
  }
`;

export const PhotoText = styled.p`
  width: 81px;
  font-weight: 500;
  font-size: 14px;
  line-height: calc(19 / 14);
  color: #111111;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: calc(26 / 20);
    width: ${props =>
      props.category !== 'my-pet' && props.step === 2 ? '200px' : '114px'};
    margin-bottom: ${props =>
      props.category !== 'my-pet' && props.step === 2 ? '8px' : '0'};
  }
`;

export const AddLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 112px;
  height: 112px;
  background-color: #cce4fb;
  border-radius: 20px;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 182px;
    height: 182px;
    border-radius: 40px;
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    width: ${props =>
      props.category !== 'my-pet' && props.step === 2 ? '395px' : '100%'};
`;

export const Label = styled.label`
  position: relative;
  font-weight: 500;
  font-size: 14px;
  line-height: calc(19 / 14);
  color: #111111;

  > span {
    position: absolute;
    bottom: -15px;
    left: 20px;
    font-size: 12px;
    line-height: calc(16 / 12);
    color: #f43f5e;
  }
`;

export const Input = styled(Field)`
  width: 100%;
  padding: 9px 15px;
  margin-top: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;

  outline: none;
  border-radius: 40px;
  border: 1px solid #54adff;
`;

export const CommentsLabel = styled.label`
  display: block;
  color: #111111;
  font-weight: 500;
  font-size: 14px;
  line-height: calc(19 / 14);
`;

export const TextArea = styled(Field)`
  width: 100%;
  height: 112px;
  padding: 9px 15px;
  margin-top: 4px;

  color: #888888
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.04em;

  resize: none;
  outline: none;
  border-radius: 20px;
  border: 1px solid #54adff;
`;
