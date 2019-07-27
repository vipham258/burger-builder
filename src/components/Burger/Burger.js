import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  const transformedIngredients = Object.keys(props.ingredients).map(igkey => {
    const numIngredients = props.ingredients[igkey];
    console.log({ igkey, numIngredients });
    return Array(numIngredients)
      .fill()
      .map((_, i) => {
        console.log(igkey + i);
        return <BurgerIngredient key={igkey + i} type={igkey} />;
      });
  });
  console.log(transformedIngredients);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
