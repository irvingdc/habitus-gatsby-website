import React from "react"
import classes from "./Footer.module.css"

export default () =>(
    <div className={ classes.container }>
        <h3>contáctanos y habla con un experto</h3>
        <img src="/static/img/logo-yellow.png" title="Logo" alt="Logo"/>
        <p>+ 52 1 (222) 122 8857</p>
        <a href="mailto:info@habitus.com.mx">info@habitus.com.mx</a>
        <div className={ classes.social }>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/static/img/icono15.svg" title="Facebook" alt="Facebook"/>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/static/img/icono8.svg" title="Instagram" alt="Instagram"/>
            </a>
        </div>
    </div>
)