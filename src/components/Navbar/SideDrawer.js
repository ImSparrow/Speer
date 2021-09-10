import { AnimatePresence } from "framer-motion";
import classes from "./SideDrawer.module.css";
import BackgroundCircle from "./BackgroundCircle";
import SideDrawerItems from "./SideDrawerItems";
const SideDrawer = (props) => {
  const content = (
    <AnimatePresence initial={props.show}>
      {props.show && (
        <div className={classes.menu}>
          <BackgroundCircle style={props.style.circle.style}></BackgroundCircle>
          <SideDrawerItems style={props.style.side.style}>
            {props.children}
          </SideDrawerItems>
        </div>
      )}
    </AnimatePresence>
  );

  return content;
};

export default SideDrawer;
