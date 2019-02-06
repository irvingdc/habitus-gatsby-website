import React from "react"
import classes from "./Message.module.css"
import { icono10, logo } from "../../images"

export default ({ display, close, title }) =>{
    return (
        <div className={ [classes.container, (display ? classes.displayed : "")].join(" ") }>
            <div className={ classes.background } onClick={ close ? close : ()=>{} }></div>
            <div className={ classes.scrollControl }>
                <div className={ classes.card }>
                    <img src={ icono10 } className={ classes.close } onClick={ close ? close : ()=>{} }/>
                    { title }
                    <img src={ logo } title="logo" alt="logo" className={classes.logo}/>
                </div>
            </div>
        </div>
    )
}