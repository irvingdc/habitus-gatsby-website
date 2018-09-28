import React from "react"
import classes from "./Process.module.css"
import ProcessCard from "../ProcessCard/ProcessCard";

export default () => {
    let elements = [
        {
            title: "APLICACIÓN",
            description: "Seleccionar aplicación y uso exterior o interior.",
            img: "/static/img/icono5.png",
        },
        {
            title: "DISEÑO",
            description: "Escoger o subir diseño. Formatos aceptados: PDF,AIorDWG",
            img: "/static/img/icono4.png",
        },
        {
            title: "MATERIAL",
            description: "Escoger material, dimesiones y cantidad",
            img: "/static/img/icono6.png",
        },
        {
            title: "PERSONALIZAR",
            description: "Personalizar tu proyecto con un asesor de Habitus",
            img: "/static/img/icono7.png",
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