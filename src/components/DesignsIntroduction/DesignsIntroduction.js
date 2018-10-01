import React from "react"
import classes from "./DesignsIntroduction.module.css"
import { celosia7, icono1, icono2, icono3 } from "../../images"

export default ({ img }) =>(
    <div className={ classes.container }>
        <h2>DISEÑO</h2>
        <p>Diseños pensados especialmente para satisfacer cualquier necesidad que tengas en mente. Además de los diseños existentes podemos fabricar cualquier idea propia</p>
        <div className={ [classes.flex, classes.content].join(' ') }>
            <img src={ celosia7 } alt="Celosia" title="Celosia" style={{ background: "white" }}/>
            <div className={ classes.grid }>
                <div className={ classes.flex }>
                    <img src={ icono1 } alt="Icono" title="Icono"/> 
                    <span>DISEÑOS ÚNICOS</span>
                </div>
                <div className={ classes.flex }>
                    <img src={ icono2 } alt="Icono" title="Icono"/> 
                    <span>FUNCIONALES</span>
                </div>
                <div className={ classes.flex }>
                    <img src={ icono3 } alt="Icono" title="Icono"/> 
                    <span>LA MEJOR CALIDAD</span>
                </div>
            </div>
        </div>
    </div>
)