import React, {Component, Fragment} from 'react'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import  Spinner from '../../components/UI/Spinner/Spinner'
import  axios from '../../axios-orders'
import Msg from  '../../components/UI/SweetAlert/Alert'
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
            loading:false,
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
        this.orderBurger=this.orderBurger.bind(this)
    }
    componentDidMount() {
        axios.get("ingredients.json").then((res)=>{
            debugger
            this.setState({
                ingredients:res.data
            })
        }).catch(err=>{
            Msg("Hata","Network Hatası","Tamam")
        })
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
        this.setState({
            purchased:false
        })
    }
    orderBurger(){
        this.setState({
            loading:true
        })
        let hamburgerData={
            ingredients:this.state.ingredients,
            price:this.state.totalPrice,
            customer:{
                name:"Yasin",
                address:{
                    street:"Test 1",
                    zipCode:"2153125",
                    countr:"Turkey"
                },
                email:"test@test.com"
            }
        }
        axios.post("/orders.json",hamburgerData).then((res)=>{
            this.setState({
                loading:false,
                ingredients: {
                    salad: 0,
                    bacon: 0,
                    cheese: 0,
                    meat: 0
                },
                purchasable:false,
                purchased:false,
                totalPrice:4
            })
            Msg("Siparişiniz Başarıyla Oluşturuldu","Fişiniz Yazdırılıyor","success")

        }).catch(err=>{
            Msg("Hata","Network Hatası","error")
            this.setState({
                purchased:false,
                loading:false,
                ingredients: {
                    salad: 0,
                    bacon: 0,
                    cheese: 0,
                    meat: 0
                },
                purchasable:false,
                totalPrice:4
            })
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
        let orderSummary=null
         orderSummary=                    <OrderSummary
            canceled={this.cancel}
            complate={this.orderBurger}
            ingredients={this.state.ingredients} totalPrice={this.state.totalPrice}></OrderSummary>
        if(this.state.loading){
            orderSummary=     <Spinner/>
        }
        return (
            <Fragment>

                <Modal show={this.state.purchased} ModalClose={this.closeModal}>

                    {orderSummary}



                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls   ordered={this.purcase} purchasable={this.state.purchasable} ingredientAdded={this.addIngredient} price={this.state.totalPrice}  removeİngredient={this.removeIngredient}/>
            </Fragment>
        )
    }
}
export default BurgerBuilder
