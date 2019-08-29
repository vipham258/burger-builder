import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import css from "./SideDrawer.module.css";

const sideDrawer = props => {
  return (
    <div className={css.SideDrawer}>
      <Logo></Logo>
      <nav>
        <NavigationItems></NavigationItems>
      </nav>
    </div>
  );
};

export default sideDrawer;
