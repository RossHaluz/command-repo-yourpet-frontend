import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    "fontFamily": `"Manrope", "Helvetica", "Arial", sans-serif`,
    "fontSize": 14,
    "letterSpacing": "0.04em",
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500,
    "fontWeightBold": 700,
  },

  breakpoints: {
    values: {
      mobile: 320,
      tablet: 768,
      desktop: 1280,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '40px',
          padding: '10px 0'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#54ADFF',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#54ADFF',
          },
          borderRadius: '40px',
        },
      }
    }
  }
});

theme.typography.h1 = {
  [theme.breakpoints.down('tablet')]: {
    fontSize: '24px',
    fontWeight: theme.typography.fontWeightBold,
  },
  [theme.breakpoints.up('tablet')]: {
    fontSize: '48px',
    fontWeight: theme.typography.fontWeightBold,
  },
}

export default theme;