import React, {Component} from 'react';
import Auxx from '../../hoc/Auxx';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}


class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients:{
        salad:0,
        bacon:0,
        cheese:0,
        meat:0
      },
      totalPrice: 4,
      isPurchaseable: false,
      purchasing: false
    };
  }

  addIngredientHandler=(type)=>{
    const oldCount = this.state.ingredients[type];
    let newCount=oldCount+1;
    const updatedIngredients = {
      ...this.state.ingredients
    };

    updatedIngredients[type] = newCount;
    let newPrice = this.state.totalPrice+INGREDIENT_PRICES[type];
    this.setState({
      ingredients:updatedIngredients,
      totalPrice:newPrice
    });
    this.updatePurchasable(updatedIngredients);
  }

  removeIngredientHandler=(type)=>{
    const oldCount = this.state.ingredients[type];
    let newCount=0;
    if(oldCount!==0){
      newCount=oldCount-1;
    }
    const updatedIngredients = {
      ...this.state.ingredients
    };

    updatedIngredients[type] = newCount;
    let newPrice = this.state.totalPrice-INGREDIENT_PRICES[type];
    this.setState({
      ingredients:updatedIngredients,
      totalPrice:newPrice
    });
    this.updatePurchasable(updatedIngredients);
  }

  updatePurchasable(updatedIngredients) {

    const sum = Object.keys(updatedIngredients)
      .map(i=>{
        return updatedIngredients[i];
      })
      .reduce((sum,el)=>{
        return sum + el;
      },0);
      this.setState({isPurchaseable: sum>0});
      console.log("state: "+this.state.isPurchaseable)
  }

  orderClickedHanlder=()=>{
    this.setState({purchasing:true});
  }

  purchaseCancelHandler = () =>{
    this.setState({purchasing: false});
  }

  render () {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for(let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <=0;
    }

    return (
      <Auxx>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
          >
          <OrderSummary
            ingredients={this.state.ingredients}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />

        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          burgerPrice={this.state.totalPrice.toFixed(2)}
          disabled={disabledInfo}
          isPurchaseable={this.state.isPurchaseable}
          orderClicked={this.orderClickedHanlder}
          />
      </Auxx>
    );
  }
}

export default BurgerBuilder;
