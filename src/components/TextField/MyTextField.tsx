import { TextField, TextFieldProps } from '@mui/material'
import { forwardRef } from 'react'
import { Controller } from 'react-hook-form'



interface IMyTextField extends Omit<TextFieldProps<'outlined'>, 'variant'> { }

const MyTextField = forwardRef<HTMLInputElement, IMyTextField>((props, ref) => {
  return (
    <TextField variant={'outlined'} inputRef={ref} sx={{ width: '100%' }} {...props} />
  )
})

export default MyTextField
