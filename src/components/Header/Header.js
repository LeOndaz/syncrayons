import React from 'react';
import {AppBar, Box, Container, IconButton, Link, SvgIcon, Toolbar, Typography} from "@mui/material";
import Logo from "./Logo";
import NavButton from "./NavButton";


const Header = () => {
  const navItems = [
    {
      label: "Chi Samo",
    },
    {
      label: "Servizi",
    },
    {
      label: "Partnership"
    },
    {
      label: "Contati",
    },
    {
      label: "Blog"
    }
  ]

  return <AppBar position="static"
                 sx={{
                   p: 0,
                   background: "white",
                   minHeight: 600,
                 }}>
    <Toolbar sx={(theme) => ({
      [theme.breakpoints.up('sm')]: {
        pl: 0,
        pr: 0,
        pt: 2,
        pb: 2,
      },
    })}>
      <IconButton sx={{padding: 0}}>
        <NavButton/>
      </IconButton>
      <Logo style={{margin: "0 60px"}}/>

      <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%"}}>
        <Box sx={{display: "flex"}}>
          {navItems.map(({label}, i) => (
              <Link key={i} href={"/"} underline="none">
                <Typography sx={{
                  textTransform: "uppercase",
                  fontWeight: "700",
                  fontSize: 14,
                  pl: 3,
                  pr: 3,
                }}>
                  {label}
                </Typography>
              </Link>
            )
          )}
        </Box>
        <Box sx={{display: "flex", justifyContent: "space-between"}}>
          <Typography fontSize={12} fontWeight={300}>Via dell'drogeno 9/4, Marghera (VE)</Typography>
          <Box sx={{ml: 2, mr: 2}}/>
          <Typography fontSize={12} fontWeight={300}>+39 041 25 15 333</Typography>
        </Box>

        <Box/>
      </Box>
    </Toolbar>

    {/*<Box>*/}
    {/*  <Typography */}
    {/*    fontWeight={700}*/}
    {/*    fontSize={700}*/}
    {/*    paragraph */}
    {/*    sx={{*/}
    {/*    m: 0,*/}
    {/*    p: 0,*/}
    {/*    lineHeight: 1,*/}
    {/*  }}>*/}
    {/*    SDC*/}
    {/*  </Typography>*/}
    {/*</Box>*/}

    <Box>
      <video autoPlay loop controls={false} src={require("./../../assets/header-video.mp4")} style={{
        width: "100vw",
      }}/>
    </Box>

    <Box sx={{ml: 18, pt: 10, pb: 15}}>
      <Typography fontSize={65} fontWeight={400}>Il tuo partner per</Typography>
      <Typography fontSize={65} fontWeight={700}>OPERAZIONI DOGANALI</Typography>
    </Box>
  </AppBar>
}

export default Header;