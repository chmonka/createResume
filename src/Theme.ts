import { createTheme } from '@mui/material'

const theme = createTheme({
  components: {
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

    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          backgroundColor: 'transparent',
          border: '2px solid #034078',
          borderRadius: '10px',
          color: '#bfdbf7',
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
            color: '#034078',
            fontFamily: 'Arial',
            fontWeight: 'bold',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#034078',
              color: '#034078',
              borderWidth: '2px',
            },
            '&.Mui-focused': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#2284e0',
                color: '#034078',
                borderWidth: '3px',
              },
            },
            '&:hover:not(.Mui-focused)': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#034078',
                color: '#034078',
              },
            },
          },
          '& .MuiInputLabel-outlined': {
            color: '#034078',
            fontWeight: 'bold',
            '&.Mui-focused': {
              color: '#2284e0',
              fontWeight: 'bold',
            },
          },
        },
      },
    },
  },
})


export default theme