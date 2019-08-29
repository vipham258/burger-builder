import React from "react";
import Ax from "../../hoc/Ax";
import Classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDraw from "../Navigation/SideDrawer/SideDrawer";

const layout = props => (
  <Ax>
    <Toolbar />
    <SideDraw></SideDraw>
    <main className={Classes.Content}>{props.children}</main>
  </Ax>
);

export default layout;
