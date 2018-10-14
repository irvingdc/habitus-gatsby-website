import React from "react"
import classes from "./SocialRow.module.css"
import { icono13, icono14 } from "../../images"

export default ({ style, colorSwitcher }) => (
    <div className={ [classes.social, (colorSwitcher ? classes.colorSwitcher : "")].join(" ") } style={ style }>
        <a href="https://www.facebook.com/Habitus-1085345214958630/" target="_blank" rel="noopener noreferrer">
            <img src={ icono13 } alt="Facebook" title="Facebook"/>
        </a>
        <a href="https://www.instagram.com/habitus.mx/" target="_blank" rel="noopener noreferrer">
            <img src={ icono14 } alt="Instagram" title="Instagram"/>
        </a>
    </div>
)