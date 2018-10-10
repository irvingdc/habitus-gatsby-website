import React from "react"
import classes from "./Introduction.module.css"
import SocialRow from "../SocialRow/SocialRow"
import { img18 } from "../../images"

export default () => (
    <div className={ classes.container }>
        <div className={ classes.text }>
            <h1>AMBIENTES<br/>QUE DESTACAN</h1>
            <p><span>HABITUS</span> pone a tu alcance <b>soluciones</b> en arquitectura e interiorismo en forma de <b>celosías y páneles</b> detalladamente <b>diseñados</b>, ideales para llenar de vida un espacio o cualquier proyecto.</p>
        </div>
        <div className={ classes.welcomeImage }>
            <img src={ img18 } alt="Ejemplo" title="Ejemplo"/>
        </div>
        <SocialRow colorSwitcher/>
    </div>
)