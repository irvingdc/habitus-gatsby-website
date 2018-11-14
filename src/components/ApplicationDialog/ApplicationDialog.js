import React from "react"
import classes from "./ApplicationDialog.module.css"
import Dialog from "../Dialog/Dialog"
import { 
    img13, 
    img8, 
    img7, 
    img11, 
    img15, 
    img16, 
    img6, 
    img22, 
    balcon_h,
    decoracion_h,
    division_h,
    fachada_h,
    pergola_h,
    puerta_h,
    reja_h,
    tragaluz_h
} from "../../images"
import Header from "../Header/Header";

export default ({ display, close, application, selectApplication }) => {
    
    if(typeof window === "undefined") return <div></div>
    
    let list = {
        fachadas: {
            title: "FACHADAS",
            img: img13,
            subtitle: "EMBELLECE TU EXTERIOR CON FACHADAS",
            description: "Plasma tu creatividad a través de nuestras celosías, logrando cambiar y destacar tu fachada con un estilo único.",
            detailedImage: fachada_h
        },
        rejas:{
            title: "REJAS",
            img: img8,
            subtitle: "HAZ DE TU SEGURIDAD UN ESTILO",
            description: "Con celosías Habitus puedes dotar de privacidad y seguridad un espacio a través de diseños personalizados y únicos.",
            detailedImage: reja_h
        },
        puertas_y_portones:{
            title: "PUERTAS Y PORTONES",
            img: img7,
            subtitle: "PROTEGE TU ENTRADA CON ESTILO",
            description: "Con nuestras celosías puedes plasmar tu creatividad sin dejar de un lado tu privacidad y seguridad.",
            detailedImage: puerta_h
        },
        pergolas:{
            title: "PÉRGOLAS",
            img: img11,
            subtitle: "CREA SOMBRAS ÚNICAS A TRAVÉS DE PÉRGOLAS",
            description: "Armoniza el exterior de un espacio con el estilo que deseas, a través de celosías que permiten la difusión de la luz solar de acuerdo a tus necesidades.",
            detailedImage: pergola_h
        },
        divisores:{
            title: "DIVISIONES",
            img: img15,
            subtitle: "ELIMINA TUS MUROS CON CELOSÍAS",
            description: "Celosías Habitus permite crear divisiones, brindando funcionalidad y un toque de belleza a un espacio, permitiendo luz y visibilidad a otras áreas.",
            detailedImage: division_h
        },
        barandales:{
            title: "BARANDALES",
            img: img16,
            subtitle: "AÑADE CREATIVIDAD A TU SEGURIDAD",
            description: "Permite que tus balcones, pasillos y escaleras sean marcados con nuestras celosías, brindando seguridad y creatividad a tu ambiente.",
            detailedImage: balcon_h
        },
        tragaluces_y_plafones:{
            title: "TRAGALUCES Y PLAFONES",
            img: img6,
            subtitle: "CREA EFECTOS ÚNICOS DE LUZ CON TRAGALUCES",
            description: "Celosías Habitus te ofrece una variedad de diseños con los que puedes crear tragaluces para ceder el paso de luz de acuerdo a tus necesidades.",
            detailedImage: tragaluz_h
        },
        decoracion:{
            title: "DECORACIÓN",
            img: img22,
            subtitle: "AÑADE DETALLES QUE MARQUEN LA DIFERENCIA",
            description: "La imaginación es tu única limitante con Habitus, incorpora celosías en interiores donde quieras destacar un espacio de estilo y belleza.",
            detailedImage: decoracion_h
        },
    }

    let nextApplication = () => {
        let keys = Object.keys(list)
        let length = keys.length
        let currentIndex = keys.findIndex(it => application === it)
        let nextIndex = 0
        if(currentIndex === length - 1){
            nextIndex = 0
        }
        else {
            nextIndex = currentIndex + 1
        }
        selectApplication(keys[nextIndex])
    }
    let previousApplication = () => {
        let keys = Object.keys(list)
        let length = keys.length
        let currentIndex = keys.findIndex(it => application === it)
        let nextIndex = 0
        if(currentIndex === 0){
            nextIndex = length - 1
        }
        else {
            nextIndex = currentIndex - 1
        }
        selectApplication(keys[nextIndex])
    }
    return (
        <Dialog 
            showbutton
            showcontrols
            display={ display } 
            title={ list[application].title } 
            close={ close } 
            img={ list[application].img }
            next={ nextApplication }
            previous={ previousApplication }
        >
            <Header style={{ 
                fontSize:"18px", 
                fontWeight: "900", 
                fontFamily: "GS",
                letterSpacing: "0px",
                maxWidth: "300px",
                lineHeight: "26px",
                margin: "0px auto 10px"
            }}>{ list[application].subtitle }</Header>
            <p className={ classes.description }>{ list[application].description }</p>
            <img src={list[application].detailedImage} className={classes.detailedImage}/>
        </Dialog>
    )
}