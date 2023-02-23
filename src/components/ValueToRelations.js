import {Box, Typography} from "@mui/material";


const ValueToRelations = () => {
  return <Box sx={(theme) => ({
    display: "flex",
    flexDirection: "column",
    height: "400px",
    backgroundColor: theme.palette.primary.main,
    padding: 10,
    paddingLeft: 18,
    position: "relative"
  })}>
    <img src={require("./../assets/value-to-relations-bg.png")} style={{
      position: "absolute",
      top: -50,
      right: 0,
      height: "650px",
    }} alt="trash"/>
    <Typography variant="caption" color="secondary"><b>SDC</b></Typography>
    <Typography variant="h3" color="white" sx={{pt: 2, pb: 8}}>We give<br/> value to relations</Typography>
    <Typography maxWidth="400px" variant="body1" color="white" fontWeight={300}>Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Pellentesque pretium pharetra tristique. Vestibulum rhoncus commodo nulla, et
      fringilla urna malesuada vitae. Donec turpis ligula, elementum at ex nec, elementum aliquam turpis.</Typography>
  </Box>
}

export default ValueToRelations;