import styled from '@emotion/styled';
import { ErrorMessage } from 'formik';

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 95px;
  gap: 12px;

  @media (min-width: 768px) {
    margin-bottom: 137px;
  }
`;

export const Label = styled.label`
  padding: 8px 16px;
  width: fit-content;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  line-height: calc(19 / 14);
  border-radius: 40px;

  background-color: ${props => (props.checked ? '#54adff' : '#CCE4FB')};
  color: ${props => (props.checked ? '#FEF9F9' : '#54ADFF')};

  > input[type='radio'] {
    visibility: hidden;
    height: 0;
    width: 0;
  }
`;

export const Message = styled(ErrorMessage)`
  // position: absolute;
  bottom: -15px;
  left: 20px;
  font-size: 12px;
  line-height: calc(16 / 12);
  color: #f43f5e;
`;
