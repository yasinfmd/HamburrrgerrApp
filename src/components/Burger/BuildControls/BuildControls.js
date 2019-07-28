import  React  from  'react'
import clases from '../../../components/Burger/BuildControls/BuildControls.css'
import BuildControl from '../BuildControls/BuildControl/BuildControl'
const controls =[
    {
        label:"Salata", type:"salad"
    },
    {
        label:"Salam", type:"bacon"
    },
    {
        label:"Peynir", type:"cheese"
    },
    {
        label:"Et", type:"meat"
    },

]
const buildControls=(props)=>(
    <div className="BuildControls">
        <p> Hamburger Ücreti : <strong> {props.price.toFixed(2)} </strong></p>
     {
         controls.map(ctrl=>(
            <BuildControl  added={()=>props.ingredientAdded(ctrl.type)} removed={()=>props.removeİngredient(ctrl.type)}   key={ctrl.label} label={ctrl.label} />
        ))
    }
    <button disabled={!props.purchasable}  onClick={props.ordered} className="OrderButton">Sipariş Ver</button>
</div>
)

export  default  buildControls;
