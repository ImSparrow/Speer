import { motion } from "framer-motion";
import classes from "./SideDrawerItems.module.css";
const SideDrawerItems = (props) => {
  return (
    <motion.div
      initial={{
        x: "0",
        y: "50%",
        opacity: 0,
      }}
      animate={{
        y: "0",
        opacity: 1,
        position: "fixed",
      }}
      transition={{ duration: 0.5 }}
      exit={{ y: "50%", opacity: 0 }}
    >
      <aside className={classes.nav} style={props.style}>
        {props.children}
      </aside>
    </motion.div>
  );
};

export default SideDrawerItems;
