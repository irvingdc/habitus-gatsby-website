import React from "react"
import classes from "./Dialog.module.css"
import Header from "../Header/Header"
import { icono10, icono11, icono12 } from "../../images"
import { navigate } from "gatsby"
import Button from "../Button/Button"

export default ({ display, close, children, img, title, padding, showbutton, showcontrols, previous, next, scrollable }) =>{
    let headerStyle = { 
        fontSize:"32px", 
        fontWeight: "500", 
        fontFamily: "GS",
        letterSpacing: "2px",
        maxWidth: "300px",
    }
    return (
        <div className={ [classes.container, (display ? classes.displayed : ""), (scrollable ? classes.scrollable : "")].join(" ") }>
            <div className={ classes.background } onClick={ close }></div>
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
                        bottom: "-60px",
                        width:"340px",
                        transform: "translateX(-50%)",
                        left:"50%"
                    }} click={ ()=>navigate("/beta/cotiza/") }>COTIZA TU PROYECTO</Button>
                ) : null}
            </div>
        </div>
    )
}