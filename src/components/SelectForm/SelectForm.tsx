import { BaseSelectProps, createTheme, MenuItem, Select, ThemeProvider } from '@mui/material'
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

type ISelectForm = BaseSelectProps<string> & {
  array: string[] | number[]
}

const SelectForm: FC<ISelectForm> = ({ array, ...props }) => {
  return (
    <ThemeProvider theme={theme}>
      <Select {...props}>
        {array.map((item, index) => {
          return (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          )
        })}
      </Select>
    </ThemeProvider>
  )
}

export default SelectForm
