import {useScroll, useTransform, motion, useSpring} from "framer-motion";
import {useRef} from "react";

const AnimateUp = ({children}) => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["0 1", "0.5 1"]
  });

  const spring = useSpring(scrollYProgress, {
    bounce: 0
  });
  const y = useTransform(spring, [0, 1], ["200px", "0px"]);
  const z = useTransform(spring, [0, 1], [30, 0]);
  const scaleY = useTransform(scrollYProgress, [0, 1], [1.3, 1]);

  const blurValue = useTransform(scrollYProgress, [0, 1], [5, 0]);
  const filter = useTransform(blurValue, v => `blur(${v}px)`)

  return <motion.div
    ref={ref}
    style={{filter, z, y, scaleY,}}
  >
    {children}
  </motion.div>
}

export default AnimateUp;