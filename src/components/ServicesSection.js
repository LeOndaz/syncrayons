import {Box, Card, CardContent, Divider, Typography} from "@mui/material";
import Slider from "react-slick";
import {useCallback, useEffect, useRef} from "react";
import {motion, useInView, useMotionValueEvent, useScroll, useTransform} from "framer-motion"


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

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
  }

  const sliderRef = useRef(null);

  const {scrollYProgress} = useScroll();
  const lastCardRef = useRef(null);

  const sliderInView = useInView(sliderRef);
  const lastCardInView = useInView(lastCardRef);

  const evtListener = useCallback((e) => {
    e.preventDefault();
  }, [])

  useEffect(() => {
    sliderRef.current.scrollTo(0, 0)
    if (sliderInView) {
      document.addEventListener('wheel', (evt) => {
        const y = evt.deltaY;
        sliderRef.current.scrollBy(y, 0);
      })

      return () => {
        document.removeEventListener('wheel', evtListener)
      }
    } else {
      document.removeEventListener('wheel', evtListener)
    }
  }, [sliderInView])

  return <Box sx={{
    position: "relative",
    background: "#F2F4F8 0% 0% no-repeat padding-box;",
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    pl: 18,
    pr: 18,
    pt: 10,
    pb: 10,
    height: "100vh",
    maxHeight: "100%",
  }}>
    <Typography variant="h4">
      Da 50 anni, lorem ipsum i servizi
    </Typography>

    <Divider sx={{marginTop: 5, marginBottom: 5}}/>

    <Box ref={sliderRef} component='ul' sx={{
      display: "flex",
      listStyle: "none",
      overflowX: "hidden",
    }}>
      {cards.map(({image, title}, i) => (
        <motion.div ref={i === cards.length - 1 ? lastCardRef : null}>
          <Card key={i} sx={{mr: 1, background: "transparent", minWidth: 300}} component='li'>
            <Typography fontWeight={300} fontSize={14} height={30}>{title}</Typography>

            <CardContent sx={{p: 0, mt: 2}}>
              <img src={image} alt={title} style={{maxWidth: 295}}/>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </Box>
  </Box>
}
export default ServicesSection;