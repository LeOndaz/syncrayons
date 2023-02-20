import React from 'react';
import {AppBar, Box, Container, IconButton, SvgIcon, Toolbar, Typography} from "@mui/material";
import Logo from "./Logo";
import NavButton from "./NavButton";
import headerImage from "../../assets/background.png";


const Navbar = () => {
  const navItems = ['Chi Samo', 'Servizi', 'Partnership', 'Contati', 'Blog'];

  return <AppBar position="static" sx={{height: 400, p: 0, backgroundImage: headerImage }}>
    <Toolbar sx={(theme) => ({
      [theme.breakpoints.up('sm')]: {
        padding: 0,
      },
    })}>
      <IconButton sx={{padding: 0}}>
          <NavButton />
      </IconButton>
      <Logo/>
      <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%"}}>
        <Box sx={{display: "flex"}}>
          {navItems.map((label) => (
              <Typography sx={{
                textTransform: "uppercase",
                fontWeight: "700",
                pl: 3,
                pr: 3,
              }}>{label}</Typography>
            )
          )}
        </Box>
        <Box sx={{display: "flex"}}>
          <Typography fontSize={12}>Via dell'drogeno 9/4, Marghera (VE)</Typography>
          <Typography fontSize={12}>+39 041 25 15 333</Typography>
        </Box>
      </Box>
    </Toolbar>
  </AppBar>
}

export default Navbar;