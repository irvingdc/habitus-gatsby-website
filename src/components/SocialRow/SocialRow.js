import React from "react"
import classes from "./SocialRow.module.css"
import { icono13, icono14 } from "../../images"

export default ({ style }) => (
    <div className={ classes.social } style={ style }>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={ icono13 } alt="Facebook" title="Facebook"/>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={ icono14 } alt="Instagram" title="Instagram"/>
        </a>
    </div>
)