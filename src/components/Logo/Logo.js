import React from "react";
import bearLogo from "../../assets/images/bears.png";
import css from "./Logo.module.css";

const logo = props => (
  <div className={css.Logo}>
    <img src={bearLogo} alt="BearBurger" />
  </div>
);
export default logo;
