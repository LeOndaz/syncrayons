import Navbar from "./components/Navbar/Navbar";
import {theme} from "./shared/theme";
import {Box, ThemeProvider} from "@mui/material";

function App() {
  return <ThemeProvider theme={theme}>
    <Navbar/>
  </ThemeProvider>
}

export default App;
