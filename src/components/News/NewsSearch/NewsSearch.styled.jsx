import { styled } from '@mui/system';

export const MuiBtnWrapper = styled('div')({
  border: 'none',
  backgroundColor: 'inherit',
  position: 'absolute',
  right: '10px',
  top: '12px',
  display: 'flex',
});
export const MuiBtnSearc = styled('button')({
  border: 'none',
  backgroundColor: 'inherit',
  cursor: 'pointer',
});
export const MuiBtnSearcCross = styled('button')({
  border: 'none',
  backgroundColor: 'inherit',
  cursor: 'pointer',
});
export const MuiFormDesctop = styled('form')({
  position: 'relative',
  maxWidth: '608px',
  margin: '40px auto',
});
export const MuiFormMobile = styled('form')({
  position: 'relative',
  maxWidth: '280px',
  margin: '24px auto 20px',
});

export const MuiInputDesctop = styled('input')({
  fontSize: '20px;',
  color: '#888888',
  width: '100%',
  maxWidth: '608px',
  height: '44px',
  borderRadius: '20px',
  boxShadow: '3px 8px 14px rgba(136, 198, 253, 0.19)',
  border: 'none',
  padding: '10px 20px',
  boxSizing: 'border-box',
  '&:focus-visible': {
    outline: 'unset',
  },
});
export const MuiInputMobile = styled('input')({
  color: '#888888',
  width: '100%',
  maxWidth: '608px',
  fontSize: '14px;',
  height: '44px',
  boxShadow: '3px 8px 14px rgba(136, 198, 253, 0.19)',
  border: 'none',
  borderRadius: '20px',
  padding: '13px 20px',
  boxSizing: 'border-box',
  '&:focus-visible': {
    outline: 'unset',
  },
});
