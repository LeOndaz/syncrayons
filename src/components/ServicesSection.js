import {Box, Card, CardContent, Divider, Typography} from "@mui/material";
import Slider from "react-slick";
import {useEffect, useRef} from "react";
// import { motion, useScroll } from "framer-motion"


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
  const ref = useRef(null);
  // const { scrollYProgress } = useScroll();

  useEffect(() => {
    const element = ref.current;

    if (element && sliderRef.current) {
      const intersectionObserver = new IntersectionObserver((e) => {
        console.log(e);
        sliderRef.current.slickNext();
      }, { threshold: 0.1 })

      intersectionObserver.observe(element);

      return () => {
        intersectionObserver.unobserve(element);
      }
    }
  }, [sliderRef, ref])

  return <Box sx={{
    position: "relative",
    background: "#F2F4F8 0% 0% no-repeat padding-box;",
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    pl: 18,
    pr: 18,
    pt: 10,
    pb: 10,
  }}>
    <Typography variant="h4">
      Da 50 anni, lorem ipsum i servizi
    </Typography>

    <Divider sx={{marginTop: 5, marginBottom: 5}}/>

    <Box ref={ref}>
      <Slider {...sliderSettings} ref={sliderRef}>
        {cards.map(({image, title}, i) => (
          <Card key={i} sx={{mr: 1, background: "transparent"}}>
            <Typography fontWeight={300} fontSize={14} height={30}>{title}</Typography>

            <CardContent sx={{p: 0, mt: 2}}>
              <img src={image} alt={title} style={{maxWidth: 295}}/>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  </Box>
}
export default ServicesSection;