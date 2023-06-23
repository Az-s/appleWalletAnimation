import { motion , useTransform ,useViewportScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState, useRef } from "react";
import { useScroll } from "framer-motion";
import logo from "../assets/pngwing.com.png";
// import logo from "../assets/apple-svgrepo-com.svg";

const ScrollAnimation = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, window.innerHeight], [1, 3]);
  const y = useTransform(scrollY, [0, window.innerHeight], [0, window.innerHeight - 150]);
  const opacity = useTransform(scrollY, [window.innerHeight - 100, window.innerHeight], [1, 0]);

  const springConfig = {
    damping: 300,
    stiffness: 500,
    mass: 1,
  };

  // const ref = useRef(null)
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start end", "end end"]
  // })

  // const [ref, inView] = useInView({
  //   threshold: 1,
  //   triggerOnce: false,
  // });

  // const variants = {
  //   visible: { opacity: 1, scale: [1, 2, 3, 4] },
  //   hidden: { opacity: 0, scale: 4},
  // };

  return (
    <motion.div
      className="scrollAnimation"
      // animate={{ y: 0, transition: { duration: 1 } }}
      // initial={{ y: 100 }}
    >
      <motion.h1 className="mainTitle">Wallet</motion.h1>
      <motion.img
        // animate={inView ? "visible" : "hidden"}
        // variants={variants}
        // ref={ref}
        exit='hidden'
        style={{ opacity, scale, y }}
        transition={{ type: "spring", duration: 2,...springConfig }}
        src={logo}
        alt="logo"
        width={500}
        height={350}
        className="animatedImg"
      />
    </motion.div>
  );
};

export default ScrollAnimation;
