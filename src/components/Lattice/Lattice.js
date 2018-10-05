import React from "react"
import classes from "./Lattice.module.css"

export default ({ img, selected, selectable }) =>(
    <div className={ [classes.container, (selected ? classes.selected : ""), (selectable ? classes.selectable : "")].join(' ') }>
        <img src={ img } title="Celosia" alt="Celosia"/>
    </div>
)