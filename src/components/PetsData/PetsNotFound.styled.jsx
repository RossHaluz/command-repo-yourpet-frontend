import styled from '@emotion/styled';

export const Notification = styled.div`
  width: 280px;

  border-radius: 20px;
  padding: 25px;
  box-shadow: 3px 8px 8px rgba(136, 198, 253, 0.19);
  background-color: #ffffff;

  text-align: center;

  @media screen and (min-width: 768px) {
    width: 703px;
  }

  @media screen and (min-width: 1280px) {
    width: 821px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  font-family: 'Manrope', 'Helvetica', 'Arial', sans-serif;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
