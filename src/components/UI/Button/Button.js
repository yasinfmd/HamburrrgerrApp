import React from 'react'
import clases from '../Button/Button.css'

const button = (props)=>(
    <button className="Button Success"
    onClick={props.clicked}    >
        {props.children}
    </button>
)
export  default  button
