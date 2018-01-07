import React from 'react';
import Auxx from '../../../hoc/Auxx';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(i=>{
      return(
        <li key={i}>
          <span style={{textTransform: 'capitalize'}}>
          {i}</span>: {props.ingredients[i]}
        </li>
      )
    })
  return(
    <Auxx>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to checkout</p>
    </Auxx>
  );
}

export default orderSummary;
