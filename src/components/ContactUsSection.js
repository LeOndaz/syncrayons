import {Box, Grid, Typography} from "@mui/material";


const ContactUsSection = () => {
  return <Box sx={(theme) => ({
    p: 10,
    display: "flex",
    flexDirection: "column",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    position: "relative",
    border: 1,
    backgroundColor: theme.palette.primary.main,
  })}>
    <Typography variant={"h3"} color={"secondary"} sx={{mb: 5}}>
      Ufficio commerciale
    </Typography>

    <Grid container>
      <Grid item xs={6}>
        <Typography color="white" fontSize={20} fontWeight={600}>Krizia</Typography>
        <Typography color="white" fontSize={20} fontWeight={300}>+39 041 25 15 333 / +39 388 10 91 039</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography color="white" fontSize={20} fontWeight={600}>Marco</Typography>
        <Typography color="white" fontSize={20} fontWeight={300}>+39 041 25 15 353 / +39 380 50 96 852</Typography>
      </Grid>
    </Grid>

    <Typography fontWeight={600} variant="h5" sx={{
      textDecoration: "underline",
      color: "white",
      mt: 4
    }}>
      commerciale@sdcweb.eu
    </Typography>
  </Box>
}
export default ContactUsSection;