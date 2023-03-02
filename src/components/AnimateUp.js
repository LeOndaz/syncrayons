import {useScroll, useTransform, motion, useSpring, useMotionValueEvent} from "framer-motion";
import {useRef} from "react";

const AnimateUp = ({children}) => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "40% 100%"]
  });

  const springScroll = useSpring(scrollYProgress);

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const z = useTransform(scrollYProgress, [0, 1], [300, 0]);
  const scaleZ = useTransform(springScroll, [0, 1], [1.3, 1]);

  const blurValue = useTransform(scrollYProgress, [0, 1], [5, 0]);
  const filter = useTransform(blurValue, v => `blur(${v}px)`)

  return <motion.div
    ref={ref}
    style={{filter, z, y, scaleY: scaleZ}}
  >
    {children}
  </motion.div>
}

export default AnimateUp;