import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  ThemeProvider,
  createTheme,
} from '@mui/material'
import { FC } from 'react'

const theme = createTheme({
  components: {
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

interface ImyFormControlProps {
  inputLabel?: string
  value: string
  handleChange: (event: SelectChangeEvent<string>) => void
  array: string[] | number[]
}

const MyFormControl: FC<ImyFormControlProps> = ({ inputLabel, handleChange, value, array }) => {
  return (
    <ThemeProvider theme={theme}>
      <FormControl sx={{ border: 'none', width: '100%' }}>
        <InputLabel id='demo-simple-select-label'>{inputLabel}</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={value}
          onChange={handleChange}
        >
          {array.map((item, index) => {
            return (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </ThemeProvider>
  )
}

export default MyFormControl
