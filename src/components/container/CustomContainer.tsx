import { Box } from "@mui/material"
import React from "react";



interface IContainerProps {
  children?: React.ReactNode
}


function CustomContainer({ children }: IContainerProps) {
  return (
    <Box
      component="div"
      sx={{
        margin: "0 auto",
        maxWidth: '1280px',
        width: "100%",
        padding:"0px"
      }}>
      {children}
    </Box>
  )
}

export default CustomContainer