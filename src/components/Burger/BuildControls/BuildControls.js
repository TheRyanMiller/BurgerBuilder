import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl';

const controls = [
  {label: 'Salad', type:'salad'},
  {label: 'Bacon', type:'bacon'},
  {label: 'Cheese', type:'cheese'},
  {label: 'Meat', type:'meat'}
]

const buildControls = (props) => (
  <div className={classes.BuildControls}>
  <p>Current Price: <strong>{props.burgerPrice}</strong></p>
    {controls.map(ctrl=>{
      return (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          type={ctrl.type}
          addIngredient={props.addIngredient}
          removeIngredient={props.removeIngredient}
          disabled={props.disabled[ctrl.type]} />
      )
    })}
    <button
      disabled={!props.isPurchaseable}
      className={classes.OrderButton}
      onClick={props.orderClicked}
    >
        ORDER NOW
    </button>
  </div>
);

export default buildControls;
