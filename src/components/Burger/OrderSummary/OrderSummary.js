import React from "react";
import Ax from "../../../hoc/Ax";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Ax>
      <h3>Your Order</h3>
      <p>
        A bear burger with the following ingredients: "Please eat healthy :p"
      </p>
      <ul> {ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
    </Ax>
  );
};

export default orderSummary;
