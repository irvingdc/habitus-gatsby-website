import React from "react"
import classes from "./Dialog.module.css"
import Header from "../Header/Header"
import { icono10, icono11, icono12 } from "../../images"
import { navigate } from "gatsby"
import Button from "../Button/Button"

export default ({ display, close, children, img, title, padding, showbutton, showcontrols, previous, next, scrollable }) =>{
    if(typeof window === "undefined") return <div></div>
    let headerStyle = {
        fontWeight: "900", 
        fontFamily: "GS",
        maxWidth: "300px",
    }
    headerStyle = window.innerWidth > 770 ? { 
        ...headerStyle,
        fontSize:"30px", 
        letterSpacing: "2px",
    } : {
        ...headerStyle,
        fontSize:"24px", 
        letterSpacing: "4px",
    }
    headerStyle = window.innerWidth > 550 ? headerStyle : {
        ...headerStyle,
        fontSize:"20px",
    }
    return (
        <div className={ [classes.container, (display ? classes.displayed : ""), (scrollable ? classes.scrollable : "")].join(" ") }>
            <div className={ classes.background } onClick={ close ? close : ()=>{} }></div>
            <div className={ classes.scrollControl }>
                <div className={ [classes.card, (img ? classes.grid : "")].join(' ') } style={{ padding: padding }}>
                { showcontrols ? <img src={ icono12 } alt="Derecha" title="Derecha" className={ classes.goRight } onClick={ next }/> : null }
                { showcontrols ? <img src={ icono11 } alt="Izquierda" title="Izquierda" className={ classes.goLeft } onClick={ previous }/> : null }
                
                    { !img ? (
                        <div className={ classes.headerTop }>
                            <Header style={ headerStyle }>{ title }</Header>
                        </div>
                    ) : null }
                    { img ? (
                        <div className={ classes.side }>
                            <div className={ classes.imgSide }style={{
                                background:`url(${img}) center center / cover no-repeat`,
                            }}></div>
                            <div className={ classes.headerSide }>
                                <Header style={ headerStyle }>{ title }</Header>
                            </div>
                        </div>
                    ) : null }
                    <img src={ icono10 } className={ classes.close } onClick={ close ? close : ()=>{} }/>
                    <div className={ classes.content }>{ children }</div>
                    { showbutton ? (
                        <Button ghost colorSwitch style={{
                            color:"var(--habitus-primary)",
                            position: "absolute",
                            bottom: (window.innerWidth > 550 ? "-60px" : "-45px"),
                            width: (window.innerWidth > 550 ? "410px" : "90%"),
                            fontSize: (window.innerWidth > 550 ? "23px" : "16px"),
                            transform: "translateX(-50%)",
                            left:"50%"
                        }} click={ ()=>navigate("/personaliza/") }>CREA Y COTIZA TU CELOSÍA</Button>
                    ) : null}
                </div>
            </div>
            
        </div>
    )
}