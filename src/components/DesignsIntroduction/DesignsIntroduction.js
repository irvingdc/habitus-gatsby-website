import React from "react"
import classes from "./DesignsIntroduction.module.css"
import { icono1, icono2, icono3, height, width } from "../../images"

export default ({ lattice }) =>(
    <div className={ classes.container }>
        <h2>DISEÑO</h2>
        <p>Diseños pensados especialmente para satisfacer cualquier necesidad que tengas en mente. Además de los diseños existentes podemos fabricar cualquier idea propia</p>
        <div className={ [classes.flex, classes.content].join(' ') }>
        <img src={ height } alt="Altura" title="Altura" style={{ background: "white" }} className={ classes.height }/>
        <img src={ width } alt="Anchura" title="Anchura" style={{ background: "white" }} className={ classes.width }/>
            <img src={ lattice } alt="Celosia" title="Celosia" style={{ background: "white" }} className={ classes.img }/>
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