import React from "react";
import Aux from "../../hoc/Ax;

const layout = props => (
  <Ax>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>{props.children}</main>
  </Ax>
);

export default layout;
