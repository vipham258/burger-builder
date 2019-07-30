import React from "react";
import css from "./BuildControl.module.css";

const buildControl = props => {
  return (
    <div>
      <div className={css.Label}>{props.label}</div>
      <button
        className={css.Less}
        onClick={props.removed}
        disabled={props.disabled}
      >
        Less
      </button>
      <button className={css.More} onClick={props.added}>
        More
      </button>
    </div>
  );
};

export default buildControl;
