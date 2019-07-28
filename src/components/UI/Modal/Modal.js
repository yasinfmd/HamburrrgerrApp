import React,{Component,Fragment} from 'react'
import BackDrop from '../Backdrop/Backdrop'
import clases from  '../../UI/Modal/Modal.css'


class Modal extends Component{
        constructor(props){
            super(props)
        }

        render() {
            return(
                    <Fragment>

                        <div className="Modal" style={{transofrm:this.props.show?'translateY(0)':"translateY(-100vh)",opacity:this.props.show?'1':'0'}}>
                            {this.props.children}
                        </div>
                           <BackDrop show={this.props.show} clicked={this.props.ModalClose}/>
                    </Fragment>
            )
        }

}


export default Modal;
