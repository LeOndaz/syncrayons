import Header from "./components/Header/Header";
import {theme} from "./shared/theme";
import {Box, Divider, ThemeProvider} from "@mui/material";
import ValueToRelations from "./components/ValueToRelations";
import ServicesSection from "./components/ServicesSection";
import ExploreSection from "./components/ExploreSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MapSection from "./components/MapSection";
import WhatClientsSaySection from "./components/WhatClientsSaySection";
import Brands from "./components/BrandsSection";
import ContactUsSection from "./components/ContactUsSection";
import Footer from "./components/Footer";
import AnimateUp from "./components/AnimateUp";


function App() {
  return <ThemeProvider theme={theme}>
    <Box sx={{backgroundColor: "#F3F4F8", fontSize: 16, scrollBehavior: 'smooth'}}>
      <Header/>

      <AnimateUp>
        <ValueToRelations/>
      </AnimateUp>

      <ServicesSection/>

      <AnimateUp>
        <ExploreSection/>
      </AnimateUp>

      <AnimateUp>
        <MapSection/>
      </AnimateUp>

      <AnimateUp>
        <WhatClientsSaySection/>
      </AnimateUp>

      <AnimateUp>
        <Brands/>
      </AnimateUp>

      <Divider sx={{borderColor: "white", pl: 18, pr: 18}}/>
      <ContactUsSection/>

      <Footer/>
    </Box>
  </ThemeProvider>
}

export default App;
