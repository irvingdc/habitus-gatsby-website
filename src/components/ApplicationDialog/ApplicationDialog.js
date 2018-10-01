import React from "react"
import classes from "./ApplicationDialog.module.css"
import Dialog from "../Dialog/Dialog"
import DetailsTable from "../DetailsTable/DetailsTable"
import { img12, img8, img7, img20, img15, img16, img6, img18 } from "../../images"
import Header from "../Header/Header";

export default ({ display, close, application }) => {
    let table1 = {
        head: ["", "Aluminio", "Acero Inoxidable", "Acero Al Carbón", "MDF", "Triplay"],
        content: [
            ["DUREZA", {val:false}, {val:true}, {val:true}, {val:true}, {val:true}],
            ["MALEABILIDAD", {val:true}, {val:false}, {val:true}, {val:false}, {val:false}],
            ["PESO", {val:"bajo"}, {val:"alto"}, {val:"alto"}, {val:"medio"}, {val:"medipo"}],
            ["SOLDEABILIDAD", {val:false}, {val:true}, {val:true}, {val:false}, {val:false}],
            ["MAQUINABILIDAD", {val:"alta"}, {val:"baja"}, {val:"media"}, {val:"alta"}, {val:"media"}],
            ["ACABADO", {val:"natural"}, {val:"natural"}, {val:"natural/ pintado"}, {val:"natural/ pintado"}, {val:"natural/ pintado"}],
        ]
    }
    let table2 = {
        head: ["", "Aluminio", "Acero Inoxidable", "Acero Al Carbón"],
        content: [
            ["DUREZA", {val:false}, {val:true}, {val:true}],
            ["MALEABILIDAD", {val:true}, {val:false}, {val:true}],
            ["PESO", {val:"baja"}, {val:"alta"}, {val:"alta"}],
            ["SOLDEABILIDAD", {val:false}, {val:true}, {val:true}],
            ["MAQUINABILIDAD", {val:"alta"}, {val:"baja"}, {val:"media"}],
            ["ACABADO", {val:"natural"}, {val:"natural"}, {val:"pintado"}],
        ]
    }
    let list = {
        fachadas: {
            title: "FACHADAS",
            img: img12,
            subtitle: "EMBELLECE TU EXTERIOR CON FACHADAS",
            description: "Plasma tu creatividad a través de los diseños que te ofrece Habitus para cubrir espacios en una fachada o simplemente para generar un ambiente con estilo.",
            data: table2
        },
        rejas:{
            title: "REJAS",
            img: img8,
            subtitle: "HAZ DE TU SEGURIDAD UN ESTILO",
            description: "Con Habitus puedes dotar de privacidad y seguridad un espacio a través de nuestros diseños únicos en celosías.",
            data: table2
        },
        puertas_y_portones:{
            title: "PUERTAS Y PORTONES",
            img: img7,
            subtitle: "PROTEGE TU ENTRADA CON ESTILO",
            description: "Con Habitus puedes plasmar tu creatividad a través de celosías sin dejar de un lado tu privacidad y seguridad.",
            data: table2
        },
        pergolas:{
            title: "PÉRGOLAS",
            img: img20,
            subtitle: "CREA SOMBRAS ÚNICAS A TRAVÉS DE PÉRGOLAS",
            description: "Armoniza el exterior de un espacio con el estilo que deseas a través de celosías que permiten la difusión de la luz solar de acuerdo a tus necesidades.",
            data: table2
        },
        divisores:{
            title: "DIVISIONES",
            img: img15,
            subtitle: "ELIMINA TUS MUROS CON CELOSÍAS",
            description: "Con Habitus puedes crear divisiones, brindando funcionalidad y un toque de belleza a un espacio, permitiendo luz y visibilidad a otras áreas.",
            data: table1
        },
        barandales:{
            title: "BARANDALES",
            img: img16,
            subtitle: "AÑADE CREATIVIDAD A TU SEGURIDAD",
            description: "Permite que tu camino marque la diferencia con Habitus, y brinda de seguridad y creatividad un ambiente.",
            data: table1
        },
        tragaluces_y_plafones:{
            title: "TRAGALUCES Y PLAFONES",
            img: img6,
            subtitle: "CREA EFECTOS ÚNICOS DE LUZ CON TRAGALUCES",
            description: "Habitus te ofrece una variedad de diseños con los que puedes el paso de luz solar de acuerdo a tus necesidades, creando un ambiente agradable.",
            data: table1
        },
        decoracion:{
            title: "DIVISIONES",
            img: img18,
            subtitle: "ELIMINA TUS MUROS CON CELOSÍAS",
            description: "Con Habitus puedes crear divisiones, brindando funcionalidad y un toque de belleza a un espacio, permitiendo luz y visibilidad a otras áreas.",
            data: table1
        },
    }
    return (
        <Dialog 
            display={ display } 
            title={ list[application].title } 
            close={ close } 
            padding="55px 35px 35px"
            img={ list[application].img }
        >
            <Header style={{ 
                fontSize:"20px", 
                fontWeight: "900", 
                fontFamily: "GS",
                letterSpacing: "0px",
                maxWidth: "300px",
                margin: "0px auto 20px"
            }}>{ list[application].subtitle }</Header>
            <p className={ classes.description }>{ list[application].description }</p>
            <DetailsTable data={ list[application].data }/>
        </Dialog>
    )
}