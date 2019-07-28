import React, {Component, Fragment} from 'react'
import Button from '../../UI/Button/Button'
class OrderSummary extends  Component{
        constructor(props){
            super(props)
        }
        render() {
            const ingredientSummary=Object.keys(this.props.ingredients)
                .map((key,i)=>{
                    let names;
                    switch (key) {
                        case ("salad"):
                            names="Salata"
                            break;
                        case ("bacon"):
                            names="Salam"
                            break;
                        case ("meat"):
                            names="Et"
                            break
                        case ("cheese"):
                            names="Peynir"
                            break
                    }
                    return <li key={i}><span style={{textTransform:'capitalize'}}> {names} </span> :  {this.props.ingredients[key]}</li>
                })
            return(
                <Fragment>
                    <h3>Siparişiniz</h3>

                    <p>Siparişinizin İçerikleri : </p>
                    <ul>
                        {ingredientSummary}

                    </ul>

                    <p>Siparişin Toplam Ücreti : {this.props.totalPrice}</p>
                    <p>Siparişini Kontrol Et ? </p>

                    <Button clicked={this.props.canceled}>
                    Vazgeç
                    </Button>
                    <Button>
                        Siparişi Tamamla
                    </Button>
                </Fragment>
            )
        }
}
export default OrderSummary
