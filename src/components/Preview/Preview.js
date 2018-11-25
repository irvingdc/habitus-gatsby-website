import React from "react"
import classes from "./Preview.module.css"
import { icono10, icono11, icono12 } from "../../images"

export default ({ display, close, children, previous, next, scrollable }) =>{
    return (
        <div className={ [classes.container, (display ? classes.displayed : ""), (scrollable ? classes.scrollable : "")].join(" ") }>
            <div className={ classes.background } onClick={ close ? close : ()=>{} }></div>
            <div className={ classes.scrollControl }>
                <div className={ classes.content }>
                    <img src={ icono12 } alt="Derecha" title="Derecha" className={ classes.goRight } onClick={ next }/>
                    <img src={ icono11 } alt="Izquierda" title="Izquierda" className={ classes.goLeft } onClick={ previous }/>
                    <img src={ icono10 } className={ classes.close } onClick={ close ? close : ()=>{} }/>
                    { children }
                </div>
            </div>
        </div>
    )
}