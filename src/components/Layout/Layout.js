import React,{Fragment,Component} from 'react'
import clases from  "../../components/Layout/Layout.css"
import  Toolbar from '../../components/Navigation/Toolbar/Toolbar'
class Layout extends  Component{
    constructor(props){
        super(props)

    }
    render() {
        return(
            <Fragment>
                <Toolbar/>
            <main className="Content">
                {this.props.children}
                </main>
            </Fragment>
        )
    }


}
export  default  Layout
