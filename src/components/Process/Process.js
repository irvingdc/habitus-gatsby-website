import React from "react"
import classes from "./Process.module.css"
import ProcessCard from "../ProcessCard/ProcessCard"
import { icono4, icono5, icono6, icono7 } from "../../images"

export default () => {
    let elements = [
        {
            title: "DISEÑO",
            description: "Determinar el uso y aplicación de tu panel.",
            img: icono5,
        },
        {
            title: "APLICACIÓN",
            description: <span>Escoger o subir diseño. Formatos aceptados: <br/>PDF, AI ó DWG</span>,
            img: icono4,
        },
        {
            title: "MATERIAL",
            description: "Escoger material, dimensiones y cantidad de paneles.",
            img: icono6,
        },
        {
            title: "PERSONALIZAR",
            description: "Adapta tu celosía a tu proyecto planeado.",
            img: icono7,
        },
    ]
    return (
        <div className={ classes.container }>
            <h2>NUESTRO PROCESO</h2>
            <div className={ classes.cards }>
            {
                elements.map((it,index)=>(
                    <ProcessCard 
                        key={ index }
                        title={ it.title }
                        description={ it.description }
                        img={ it.img }
                    />
                ))
            }
            </div>
        </div>
    )
}