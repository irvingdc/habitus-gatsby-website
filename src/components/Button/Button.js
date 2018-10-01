import React from "react"
import classes from "./Button.module.css"

export default ({ children, ghost, style, click }) =>(
    <button 
        className={ [classes.button, (ghost ? classes.ghost : '')].join(' ') } 
        style={ style }
        onClick={ click ? click : ()=>{} }
    >{ children }</button>
)