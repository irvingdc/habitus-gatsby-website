import React from "react"
import classes from "./Portfolio.module.css"
import PictureBanner from "../PictureBanner/PictureBanner"
import { img11 } from "../../images"

export default ({ img, title, description }) => (
    <div className={ [classes.grid, classes.container].join(' ') } style={{gridTemplateColumns:"repeat(2, 1fr)"}}>
        <div className={ classes.grid } style={{gridTemplateRows:"repeat(2, 1fr)"}}>
            <div className={ classes.grid } style={{gridTemplateColumns:"repeat(2, 1fr)"}}>
                <PictureBanner img={ img11 }/>
                <div className={ classes.grid } style={{gridTemplateRows:"repeat(3, 1fr)"}}>
                <PictureBanner img={ img11 }/>
                <PictureBanner img={ img11 }/>
                <PictureBanner img={ img11 }/>
                </div>
            </div>            
            <PictureBanner img={ img11 }/>
        </div>
        <div className={ classes.grid } style={{gridTemplateRows:"repeat(3, 1fr)"}}>
            <div className={ classes.grid } style={{gridTemplateColumns:"repeat(2, 1fr)"}}>
                <PictureBanner img={ img11 }/>
                <PictureBanner img={ img11 }/>
            </div>
            <PictureBanner img={ img11 }/>
            <PictureBanner img={ img11 }/>
        </div>
    </div>
)