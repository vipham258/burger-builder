import React from "react";
import Ax from "../../hoc/Ax";
import Classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const layout = props => (
  <Ax>
    <Toolbar />
    <main className={Classes.Content}>{props.children}</main>
  </Ax>
);

export default layout;
