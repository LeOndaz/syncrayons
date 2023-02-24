import React, {useRef, useState} from 'react';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import Logo from "./Logo";
import NavIcon from "./NavIcon";
import CloseIcon from '@mui/icons-material/Close';
import SDC from "../SDC";
import {motion} from 'framer-motion';

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

  const cancelMenuButton = (<IconButton
      sx={(theme) => ({
        padding: 0,
        backgroundColor: theme.palette.primary.main,
        borderRadius: 0,
        color: theme.palette.secondary.main,
        p: 1
      })}
      ref={anchor}
      onClick={toggleMenu}
    >
      <CloseIcon/>
    </IconButton>
  )
  return <AppBar
    position="static"
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
            height: "100vh",
          }}
        >
          <Box sx={{
            height: "100vh",
            background: "#F2F4F8 0% 0% no-repeat padding-box",
          }}>
            <Box sx={{display: "flex", pt: 2, pb: 2}}>
              {cancelMenuButton}
              <Box sx={{mr: 5}}/>
              <Logo/>
            </Box>

            <Box display="flex" padding={10} justifyContent="space-around">
              <Box display="flex" flexDirection="column">
                {navItems.map((item, i) => (
                  <motion.div
                    key={i}
                    style={{
                      opacity: 0.5,
                      fontWeight: 300,
                      padding: 10
                    }}
                    whileHover={{
                      scale: 2,
                      translateX: 100,
                      color: "#002D7E",
                      opacity: 1,
                      fontWeight: 700,
                      padding: 20
                    }}>
                    <Link underline="none" href={item.href} onClick={() => setShowMenu(false)} key={i}>
                      <Typography textAlign="center" fontSize={30} fontWeight='inherit'>{item.label}</Typography>
                    </Link>
                  </motion.div>
                ))}
              </Box>

              <Box display="flex" flexDirection="column" padding={1.5}>
                <Typography fontSize={30}>OPERAZIONI DOGANALI</Typography>
                <Typography fontSize={30}>MAGAZZINI E LOGISTICA</Typography>
                <Typography fontSize={30}>CONTROLLI RADIOMETRICI</Typography>
                <Typography fontSize={30} color="red">ENERGIE RINNOVABILI ???</Typography>
              </Box>

              <Box display="flex" flexDirection="column" padding={1.5}>
                <Box>
                  <Typography fontSize={14}>CHIAMACI</Typography>
                  <Typography fontWeight={700}>+39 041 25 15 333</Typography>
                  <Typography fontWeight={700}>+39 041 25 15 353</Typography>
                </Box>

                <Box marginBottom={5}/>
                <Box>
                  <Typography fontSize={14}>EMAIL</Typography>
                  <Typography fontWeight={700}>commerciale@sdcweb.eu</Typography>
                </Box>

                <Box marginBottom={5}/>

                <Box>
                  <Typography fontSize={14}>POLICY / TERM AND CONDITIONS / CAREERS</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
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
      <SDC style={{
        width: "100vw",
        maxWidth: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 0,
        m: 0,
        position: "absolute",
        top: 0,
        height: "100%",
        backgroundColor: "#fff",
        color: "#000",
        mixBlendMode: "lighten",
        userSelect: "none",
      }}/>
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