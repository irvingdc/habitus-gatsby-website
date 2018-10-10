import React from "react"
import classes from "./Button.module.css"

export default ({ children, ghost, colorSwitch, style, click }) =>(
    <button 
        className={ [classes.button, (ghost ? classes.ghost : ''), (colorSwitch ? classes.colorSwitch : '')].join(' ') } 
        style={ style }
        onClick={ click ? click : ()=>{} }
    >{ children }</button>
)