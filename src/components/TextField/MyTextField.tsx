import { TextField, ThemeProvider, createTheme, TextFieldProps } from '@mui/material'
import { forwardRef } from 'react'

const theme = createTheme({
  components: {
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
  },
})

interface IMyTextField extends Omit<TextFieldProps<'outlined'>, 'variant'> {}

const MyTextField = forwardRef<HTMLInputElement, IMyTextField>((props, ref) => {
  return (
    <ThemeProvider theme={theme}>
      <TextField inputRef={ref} sx={{ width: '100%' }} {...props} />
    </ThemeProvider>
  )
})

export default MyTextField
