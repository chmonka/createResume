import { TextField, TextFieldProps } from '@mui/material'
import { forwardRef } from 'react'




interface IMyTextField extends Omit<TextFieldProps<'outlined'>, 'variant'> {}

const MyTextField = forwardRef<HTMLInputElement, IMyTextField>((props, ref) => {
  return (
    <TextField  inputRef={ref} sx={{ width: '100%' }} {...props} />
  )
})

export default MyTextField
