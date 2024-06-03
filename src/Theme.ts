import { createTheme } from '@mui/material'


const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },

  typography: {
    fontFamily: [
      "Montserrat",
      'sans-serif'
    ].join(','),
    h1: {
      fontWeight: 700,
      fontSize: '2rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h3: {
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    h4: {
      fontWeight: 400,
      fontSize: '1rem',
    },
    h5: {
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '.75rem',
    },
    subtitle2:{
      fontWeight: 500,
      fontSize: '1rem',
    },
    body1: {
      fontWeight: 400,
      fontSize: '0.85rem',
    },
    body2: {
      fontWeight: 500,
      fontSize: '0.7rem',
    },
    button: {
      fontWeight: 700,
      fontSize: '1rem',
    },
  },

  components: {
    MuiIcon: {
      styleOverrides: {
        root: {
          color: 'green[500]',
        },
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#000',
          '& .MuiTypography-root': {
            color: '#000',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&.MuiButton-root': {
            border: '2px #75a0fc solid',
            color: '#75a0fc',
          },
          '& :hover': {
            boxShadow: '0px 15px 5px -5px rgba(255, 255, 255, 1) inset',
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          backgroundColor: 'transparent',
          border: '2px solid #041b26',
          borderRadius: '10px',
          color: '#041b26',
          display: 'flex',
          flexDirection: 'column',
          marginTop: '10px',
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            color: '#041b26',
            "& .MuiInputLabel-root.Mui-error": {
              color: "#ff0000",
            },
            "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
              border: "3px solid #ff0000",
            },
            "& .MuiFormHelperText-root.Mui-error": {
              color: "#ff0000",
            },
          },
          '& .MuiInputLabel-outlined': {
            color: '#041b26',
            fontWeight: 'bold',

            '&.Mui-focused': {
              borderColor: 'black',
              color: '#041b26',
              fontWeight: 'bold',
            },
          },
        },
      },
    },
  },
})


export default theme