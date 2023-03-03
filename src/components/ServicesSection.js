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
  // const lastCardRef = useRef(null);
  // const firstCardRef = useRef(null);
  //
  // const sectionRef = useRef(null);
  // const sliderInView = useInView(sliderRef, {amount: "all"});
  // const lastCardInView = useInView(lastCardRef, {amount: "all"});
  // const firstCardInView = useInView(firstCardRef, {amount: "all"})

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

  // const evtListener = useCallback((evt) => {
  //   const sliderRect = sliderRef.current.getBoundingClientRect();
  //   const sliderInPosition = sliderRect.top <= 220;
  //   const isScrollingDown = evt.deltaY > 0;
  //   const isScrollingUp = evt.deltaY < 0;
  //
  //   sliderRef.current.scrollBy(evt.deltaY, 0);
  //
  //   if (sliderInPosition && (!lastCardInView || firstCardInView) && isScrollingDown) { // 180 is a number got by testing
  //     evt.preventDefault();
  //   }
  //
  //   if (sliderInPosition && lastCardInView && isScrollingDown) {
  //     // ok we can
  //   }
  //
  //   if (sliderInPosition && !firstCardInView && isScrollingUp) {
  //     evt.preventDefault();
  //   }
  //
  // }, [sliderRef, lastCardInView, firstCardInView])
  //
  // useEffect(() => {
  //   if (sliderInView) {
  //     document.addEventListener('wheel', evtListener, {passive: false})
  //
  //     return () => {
  //       document.removeEventListener('wheel', evtListener)
  //     }
  //   }
  // }, [evtListener, sliderInView])

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