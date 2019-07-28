import React, {Component, Fragment} from 'react'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
const Prices={
    salad:0.5,
    cheese:0.8,
    meat:1.5,
    bacon:0.85
}

class BurgerBuilder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0

            },
            totalPrice:4,
            purchasable:false,
            purchased:false
        }
        this.addIngredient=this.addIngredient.bind(this)
        this.cancel=this.cancel.bind(this)
        this.purcase=this.purcase.bind(this)
        this.removeIngredient=this.removeIngredient.bind(this)
        this.updatePurchase=this.updatePurchase.bind(this)
        this.closeModal=this.closeModal.bind(this)
    }
    updatePurchase(){
        const ingredients={
            ...this.state.ingredients
        }
        const sum=Object.keys(ingredients).map(key=>{
            return ingredients[key]
        }).reduce((sum,el)=>{
            return sum+el
        },0)
        this.setState({
            purchasable:sum>0
        })
    }
    addIngredient(type) {
        debugger
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1
        const updatedIngredients=this.state.ingredients
        const priceAdded=Prices[type]
        const oldPrice=this.state.totalPrice
        const newPrice=oldPrice+priceAdded
        updatedIngredients[type]=updatedCount
        this.setState({
            totalPrice:newPrice,
            ingredients:updatedIngredients,
        })
        this.updatePurchase()
    }
    purcase(){
            this.setState({
                purchased:true
            })
    }
    closeModal(){
        this.setState({
            purchased:false
        })
    }
    cancel(){
            alert("Vazgeçtin")
        this.setState({
            purchased:false
        })
    }
    removeIngredient(type) {
        const oldCount = this.state.ingredients[type]
        if(oldCount!==0){
            var updatedCount = oldCount - 1
            var oldPrice=this.state.totalPrice
            var priceAdded=Prices[type]
            var newPrice=oldPrice-priceAdded
            const updatedIngredients=this.state.ingredients
            const priceLesses=Prices[type]

            updatedIngredients[type]=updatedCount
            this.setState({
                totalPrice:newPrice,
                ingredients:updatedIngredients
            })
            this.updatePurchase()
        }
    }
    render() {
        return (
            <Fragment>

                <Modal show={this.state.purchased} ModalClose={this.closeModal}>


                    <OrderSummary
                        canceled={this.cancel}
                        ingredients={this.state.ingredients} totalPrice={this.state.totalPrice}></OrderSummary>


                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls   ordered={this.purcase} purchasable={this.state.purchasable} ingredientAdded={this.addIngredient} price={this.state.totalPrice}  removeİngredient={this.removeIngredient}/>
            </Fragment>
        )
    }
}
export default BurgerBuilder
