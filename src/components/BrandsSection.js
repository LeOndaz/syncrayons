import {Box, Grid, Typography} from "@mui/material";


const Brands = () => {
  const brands = [
    {url: require("./../assets/azamara.png"),},
    {url: require("./../assets/Embassy-Freight.png"),},
    {url: require("./../assets/Hellmann.png"),},
    {url: require("./../assets/Lagardère.png"),},
    {url: require("./../assets/martico-logo.png"),},
    {url: require("./../assets/port-of-venice.png"),},
    {url: require("./../assets/pullmantur.png"),},
    {url: require("./../assets/radonicich.png"),},
    {url: require("./../assets/royal-caribbean.png"),},
    {url: require("./../assets/Saimare.png"),},
  ];

  return <Box sx={(theme) => ({
    p: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: theme.palette.primary.main
  })}>
    <Box sx={{ mb: 10}}>
      <Typography variant="h3" color={"white"}>Abbiamo collaborato con</Typography>
      <Typography variant="h3" color="secondary">Grandi società. Start-ups. Chiunque cercasse un partner veloce ed
        affidabile.</Typography>
    </Box>

    <Grid container>
      {brands.map(({url}) => (
        <Grid item xs={4} md={12 / 5}><img src={url} alt={"brand logo"} style={{maxWidth: 200}}/></ Grid>
      ))}
    </Grid>
  </Box>
}

export default Brands;