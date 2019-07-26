import React from "react";
import Ax from "../../hoc/Ax";
import Classes from "./Layout.css";

const layout = props => (
  <Ax>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={Classes.Content}>{props.children}</main>
  </Ax>
);

export default layout;
