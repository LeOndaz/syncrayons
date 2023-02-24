import Header from "./components/Header/Header";
import {theme} from "./shared/theme";
import {Box, ThemeProvider} from "@mui/material";
import ValueToRelations from "./components/ValueToRelations";
import ServicesSection from "./components/ServicesSection";
import ExploreSection from "./components/ExploreSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MapSection from "./components/MapSection";
import WhatClientsSaySection from "./components/WhatClientsSaySection";
import Brands from "./components/BrandsSection";


function App() {
  return <ThemeProvider theme={theme}>
    <Box sx={{ backgroundColor: "primary.main", fontSize: 16}}>
      <Header/>
      <ValueToRelations/>
      <ServicesSection/>
      <ExploreSection/>
      <MapSection />
      <WhatClientsSaySection />
      <Brands />
    </Box>
  </ThemeProvider>
}

export default App;
