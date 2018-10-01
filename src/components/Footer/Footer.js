import React from "react"
import classes from "./Footer.module.css"
import { logoYellow, icono15, icono8  } from '../../images'

export default () =>(
    <div className={ classes.container }>
        <h3>contáctanos y habla con un experto</h3>
        <img src={ logoYellow } title="Logo" alt="Logo"/>
        <p>+ 52 1 (222) 122 8857</p>
        <a href="mailto:info@habitus.com.mx">info@habitus.com.mx</a>
        <div className={ classes.social }>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={ icono15 } title="Facebook" alt="Facebook"/>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={ icono8 } title="Instagram" alt="Instagram"/>
            </a>
        </div>
    </div>
)