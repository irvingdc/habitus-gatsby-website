import React, { Component } from "react"
import classes from "./BlogSideBar.module.css"
import { icono13, icono14 } from '../../images'

export default () => (
    <div className={ classes.container }>
        <div className={ classes.topics }>
            <h3>TEMAS</h3>
            <ul>
                <li>Diseño de interiores</li>
                <li>Decoración</li>
                <li>Materiales de decoración</li>
                <li>Tendencias mundiales</li>
            </ul>
        </div>
        <div className={ classes.social }>
            <p>Síguenos en Redes</p>
            <div>
                <a href="https://www.facebook.com/Habitus-1085345214958630/" target="_blank" rel="noopener noreferrer">
                    <img src={ icono13 } alt="Facebook" title="Facebook"/>
                </a>
                <a href="https://www.instagram.com/habitus.mx/" target="_blank" rel="noopener noreferrer">
                    <img src={ icono14 } alt="Instagram" title="Instagram"/>
                </a>
            </div>
        </div>
    </div>
)