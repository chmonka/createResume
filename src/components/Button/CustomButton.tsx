import { Button, ButtonProps, ThemeProvider, createTheme } from '@mui/material'


interface IButtonProps extends ButtonProps {
  onClick?: () => void
  innerText: string
  children?: React.ReactNode
}

function CustomButton({ children, onClick, innerText, ...rest }: IButtonProps) {
  return (
    <Button
      {...rest}
      onClick={onClick}
      size='medium'>
      {innerText}
    </Button>
  )
}
export default CustomButton
