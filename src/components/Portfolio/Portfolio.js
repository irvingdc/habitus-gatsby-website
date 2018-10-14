import React from "react"
import classes from "./Portfolio.module.css"
import PictureBanner from "../PictureBanner/PictureBanner"
import {img8, img15, img18, img7, img6, img11, img16, img13, } from "../../images"

export default ({ img, title, description }) => {
    if(typeof window === "undefined") return <div></div>
    let containerStyle = window.innerWidth < 770 ? { gridTemplateColumns:"repeat(1, 1fr)" } : { gridTemplateColumns:"repeat(2, 1fr)" }
    return (
        <div className={ [classes.grid, classes.container].join(' ') } style={ containerStyle }>
            <div className={ classes.grid } style={{gridTemplateRows:"repeat(2, 1fr)"}}>
                <div className={ classes.grid } style={{gridTemplateColumns:"repeat(2, 1fr)"}}>
                    <PictureBanner img={ img8 }/>
                    <div className={ classes.grid } style={{gridTemplateRows:"repeat(2, 1fr)"}}>
                    <PictureBanner img={ img15 }/>
                    <PictureBanner img={ img18 }/>
                    </div>
                </div>            
                <PictureBanner img={ img7 }/>
            </div>
            <div className={ classes.grid } style={{gridTemplateRows:"repeat(3, 1fr)"}}>
                <div className={ classes.grid } style={{gridTemplateColumns:"repeat(2, 1fr)"}}>
                    <PictureBanner img={ img6 }/>
                    <PictureBanner img={ img11 }/>
                </div>
                <PictureBanner img={ img16 }/>
                <PictureBanner img={ img13 }/>
            </div>
        </div>
    )
}