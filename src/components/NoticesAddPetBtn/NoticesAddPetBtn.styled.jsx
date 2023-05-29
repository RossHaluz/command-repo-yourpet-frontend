import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';

export const AddPetStyledLink = styled(NavLink)`
  box-sizing: border-box;
  color: #fef9f9;
  background: #54adff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 40px;
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  align-items: center;
  letter-spacing: 0.04em;
  gap: 15px;
  cursor: pointer;
  border: none;

  &:hover {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }
`;
export const AddPetStyledBtn = styled('button')`
  box-sizing: border-box;
  color: #fef9f9;
  background: #54adff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 40px;
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  align-items: center;
  letter-spacing: 0.04em;
  gap: 15px;
  cursor: pointer;
  border: none;

  &:hover {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }
`;
export const AddPetStyledLinkMobile = styled(NavLink)`
  box-sizing: border-box;
  position: fixed;
  top: 460px;
  right: 20px;
  width: 80px;
  height: 80px;
  color: #fef9f9;
  background: #54adff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 50%;
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16 px;
  align-items: center;
  letter-spacing: 0.04em;
  cursor: pointer;
  border: none;
  gap: 8px;
  z-index: 99;
  &:hover {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }
`;

export const AddPetStyledBtnMobile = styled('button')`
  box-sizing: border-box;
  position: fixed;
  top: 460px;
  right: 20px;
  width: 80px;
  height: 80px;
  color: #fef9f9;
  background: #54adff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 50%;
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16 px;
  align-items: center;
  letter-spacing: 0.04em;
  cursor: pointer;
  border: none;
  gap: 8px;
  z-index: 99;
  
  &:hover {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }
`;
