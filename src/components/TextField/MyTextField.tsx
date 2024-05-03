import { TextField, ThemeProvider, createTheme } from '@mui/material'
import { ChangeEvent, FC } from 'react'

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

interface IMyTextField {
  label: string
  type?: string
  inputProps?: object
  handleChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const MyTextField: FC<IMyTextField> = ({ label, type, inputProps, handleChange }) => {
  return (
    <ThemeProvider theme={theme}>
      <TextField
        sx={{ width: '100%' }}
        label={label}
        type={type}
        inputProps={inputProps}
        onChange={handleChange}
      />
    </ThemeProvider>
  )
}

export default MyTextField
