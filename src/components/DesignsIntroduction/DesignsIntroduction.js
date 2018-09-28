import React from "react"
import classes from "./DesignsIntroduction.module.css"

export default ({ img }) =>(
    <div className={ classes.container }>
        <h2>DISEÑO</h2>
        <p>Diseños pensados especialmente para satisfacer cualquier necesidad que tengas en mente. Además de los diseños existentes podemos fabricar cualquier idea propia</p>
        <div className={ [classes.flex, classes.content].join(' ') }>
            <img src="/static/img/celosias/celosia7.svg" alt="Celosia" title="Celosia"/>
            <div className={ classes.grid }>
                <div className={ classes.flex }>
                    <img src="/static/img/icono1.svg" alt="Icono" title="Icono"/> 
                    <span>DISEÑOS ÚNICOS</span>
                </div>
                <div className={ classes.flex }>
                    <img src="/static/img/icono2.svg" alt="Icono" title="Icono"/> 
                    <span>FUNCIONALES</span>
                </div>
                <div className={ classes.flex }>
                    <img src="/static/img/icono3.svg" alt="Icono" title="Icono"/> 
                    <span>LA MEJOR CALIDAD</span>
                </div>
            </div>
        </div>
    </div>
)