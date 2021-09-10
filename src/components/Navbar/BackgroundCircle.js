import { motion } from "framer-motion";
import classes from "./BackgroundCircle.module.css";
const BackgroundCircle = (props) => {
  let style = {};
  if (props.style) {
    style = props.style;
  }
  return (
    <motion.div
      initial={{
        x: "0.6rem",
        y: "-6rem",
      }}
      animate={{
        scale: 20,
        position: "fixed",
      }}
      transition={{ duration: 0.5 }}
      exit={{ scale: 0 }}
      style={{ zIndex: "-5" }}
    >
      <div className={classes.circle} style={style}></div>
    </motion.div>
  );
};

export default BackgroundCircle;
