import React,{Component} from 'react'
import  clases from  '../../../../components/Burger/BuildControls/BuildControl/BuildControl.css'

class BuildControl extends  Component{

    constructor(props) {
        super(props);

    }


    render() {
        return(
            <div className="BuildControl">
                <div className="Label">
                    {this.props.label}
                    <button className="Less" onClick={this.props.removed}>Azalt</button>
                    <button className="More" onClick={this.props.added}>Artır</button>
                </div>
            </div>
        )
    }


}

export  default BuildControl

