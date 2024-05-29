import { Button, ButtonProps, ThemeProvider, createTheme } from '@mui/material'
import { FC } from 'react'

interface IButtonProps extends ButtonProps {
  onClick?: () => void
  innerText: string
  children?: React.ReactNode
}

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&.MuiButton-root': {
            border: '2px #000 solid',
            color: '#000',
          },
          '& :hover': {
            boxShadow: '0px 15px 5px -5px rgba(255, 255, 255, 1) inset',
          },
        },
      },
    },
  },
})

function CustomButton({ children, onClick, innerText, ...rest }: IButtonProps) {
  return (
    <ThemeProvider theme={theme}>
      <Button
        {...rest}
        onClick={onClick}
        size='medium'>
        {innerText}
      </Button>
    </ThemeProvider>
  )
}
export default CustomButton
