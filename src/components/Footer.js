import Logo from "./Header/Logo";
import {Box, Grid, Typography} from "@mui/material";


const Footer = () => {
  return <footer style={{backgroundColor: "white", padding: 20, display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
    <Grid container sx={{p: 10}}>
      <Grid item xs={12} md={6} lg={3}>
        <Logo/>
      </Grid>

      <Grid item xs={12} md={6} lg={3}>
        <Box sx={{ display: "flex", flexDirection: "column"}}>
          <Typography>SEDE LEGALE</Typography>
          <Typography>Via dell’Idrogeno 9/4 30175 - Marghera (VE)</Typography>
          <Typography>30175 - Marghera (VE)</Typography>
        </Box>
      </Grid>


      <Grid item xs={12} md={6} lg={3}>
        <Box sx={{ display: "flex", flexDirection: "column"}}>
          <Typography>SDC Servizio Doganale Containers s.r.l</Typography>
          <Typography> P.IVA 00662130277</Typography>
          <Typography>Privacy e Cookies</Typography>
        </Box>
      </Grid>

      <Grid item xs={12} md={6} lg={3}>
        <img src={require("./../assets/Raggruppa 44.png")} style={{ maxWidth: 200}}/>
      </Grid>

    </Grid>

    <Typography sx={{ ml: 10}} fontSize={12}>
      Made TOGETHERE with Baobab Communication
    </Typography>
  </footer>
}

export default Footer;