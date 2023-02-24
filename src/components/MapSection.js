import {Box, Grid, Typography} from "@mui/material";
import Slider from "react-slick";

const MapSection = () => {
  const sliderSettings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  }

  return <Box sx={{
    backgroundColor: "#F3F4F8",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0% 0%",
    backgroundClip: "padding-box",
    paddingBottom: "100px"
  }}>
    <Grid container sx={{m: 0}}>
      <Grid item xs={12} md={6}>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Typography color="secondary" fontWeight={700}>PUNTI STRATEGICI</Typography>
          <Typography fontWeight={700} fontSize={36}>ADRIATICO</Typography>
          <Box sx={{width: 400}}>
            <Slider {...sliderSettings}>
              <img src={require("./../assets/citytopview.png")} alt="City sea view"/>
              <img src={require("./../assets/citytopview.png")} alt="City sea view"/>
              <img src={require("./../assets/citytopview.png")} alt="City sea view"/>
            </Slider>
          </Box>
          <Typography fontWeight={300} maxWidth={100}>
            Venezia Padova Trieste Koper Rijeka Mantova Ravenna Ancona
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} md={6}>
        <img src={require("./../assets/map.svg").default} alt={"Map"} style={{maxWidth: "100%"}}/>
      </Grid>
    </Grid>
  </Box>
}


export default MapSection;