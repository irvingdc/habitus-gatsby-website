import React, { Component } from "react"
import classes from "./Materials.module.css"
import MaterialBlock from '../MaterialBlock/MaterialBlock'
import MaterialsDialog from "../MaterialsDialog/MaterialsDialog"
import Button from "../Button/Button"
import { img1, img2, img3, img4, img5 } from "../../images"
import Header from "../Header/Header";

class Materials extends Component {
    state = {
        displayMaterialsDialog: false
    }
    materials = [
        {
            title: "ACERO AL CARBÓN",
            img: img3,
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
            finishedstyle: "natural o pintado",
        },
        {
            title: "ACERO INOXIDABLE",
            img: img1,
            description: "De alta duración y resistente a la intemperie. Su gran dureza y bajo nivel de oxidación lo hacen excelente para exteriores.",
            thicknesses: [
                { thickness: 0.91, unit: "mm (cal.20)", },
                { thickness: 1.21, unit: "mm (cal.18)", },
                { thickness: 1.51, unit: "mm (cal.16)", },
                { thickness: 1.89, unit: "mm (cal.14)", },
                { thickness: 2.65, unit: "mm (cal.12)", },
                { thickness: 3.41, unit: "mm (cal.10)", },
            ],
            finishedstyle: "natural",
        },
        {
            title: "ALUMINIO",
            img: img2,
            description: "Para uso en exteriores, de amplia duración y resistente a la intemperie. Menor dureza y peso que el acero inoxinable pero mayor maleabilidad.",
            thicknesses: [
                { thickness: 1.89, unit: "mm (cal.14)", },
                { thickness: 2.65, unit: "mm (cal.12)", },
                { thickness: 3.41, unit: "mm (cal.10)", },
            ],
            finishedstyle: "natural",
        },
        {
            title: "MDF",
            img: img4,
            description: "Un aglomerado fabricado a partir de fibras de maderas y resinas sintéticas comprimidas. Recomendado únicamente para interiores.",
            thicknesses: [
                { thickness: 3, unit: "mm", },
                { thickness: 5.5, unit: "mm", },
                { thickness: 9, unit: "mm", },
                { thickness: 12, unit: "mm", },
                { thickness: 15, unit: "mm", },
                { thickness: 18, unit: "mm", },
            ],
            finishedstyle: "natural o pintado",
        },
        {
            title: "TRIPLAY",
            img: img5,
            description: "Tablero elaborado mediante un proceso de laminado de chapas de madera blanda pegadas unas a otras. Recomendado solamente para interiores.",
            thicknesses: [
                { thickness: 3, unit: "mm", },
                { thickness: 5.5, unit: "mm", },
                { thickness: 9, unit: "mm", },
                { thickness: 12, unit: "mm", },
                { thickness: 15, unit: "mm", },
                { thickness: 18, unit: "mm", },
            ],
            finishedstyle: "natural",
        },
    ]

    showMaterialsTable = () => {
        this.setState({ displayMaterialsDialog: true })
    }
    hideMaterialsTable = () => {
        this.setState({ displayMaterialsDialog: false })
    }
    render(){
        let showdetails = this.props.showdetails, titlestyle = this.props.titlestyle
        return (
            <div className={ classes.container }>
                <MaterialsDialog display={ this.state.displayMaterialsDialog } close={ this.hideMaterialsTable }/>
                <Header style={{ ...titlestyle, margin: "30px auto 50px", fontSize: "30px"}}>MATERIALES</Header>
                <div className={ classes.grid }>
                    {
                        this.materials.map((it,index) => (
                            <MaterialBlock 
                                showdetails={ showdetails }
                                key={ index }
                                title={ it.title }
                                img={ it.img }
                                description={ it.description }
                                thicknesses={ it.thicknesses }
                                finishedstyle={ it.finishedstyle }
                            /> 
                        ))
                    }
                </div>
                <Button ghost click={ this.showMaterialsTable } style={{
                    fontSize: showdetails ? "13px" : "15px",
                    letterSpacing: "2px",
                    padding:"10px 18px",
                    margin: showdetails ? "30px auto 20px" : "50px auto 0px",
                    fontFamily: "GS",
                }}>{ showdetails ? "VER TABLA DE COMPARACION" : "VER ESPECIFICACIONES"}</Button>
            </div>
        )
    }
}
export default Materials