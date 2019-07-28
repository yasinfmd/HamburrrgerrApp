import React from 'react'

import clases from  '../../UI/Backdrop/BackDrop.css'

const backDrop= (props)=>(
    props.show?<div className="Backdrop" onClick={props.clicked}></div>:null
)
export default backDrop;
