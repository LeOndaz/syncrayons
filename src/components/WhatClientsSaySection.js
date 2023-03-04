import {Box, Typography} from "@mui/material";


const WhatClientsSaySection = () => {
  return <Box sx={{
    width: "100%",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    position: "relative",
    backgroundColor: "primary.main",
    display: "flex",
    flexDirection: "column",
    pt: 10,
    pb: 10,
  }} component='section'>
    <Typography fontSize={"2rem"} color={"#DBDCDD"} sx={{display: "flex", justifyContent: "flex-end", p: 2}}>
      “Radici veneziane, aperti al mondo.
    </Typography>
    <Typography fontSize={"2rem"} color={"#DBDCDD"} sx={{p: 2}}>
      Ci contraddistingue passione, affidabilità, competenza e flessibilità. <br/> Un marchio da 50 anni nel mondo dove
      la
      priorità è sempre stata il <br/> rispetto per il cliente.”
    </Typography>

    <Box>
      <img src={require("../assets/what-clients-say.png")} alt="People gathering" style={{
        maxWidth: "100%",
        height: "100%"
      }}/>
    </Box>
  </Box>
}

export default WhatClientsSaySection;