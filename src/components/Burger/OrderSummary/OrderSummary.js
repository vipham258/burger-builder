import React from "react";
import Ax from "../../../hoc/Ax";
import Button from "../../UI/Button/Button";

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
      <p>
        <strong>Total price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Ax>
  );
};

export default orderSummary;
