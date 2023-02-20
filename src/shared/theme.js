import {createTheme} from "@mui/material";


export const theme = createTheme({
  palette: {
    primary: {
      main: "#002D7E",
    },
    secondary: {
      main: "#FECC00"
    },
  },
  shadows: "none",
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#002D7E"
        }
      }
    }
  }
})

