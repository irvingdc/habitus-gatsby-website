import React from "react"
import classes from "./MaterialBlock.module.css"

export default ({ showDetails, title, img, description, thicknesses, finishedStyle }) =>(
    <div className={ classes.container }>  
        <h3>{ title }</h3>
        <div className={ classes.img } style={{
            background:`url(${img}) center center / cover no-repeat`,
        }}></div>
    </div>
)