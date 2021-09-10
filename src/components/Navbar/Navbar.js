import MainHeader from "./MainHeader";
import classes from "./Navbar.module.css";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import { useState } from "react";
const Navbar = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const closeDrawerHandler = () => {
    setIsDrawerOpen(false);
  };
  const toggleDrawerHandler = () => {
    setIsDrawerOpen((prev) => !prev);
  };
  return (
    <>
      <MainHeader>
        <div className={classes.navNormal}>
          <button className={classes.hamburger} onClick={toggleDrawerHandler}>
            <span style={props.hamStyle}></span>
            <span style={props.hamStyle}></span>
            <span style={props.hamStyle}></span>
          </button>
          <h1 className={classes.title} style={props.titleStyle}>
            EXP|CON
          </h1>
        </div>
        <SideDrawer
          show={isDrawerOpen}
          onClick={closeDrawerHandler}
          style={props.NavStyle}
        >
          <nav>
            <NavLinks style={props.NavStyle}></NavLinks>
          </nav>
        </SideDrawer>
      </MainHeader>
    </>
  );
};

export default Navbar;
