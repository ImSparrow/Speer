import React, { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import classes from "./ImageLoader.module.css";
const slides = ["/assets/hero1.png", "/assets/hero2.png", "/assets/hero3.png"];
const ImageLoader = () => {
  const [index, setIndex] = useState(0);
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
  });
  useEffect(() => {
    const t = setInterval(
      () => setIndex((state) => (state + 1) % slides.length),
      10000
    );
    return () => clearTimeout(t);
  }, []);
  return (
    <div className={classes.image}>
      <div className={classes.information}>
        <h1>INTERACTIVE CONCERT EXPERIENCE</h1>
        <h2>
          Experience your favourite artists like never before and from the
          comfort of your own home.
        </h2>
        <button className={`${classes.btn} ${classes.mix} ${classes.noborder}`}>
          TRY IT OUT
        </button>
      </div>
      <div className={classes.dotsContainer}>
        <div
          className={classes.dots}
          style={
            index % slides.length === 0
              ? { backgroundColor: "black" }
              : { backgroundColor: "white" }
          }
          onClick={() => setIndex(0)}
        ></div>
        <div
          className={classes.dots}
          style={
            index % slides.length === 1
              ? { backgroundColor: "black" }
              : { backgroundColor: "white" }
          }
          onClick={() => setIndex(1)}
        ></div>
        <div
          className={classes.dots}
          style={
            index % slides.length === 2
              ? { backgroundColor: "black" }
              : { backgroundColor: "white" }
          }
          onClick={() => setIndex(2)}
        ></div>
      </div>
      {transitions((style, i) => {
        i = index;
        return (
          <animated.div
            className={classes.bg}
            style={{
              ...style,
              backgroundImage: `url('${slides[i]}')`,
            }}
          />
        );
      })}
    </div>
  );
};

export default ImageLoader;
