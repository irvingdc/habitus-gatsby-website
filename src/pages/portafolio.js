import React from "react"
import 'src/main.module.less'
import classes from "styles/portafolio.module.css"
import Nav from 'components/Nav/Nav'
import PictureBanner from 'components/PictureBanner/PictureBanner'
import { img17, logo } from "src/images"
import Header from "components/Header/Header"
import Portfolio from "components/Portfolio/Portfolio"
import Footer from "components/Footer/Footer"
import {Helmet} from "react-helmet"

export default () => {
    if(typeof window === "undefined") return <div></div>
    let bannerStyle = window.innerWidth < 770 ? {padding:"0px"} : {padding:"20px"}
    let headerStyle = window.innerWidth < 770 ? {margin:"80px auto 0px", letterSpacing: "5px"} : {margin:"auto"}
    return (
        <div className={classes.container}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Habitus | Portafolio</title>
                <link rel="canonical" href="https://habitus.com.mx/portafolio/" />
                <meta name="description" content="HABITUS pone a tu alcance soluciones en arquitectura e interiorismo en forma de celosías y páneles detalladamente diseñados, ideales para llenar de vida un espacio o cualquier proyecto."/>
                <link rel="shortcut icon" href="https://habitus.com.mx/logo.png"/>
            </Helmet>
            <Nav fixedlogo/>
            <div style={bannerStyle}>
                <PictureBanner
                    withpadding
                    showsocial
                    special
                    img={ img17 }
                    height={ window.innerWidth < 550 ? "400px" : "600px"}
                    titlestyle={{
                        fontSize: "24px",
                        fontFamily: "PG",
                        letterSpacing: "6px",
                    }}
                    background="#00000016"
                />
            </div>
            <Header style={ headerStyle }>INSPÍRATE CON NUESTROS PROYECTOS</Header>
            <Portfolio/>
            <Footer/>
        </div>
    )
}