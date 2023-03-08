import {Box, Card, CardContent, Divider, Typography} from "@mui/material";
import {useCallback, useEffect, useRef} from "react";
import {register} from 'swiper/element/bundle';

register();

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

  const sectionRef = useRef(null);
  const swiperRef = useRef(null);

  const evtListener = useCallback((evt) => {
    const swiper = swiperRef.current.swiper;
    const parent = swiperRef.current.parentNode.parentNode;

    if (parent.clientTop === 0) {
      if (evt.deltaY > 0 && swiper.activeIndex <= (cards.length - 1)) {
        swiper.slideNext();
      } else if (evt.deltaY < 0){
        swiper.slidePrev();
      }
    }
  }, [cards.length, swiperRef]);

  useEffect(() => {
    if (swiperRef) {
      document.addEventListener('wheel', evtListener)

      return () => {
        document.removeEventListener('wheel', evtListener);
      }
    }

  }, [swiperRef, evtListener])

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

      <swiper-container
        slides-per-view="3"
        navigation="false"
        scrollbar="false"
        pagination="false"
        loop="false"
        speed={"500"}
        style={{width: "100%"}}
        ref={swiperRef}
      >
        {cards.map(({image, title}, i) => <swiper-slide key={i}>
            <Card sx={{mr: 1, background: "transparent", minWidth: 300}}>
              <Typography fontWeight={300} fontSize={14} height={30}>{title}</Typography>

              <CardContent sx={{p: 0, mt: 2}}>
                <img src={image} alt={title} style={{maxWidth: 295}}/>
              </CardContent>
            </Card>
          </swiper-slide>
        )}
      </swiper-container>
    </Box>
  </Box>
}
export default ServicesSection;