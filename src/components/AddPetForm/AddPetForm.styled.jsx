import styled from '@emotion/styled';
import { Form } from 'formik';

export const AddPetFormWrapper = styled.div`
  margin: 0 auto;
  max-width: 458px;
  padding: 20px 8px;

  background-color: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;

  @media (min-width: 768px) {
    padding: 20px 32px;
    max-width: ${props =>
      props.category !== 'my-pet' && props.step === 2 ? '822px' : '458px'};
  }
`;

export const PetFormTitle = styled.h1`
  margin-bottom: 24px;
  margin-left: 20px;

  font-weight: 500;
  font-size: 20px;
  line-height: calc(27 / 20);
  color: #111111;

  @media (min-width: 768px) {
    text-align: ${props =>
      props.category !== 'my-pet' && props.step === 2 ? 'center' : 'left'};
`;

export const StepsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: ${props => (props.category === 'your pet' ? '40px' : '36px')};

  @media (min-width: 768px) {
    gap: 16px;
  }
`;

export const Step = styled.li`
  position: relative;
  width: 80px;
  font-size: 10px;
  line-height: calc(14 / 10);
  font-weight: 500;
  color: ${props => {
    if (props.step === 0) {
      return props.index === 0 ? '#54ADFF' : '#888888';
    } else if (props.step === 1) {
      return props.index === 0
        ? '#00C3AD'
        : props.index === 1
        ? '#54ADFF'
        : '#888888';
    } else if (props.step === 2) {
      return props.index < 2 ? '#00C3AD' : '#54ADFF';
    }
  }};

  @media (min-width: 768px) {
    width: 120px;
    font-size: 16px;
    line-height: calc(26 / 26);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 100%;
    height: 8px;
    border-radius: 8px;
    background-color: ${props => {
      if (props.step === 0) {
        return props.index === 0 ? '#54ADFF' : '#CCE4FB';
      } else if (props.step === 1) {
        return props.index === 0
          ? '#00C3AD'
          : props.index === 1
          ? '#54ADFF'
          : '#CCE4FB';
      } else if (props.step === 2) {
        return props.index < 2 ? '#00C3AD' : '#54ADFF';
      }
    }};
  }
`;

export const FormWrap = styled(Form)`
  // display: flex;
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    gap: 32px;
  }
`;

export const ButtonFilled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 248px;
  height: 40px;

  font-weight: 700;
  font-size: 16px;
  line-height: calc(22 / 16);
  color: #fef9f9;
  letter-spacing: 0.04em;

  background-color: #54adff;
  border: none;
  border-radius: 40px;
  cursor: pointer;

  disabled: true;

  :disabled {
    opacity: 0.5;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 94px;

  font-weight: 700;
  font-size: 16px;
  line-height: calc(22 / 16);
  letter-spacing: 0.04em;

  background-color: transparent;
  border: none;
  color: #54adff;
  cursor: pointer;
`;
