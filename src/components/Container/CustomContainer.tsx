import { Box, BoxProps } from '@mui/material'
import React from 'react'

interface IContainerProps extends BoxProps {
  children?: React.ReactNode
}

function CustomContainer({ children, ...rest }: IContainerProps) {
  return (
    <Box
      component='div'
      {...rest}
      sx={{
        margin: '0 auto',
        maxWidth: '1400px',
        width: '100%',
        padding: '0px',
      }}
    >
      {children}
    </Box>
  )
}

export default CustomContainer
