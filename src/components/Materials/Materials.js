import React from "react"
import classes from "./Materials.module.css"
import MaterialBlock from '../MaterialBlock/MaterialBlock'
import Button from "../Button/Button";

export default ({ showdetails, titlestyle }) =>{
    let materials = [
        {
            title: "ACERO AL CARBÓN",
            img: "/static/img/3.jpg",
            description: "Recomendado para uso en interiores, de gran dureza y maleabilidad.",
            thicknesses: [
                { thickness: 1.21, unit: "mm (cal.18)", },
                { thickness: 1.51, unit: "mm (cal.16)", },
                { thickness: 1.89, unit: "mm (cal.14)", },
                { thickness: 2.65, unit: "mm (cal.12)", },
                { thickness: 3.41, unit: "mm (cal.10)", },
                { thickness: 4.76, unit: 'mm (3/16")', },
                { thickness: 6.35, unit: 'mm (1/4")', }
            ],
            finishedStyle: "natural o pintado",
        },
        {
            title: "ACERO INOXIDABLE",
            img: "/static/img/1.jpg",
            description: "De alta duración y resistente a la intemperie. Su gran dureza y bajo nivel de oxidación lo hacen excelente para exteriores.",
            thicknesses: [
                { thickness: 0.91, unit: "mm (cal.20)", },
                { thickness: 1.21, unit: "mm (cal.18)", },
                { thickness: 1.51, unit: "mm (cal.16)", },
                { thickness: 1.89, unit: "mm (cal.14)", },
                { thickness: 2.65, unit: "mm (cal.12)", },
                { thickness: 3.41, unit: "mm (cal.10)", },
            ],
            finishedStyle: "natural",
        },
        {
            title: "ALUMINIO",
            img: "/static/img/2.jpg",
            description: "Para uso en exteriores, de amplia duración y resistente a la intemperie. Menor dureza y peso que el acero inoxinable pero mayor maleabilidad.",
            thicknesses: [
                { thickness: 1.89, unit: "mm (cal.14)", },
                { thickness: 2.65, unit: "mm (cal.12)", },
                { thickness: 3.41, unit: "mm (cal.10)", },
            ],
            finishedStyle: "natural",
        },
        {
            title: "MDF",
            img: "/static/img/4.jpg",
            description: "Un aglomerado fabricado a partir de fibras de maderas y resinas sintéticas comprimidas. Recomendado únicamente para interiores.",
            thicknesses: [
                { thickness: 3, unit: "mm", },
                { thickness: 5.5, unit: "mm", },
                { thickness: 9, unit: "mm", },
                { thickness: 12, unit: "mm", },
                { thickness: 15, unit: "mm", },
                { thickness: 18, unit: "mm", },
            ],
            finishedStyle: "natural o pintado",
        },
        {
            title: "TRIPLAY",
            img: "/static/img/5.jpg",
            description: "Tablero elaborado mediante un proceso de laminado de chapas de madera blanda pegadas unas a otras. Recomendado solamente para interiores.",
            thicknesses: [
                { thickness: 3, unit: "mm", },
                { thickness: 5.5, unit: "mm", },
                { thickness: 9, unit: "mm", },
                { thickness: 12, unit: "mm", },
                { thickness: 15, unit: "mm", },
                { thickness: 18, unit: "mm", },
            ],
            finishedStyle: "natural",
        },
    ]
    return (
        <div className={ classes.container }>
            <h2 style={{ ...titlestyle}}>MATERIALES</h2>
            <div className={ classes.grid }>
                {
                    materials.map((it,index) => (
                        <MaterialBlock 
                            showdetails={ showdetails }
                            key={ index }
                            title={ it.title }
                            img={ it.img }
                            description={ it.description }
                            thicknesses={ it.thicknesses }
                            finishedStyle={ it.finishedStyle }
                        /> 
                    ))
                }
            </div>
            <Button ghost style={{
                fontSize: "15px",
                letterSpacing: "2px",
                padding:"10px 18px",
                margin:"50px auto 0px",
                fontFamily: "GS",
            }}>VER ESPECIFICACIONES</Button>
        </div>
    )
}