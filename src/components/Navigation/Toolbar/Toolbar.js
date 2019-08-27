import React from "react";
import css from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = props => (
  <header className={css.Toolbar}>
    <div>MENU</div>
    <Logo />
    <NavigationItems />
  </header>
);

export default toolbar;
