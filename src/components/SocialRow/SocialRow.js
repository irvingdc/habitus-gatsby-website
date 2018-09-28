import React from "react"
import classes from "./SocialRow.module.css"

export default ({ style }) => (
    <div className={ classes.social } style={ style }>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/static/img/icono13.svg" alt="Facebook" title="Facebook"/>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/static/img/icono14.svg" alt="Instagram" title="Instagram"/>
        </a>
    </div>
)