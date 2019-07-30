import React from "react";
import css from "./BuildControl.module.css";

const buildControl = props => {
  return (
    <div>
      <div className={css.Label}>{props.label}</div>
      <button className={css.Less}>Less</button>
      <button className={css.More}>More</button>
    </div>
  );
};

export default buildControl;
