import { NavLink } from "react-router-dom";
import classes from "./NavLinks.module.css";
import { useState } from "react";
const NavLinks = (props) => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  let style1 = hover1 ? props.style.side.offStyle : props.style.side.onStyle;
  let style2 = hover2 ? props.style.side.offStyle : props.style.side.onStyle;
  let style3 = hover3 ? props.style.side.offStyle : props.style.side.onStyle;
  const mouseEnterHandler1 = () => {
    setHover1(true);
  };
  const mouseLeaveHandler1 = () => {
    setHover1(false);
  };
  const mouseEnterHandler2 = () => {
    setHover2(true);
  };
  const mouseLeaveHandler2 = () => {
    setHover2(false);
  };
  const mouseEnterHandler3 = () => {
    setHover3(true);
  };
  const mouseLeaveHandler3 = () => {
    setHover3(false);
  };
  return (
    <ul className={classes.links}>
      <li onMouseEnter={mouseEnterHandler1} onMouseLeave={mouseLeaveHandler1}>
        <NavLink style={style1} to="/">
          WHAT IS IT
        </NavLink>
      </li>
      <li onMouseEnter={mouseEnterHandler2} onMouseLeave={mouseLeaveHandler2}>
        <NavLink style={style2} to="/">
          PERKS
        </NavLink>
      </li>
      <li onMouseEnter={mouseEnterHandler3} onMouseLeave={mouseLeaveHandler3}>
        <NavLink style={style3} to="/">
          PRICING
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
