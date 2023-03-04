import {Box, Card, CardContent, Grid, Typography} from "@mui/material";
import SDC from "./SDC";


const ExploreSection = () => {
  const explorations = [
    {
      title: "RELAZIONI DINAMICHE",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium pharetra tristique. Vestibulum rhoncus commodo nulla, et fringilla urna.",
      button: "CONTATTACI",
      image: require("../assets/explore1.png"),
      imageOnLeft: true,
    },
    {
      title: "CORAGGIO VERSO IL CAMBIAMENTO",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium pharetra tristique. Vestibulum rhoncus commodo nulla, et fringilla urna.",
      button: "ENERGIE RINNOVABILI",
      image: require("../assets/explore2.png"),
      imageOnLeft: false,
    },
    {
      title: "OTTIMIZZAZIONE E MODERNIZZAZIONE",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium pharetra tristique. Vestibulum rhoncus commodo nulla, et fringilla urna.",
      button: "CHI SIAMO",
      image: require("../assets/explore3.png"),
      imageOnLeft: true,
    },

  ]

  return <Box sx={{
    pl: 18,
    pr: 18,
    pt: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: `#DBDCDD linear-gradient(180deg, #F2F4F8 0%, #DBDCDD00 100%) 0% 0% no-repeat padding-box;`,
  }} component='section'>
    <Typography fontWeight={500} variant='h4' sx={{
      maxWidth: 600,
      textAlign: "center",
      pb: 10
    }}>
      Esperienza e la flessibilità nel proporre nuovi servizi connessi al commercio internazionale
    </Typography>

    <Box sx={{position: "relative", display: "flex", alignItems: "center", justifyContent: "center"}}>
      <SDC style={{
        transform: "rotateZ(90deg)",
        position: "absolute",
        maxHeight: 200,
        opacity: 0.05,
        userSelect: "none",
      }}/>

      <Grid container sx={{zIndex: 1}}>
        {explorations.map((item, i) => {
          const card = (<Card sx={{background: "transparent", mr: 10}}>
            <CardContent sx={{p: 0}}>
              <img src={require(`./../assets/explore${i + 1}.png`)} alt={item.title} style={{
                maxHeight: 350
              }}/>
            </CardContent>
          </Card>)
          const text = (<Box sx={{display: "flex", flexDirection: "column"}}>

            <Typography fontWeight={600} fontSize={20} sx={{mb: 2}}>
              RELAZIONI<br/> DINAMICHE
            </Typography>

            <Typography fontWeight={300} maxWidth={400}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium pharetra tristique.
              Vestibulum rhoncus commodo nulla, et fringilla urna.
            </Typography>

            <Box sx={{display: "flex", alignItems: "center", mt: 2}}>
              <Typography fontSize={30} fontWeight={300} mr={2}>[</Typography><Typography
              textTransform={"uppercase"}>Contattaci</Typography><Typography fontSize={30} fontWeight={300}
                                                                             ml={2}>]</Typography>
            </Box>
          </Box>)

          return <Grid key={i} item xs={12}>
            <Box sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
              {item.imageOnLeft ? <>{card}{text}</> : <>{text}{card}</>}
            </Box>
          </Grid>
        })}
      </Grid>
    </Box>

  </Box>
}


export default ExploreSection;