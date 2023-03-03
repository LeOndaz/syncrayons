import {Box, Card, CardContent, Divider, Typography} from "@mui/material";
import {useRef} from "react";
import {motion, useScroll, useSpring, useTransform} from "framer-motion"


const ServicesSection = () => {
  const cards = [
    {title: "Aeroporto - Operazioni doganali", image: require("./../assets/airport.png"),},
    {title: "Porto commerciale - Operazioni doganali", image: require("./../assets/port.png"),},
    {title: "Crociere - Operazioni doganali", image: require("./../assets/cruze.png"),},
    {title: "Magazzini e Logistica", image: require("./../assets/containers.png"),},
    {title: "Crociere - Operazioni doganali", image: require("./../assets/cruze.png"),},
    {title: "Porto commerciale - Operazioni doganali", image: require("./../assets/port.png"),},
    {title: "Aeroporto - Operazioni doganali", image: require("./../assets/airport.png"),},
  ]

  const sliderRef = useRef(null);
  const sectionRef = useRef(null);

  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const springScroll = useSpring(scrollYProgress, {
    velocity: 1,
    bounce: 0,
  });
  const x = useTransform(springScroll, [0, 1], ["0%", "-110%"])

  return <Box sx={{
    position: "relative",
    background: "#F2F4F8 0% 0% no-repeat padding-box;",
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    pl: 18,
    pr: 18,
    pt: 5,
    pb: 10,
    height: "100vh",
    maxHeight: "100%",
  }} component='section' ref={sectionRef}>

    <Box sx={{position: "sticky", top: 0, left: 0, overflowX: "hidden"}}>
      <Typography variant="h4" sx={{pt: 5}}>
        Da 50 anni, lorem ipsum i servizi
      </Typography>

      <Divider sx={{marginTop: 5, marginBottom: 5}}/>

      <motion.div style={{scale, x}}>
        <Box ref={sliderRef} component='ul' sx={{
          display: "flex",
          listStyle: "none",
        }}>
          {cards.map(({image, title}, i) => (
            // ref={i === (cards.length - 1) ? lastCardRef : i === 0 ? firstCardRef : null}
            <motion.li key={i}>
              <Card sx={{mr: 1, background: "transparent", minWidth: 300}}>
                <Typography fontWeight={300} fontSize={14} height={30}>{title}</Typography>

                <CardContent sx={{p: 0, mt: 2}}>
                  <img src={image} alt={title} style={{maxWidth: 295}}/>
                </CardContent>
              </Card>
            </motion.li>
          ))}
        </Box>
      </motion.div>
    </Box>
  </Box>
}
export default ServicesSection;