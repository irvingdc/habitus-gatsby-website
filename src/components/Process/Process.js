import React from "react"
import classes from "./Process.module.css"
import ProcessCard from "../ProcessCard/ProcessCard"
import { icono4, icono5, icono6, icono7 } from "../../images"

export default () => {
    let elements = [
        {
            title: "APLICACIÓN",
            description: "Seleccionar aplicación y uso exterior o interior.",
            img: icono5,
        },
        {
            title: "DISEÑO",
            description: "Escoger o subir diseño. Formatos aceptados: PDF,AIorDWG",
            img: icono4,
        },
        {
            title: "MATERIAL",
            description: "Escoger material, dimesiones y cantidad",
            img: icono6,
        },
        {
            title: "PERSONALIZAR",
            description: "Personalizar tu proyecto con un asesor de Habitus",
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