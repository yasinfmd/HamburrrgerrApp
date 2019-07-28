import React,{Fragment,Component} from 'react'
import BurgerIngredient from  '../../components/Burger/BurgerIngredient/BurgerIngredient'
import clases from '../../components/Burger/Burger.css'
class Burger extends  Component{
    constructor(props){
        super(props)
    }
    render() {
        debugger
        let burgers=Object.keys(this.props.ingredients)
        .map(key=>{
            debugger
            let arr=[]
            for (let i = 0; i <this.props.ingredients[key] ; i++) {
                arr.push(i)
            }
            return arr.map((_,i)=>{
              return  <BurgerIngredient key={key+i} type={key}/>
            })
        }).reduce((arr,el)=>{
                return arr.concat(el)
            })
        if(burgers.length===0){
            burgers=<p>Lütfen Yiyecek Seçiniz</p>
        }
        return(
            <Fragment>
                <div className="Burger">
                    <BurgerIngredient type="bread-top"/>
                    {burgers}
                    <BurgerIngredient type="bread-bottom"/>

                </div>
            </Fragment>
        )
    }


}
export  default  Burger
