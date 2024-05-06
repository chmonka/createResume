import { createTheme } from '@mui/material'
import { color } from 'html2canvas/dist/types/css/types/color'

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#FFFFFF',
          '& .MuiTypography-root': {
            color: '#FFFFFF',
          }
        }
      }
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          "& .MuiSelect-select": {
            color: "#FFFFFF",
            borderColor: "#FFFFFF",
          },
          "& .MuiSelect-root": {
            color: "#FFFFFF",
            borderColor: "#FFFFFF",
          },

          "& .MuiSelect-outlined":{
            color: "#FFFFFF",
            borderColor: "#FFFFFF",
          },

          "& .MuiSelect-icon": {
            color: "#FFFFFF",
          },
          "& .MuiSelect-menu": {
            backgroundColor: "white",
            color: "black",
          },
          "& .MuiMenuItem-root": {
            backgroundColor: "white",
            borderColor: '#FFFFFF',
            color: "#FFFFFF",

          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            color: "#FFFFFF",
            fontFamily: "Arial",
            fontWeight: "bold",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#FFFFFF",
              color: "#FFFFFF",
              borderWidth: "2px",
            },
            "&.Mui-focused": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#FFFFFF",
                color: "#FFFFFF",
                borderWidth: "3px",
              },
            },
            "&:hover:not(.Mui-focused)": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#FFFFFF",
                color: "#FFFFFF",
              },
            },
          },
          "& .MuiInputLabel-outlined": {
            color: "#FFFFFF",
            fontWeight: "bold",
            "&.Mui-focused": {
              color: "#FFFFFF",
              fontWeight: "bold",
            },
          },
        },
      }
    }
  }
})


export default theme