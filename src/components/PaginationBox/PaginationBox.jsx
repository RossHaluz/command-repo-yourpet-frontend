import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { PaginationStyled, PaginationItemStyled } from './PaginationBox.styled';
import { useMediaQuery, useTheme } from '@mui/material';

const PaginationBox = ({onChange, pagesCount}) => {
  const theme = useTheme();
  const size = useMediaQuery(theme.breakpoints.up('tablet')) ? 'medium' : 'small';

  return (
    <PaginationStyled onChange={onChange} count={pagesCount} size={size} color="primary" variant="outlined"
       renderItem={(item) => (
        <PaginationItemStyled
          slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
          {...item}
        />
      )}
    />
  )
}

export default PaginationBox;

