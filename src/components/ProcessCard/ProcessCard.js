import React from "react"
import classes from "./ProcessCard.module.css"

export default ({ img, title, description }) => (
    <div className={ classes.container }>
        <div>
            <img src={ img } title="Icono" alt="Icono"/>
        </div>
        <h3>{ title }</h3>
        <p>{ description }</p>
    </div>
)