import { styled } from '@mui/material/styles';
import { Pagination, PaginationItem } from '@mui/material';

export const PaginationStyled = styled(Pagination)(({ theme }) => ({
  margin: '40px auto 0',
  padding: '8px 0px',
  background: '#FEF9F9',
  justifyContent: 'center',
  boxShadow: '3px 8px 14px rgba(136, 198, 253, 0.19)',
  borderRadius: '45px',
  width: '280px',
  [theme.breakpoints.up('tablet')]: {
    margin: '60px auto 0',
    padding: '8px 12px',
    width: '390px',
  },
  '& .MuiPagination-ul': {
    justifyContent: 'center',
  }
}));

export const PaginationItemStyled = styled(PaginationItem)(({ theme }) => ({
  borderColor: '#CCE4FB',
  color: '#CCE4FB',
  '&.Mui-selected': {
    backgroundColor: '#54ADFF',
    color: '#FFFFFF'
  },
  '&.Mui-selected:hover': {
    backgroundColor: '#54ADFF',
    color: '#FFFFFF'
  },
  '& :first-of-type': {
    color: '#54ADFF',
  },
}));