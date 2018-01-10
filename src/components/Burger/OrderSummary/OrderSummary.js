import React from 'react';
import Auxx from '../../../hoc/Auxx';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const clicky=()=>{
    alert();
  }
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
      <p><strong>{props.price}</strong></p>
      <p>Continue to checkout</p>
      <Button
        btnType="Danger"
        clicked={props.cancelled}>CANCEL</Button>
      <Button
        btnType='Success'
        clicked={props.continued}>CONTINUE</Button>
    </Auxx>
  );
}

export default orderSummary;
