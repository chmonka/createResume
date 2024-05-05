import { createTheme } from '@mui/material'

const theme = createTheme({
  components: {
    MuiTypography:{
      styleOverrides: {
        root: {
          color: '#FFFFFF',
          '& .MuiTypography-root':{
            color: '#FFFFFF',
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            color: 'white',
            fontFamily: 'Arial',
            fontWeight: 'bold',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white',
              borderWidth: '2px',
            },
            '&.Mui-focused': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
                borderWidth: '3px',
              },
            },
            '&:hover:not(.Mui-focused)': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
            },
          },
          '& .MuiInputLabel-outlined': {
            color: 'white',
            fontWeight: 'bold',
            '&.Mui-focused': {
              color: 'white',
            },
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'none',
          },
          '& .MuiSelect-select': {
            borderColor: 'white',
            color: 'white',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
            },
          },
          '&:hover': {
            borderColor: 'white',
          },
          '&:before': {
            borderColor: 'white',
          },
          '&:after': {
            borderColor: 'white',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          '&:before': {
            borderColor: 'white',
          },
          '&:after': {
            borderColor: 'white',
          },
          '& .MuiInputBase-input': {
            fontSize: 16,
            color: 'white',
            borderColor: 'white',
            '&.Mui-focused': {
              '& .MuiSe-notchedOutline': {
                borderColor: 'white',
                borderWidth: '3px',
              },
            },
            '&:focus': {
              borderRadius: 4,
              borderColor: '2px solid white',
            },
            '&:hover': {
              borderColor: 'white',
            },
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': {
            border: 'px solid #FFFFFF',
            borderColor: '#FFFFFF',
            fontSize: 16,
            '&:focus': {
              borderColor: '#FFFFFF',
            },
          },
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },
  },
})


export default theme