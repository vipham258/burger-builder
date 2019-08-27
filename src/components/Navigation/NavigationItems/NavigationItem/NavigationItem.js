import React from "react";
import css from "./NavigationItem.module.css";

const navigationItem = props => (
  <li className={css.navigationItem}>
    <a href={props.link} className={props.active ? css.active : null}>
      {props.children}
    </a>
  </li>
);
export default navigationItem;
