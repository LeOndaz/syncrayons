import React, {useRef, useState} from 'react';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import Logo from "./Logo";
import NavIcon from "./NavIcon";


const Header = () => {
  const navItems = [
    {
      label: "Chi Samo",
      href: "/"
    },
    {
      label: "Servizi",
      href: "/"
    },
    {
      label: "Partnership",
      href: "/"
    },
    {
      label: "Contati",
      href: "/"
    },
    {
      label: "Blog",
      href: "/"
    }
  ]

  const [showMenu, setShowMenu] = useState(false);
  const anchor = useRef(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  const menuButton = (
    <IconButton
      sx={{padding: 0}}
      ref={anchor}
      onClick={toggleMenu}>
      <NavIcon/>
    </IconButton>
  )
  return <AppBar position="static"
                 sx={{
                   p: 0, background: "white", minHeight: 600,
                 }}>
    <Toolbar sx={(theme) => ({
      [theme.breakpoints.up('sm')]: {
        pl: 0, pr: 0, pt: 2, pb: 2,
      },
    })}>
      <Box sx={{
        flexGrow: 1, display: {
          xs: 'none', md: 'none'
        }
      }}>
        <Drawer
          anchor="top"
          open={showMenu}
          onClose={() => setShowMenu(false)}
          sx={{
            height: "100vw",
          }}
        >
          {menuButton}
          {navItems.map((item, i) => (
            <Button>
              <Link underline="none" href={item.href} onClick={() => setShowMenu(false)} key={i}>
                <Typography textAlign="center">{item.label}</Typography>
              </Link>
            </Button>
          ))}
        </Drawer>
      </Box>

      {menuButton}
      <Logo style={{margin: "0 60px"}}/>

      <Box sx={(theme) => ({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        [theme.breakpoints.down('md')]: {
          display: "none"
        },
      })}>
        <Box sx={{display: "flex"}}>
          {navItems.map(({label}, i) => (<Link key={i} href={"/"} underline="none">
              <Typography sx={{
                textTransform: "uppercase", fontWeight: "700", fontSize: 14, pl: 3, pr: 3,
              }}>
                {label}
              </Typography>
            </Link>)
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

    <Box sx={{position: "relative"}}>
      <video
        autoPlay
        loop
        muted
        controls={false}
        src={require("./../../assets/header-video.mp4")}
        style={{width: "100%", maxHeight: 500, objectFit: "cover"}}
      />

      <Typography fontWeight={700} sx={(theme) => ({
        width: "100vw",
        maxWidth: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 0,
        m: 0,
        [theme.breakpoints.up('lg')]: {
          fontSize: "calc(35rem)",
        },
        [theme.breakpoints.down('lg')]: {
          fontSize: "15rem"
        },
        [theme.breakpoints.down('md')]: {
          fontSize: "15rem",
        },
        [theme.breakpoints.down('sm')]: {
          fontSize: "10rem"
        },
        position: "absolute",
        top: 0,
        height: "100%",
        backgroundColor: "#fff",
        color: "#000",
        mixBlendMode: "lighten",
        userSelect: "none",
      })}>
        SDC
      </Typography>
    </Box>

    <Box sx={{ml: 18, pt: 10, pb: 15}}>
      <Typography fontSize={"4rem"} fontWeight={400} sx={(theme) => ({
        [theme.breakpoints.down("md")]: {
          fontSize: "2rem"
        }
      })}>Il tuo partner per</Typography>
      <Typography fontSize={"4rem"} fontWeight={700} sx={(theme) => ({
        [theme.breakpoints.down("md")]: {
          fontSize: "2rem"
        }
      })}>OPERAZIONI DOGANALI</Typography>
    </Box>
  </AppBar>
}

export default Header;