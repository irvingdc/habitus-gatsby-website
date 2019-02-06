import React from "react"
import classes from "./ConfirmationMessage.module.css"
import Header from "../Header/Header"
import Button from "../Button/Button"
import { icono10, logo, facebook, instagram  } from '../../images'
import { Link } from "gatsby";

export default ({ display, close }) =>{
    
    if(typeof window === "undefined") return <div></div>

    let headerStyle = window.innerWidth < 770 
        ? {letterSpacing: "4px", fontSize: "16px", margin: "10px 0px"} 
        : {letterSpacing: "11px", fontSize: "18px", margin: "10px"}

    let buttonstyle = window.innerWidth < 770
        ? { width: "fit-content", margin: "auto", padding: "7px", fontSize: "18px" }
        : { width: "fit-content", margin: "auto", padding: "10px" }
    
    return (
        <div className={ [classes.container, (display ? classes.displayed : "")].join(" ") }>
            <div className={ classes.background } onClick={ close ? close : ()=>{} }></div>
            <div className={ classes.scrollControl }>
                <div className={ classes.card }>
                    <img src={ icono10 } className={ classes.close } onClick={ close ? close : ()=>{} }/>
                    <img src={ logo } title="logo" alt="logo" className={classes.logo}/>
                    <div className={ classes.content }>
                        <Header style={headerStyle}>AGRADECEMOS TU INTERÉS,</Header>
                        <Header style={headerStyle}>PRONTO NOS ESTAREMOS COMUNICANDO CONTIGO.</Header>
                        <div className={ classes.buttons }>
                            <Link to="/portafolio">
                                <Button style={ buttonstyle }>
                                    VISITA NUESTRO PORTAFOLIO
                                </Button>
                            </Link>
                            <p>ó</p>
                            <Button style={ buttonstyle }>
                                REDES SOCIALES
                            </Button>
                        </div>
                        <div className={ classes.social }>
                            <a href="https://www.instagram.com/habitus.mx/" target="_blank" rel="noopener noreferrer">
                                <img src={ instagram } title="Instagram" alt="Instagram"/>
                            </a>
                            <a href="https://www.facebook.com/Habitus-1085345214958630/" target="_blank" rel="noopener noreferrer">
                                <img src={ facebook } title="Facebook" alt="Facebook"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}