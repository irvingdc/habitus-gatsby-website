import React from "react"
import classes from "./Lattice.module.css"

export default ({ img, selected, model }) =>(
    <div className={ [classes.container, (selected ? classes.selected : null)].join(' ') }>
        <img src={ img } title="Celosia" alt="Celosia"/>
    </div>
)