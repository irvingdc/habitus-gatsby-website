import React from "react"
import '../main.module.css'
import classes from "./portafolio.module.css"
import Nav from '../components/Nav/Nav'
import PictureBanner from '../components/PictureBanner/PictureBanner'
import { img17 } from "../images"
import Header from "../components/Header/Header"
import Portfolio from "../components/Portfolio/Portfolio"
import Footer from "../components/Footer/Footer"

export default () => {
    if(typeof window === "undefined") return <div></div>
    let bannerStyle = window.innerWidth < 770 ? {padding:"0px"} : {padding:"20px"}
    let headerStyle = window.innerWidth < 770 ? {margin:"80px auto 0px", letterSpacing: "5px"} : {margin:"auto"}
    return (
        <div className={classes.container}>
            <Nav fixedlogo/>
            <div style={bannerStyle}>
                <PictureBanner
                    withpadding
                    showsocial
                    img={ img17 }
                    height="550px"
                    titlestyle={{
                        fontSize: "24px",
                        fontFamily: "PG",
                        letterSpacing: "6px",
                    }}
                    background="#00000022"
                />
            </div>
            <Header style={ headerStyle }>NUESTRO PORTAFOLIO</Header>
            <Portfolio/>
            <Footer/>
        </div>
    )
}