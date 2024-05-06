import { Button, ThemeProvider, createTheme } from '@mui/material'
import { FC } from 'react'

interface ButtonProps {
  onClick?: () => void
  innerText: string
}

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&.MuiButton-root': {
            border: '2px #000 solid',
            color: '#000',
            // backgroundColor: "#FFFFFF"
          },
          '& :hover': {
            boxShadow: '0px 15px 5px -5px rgba(255, 255, 255, 1) inset',
          },
        },
      },
    },
  },
})

const CustomButton: FC<ButtonProps> = ({ onClick, innerText }) => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        onClick={onClick}
        variant='outlined'
        size='medium'
        sx={{ borderColor: '#FFFFFF', color: '#FFFFFF' }}
      >
        {innerText}
      </Button>
    </ThemeProvider>
  )
}
export default CustomButton
