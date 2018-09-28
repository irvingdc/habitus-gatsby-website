import React from "react"
import classes from "./ApplicationBlock.module.css"
import Button from "../Button/Button"

export default ({title, img, style}) =>(
    <div className={ classes.container } style={ style }>
        <div className={ classes.background } style={{
            background:`url(${img}) center center / cover no-repeat`,
        }}></div>
        <div className={ classes.fade }>
            <div className={ classes.details }>
                <h3>{ title }</h3>
                <Button style={{ fontSize: "15px"}}>CREA</Button>
            </div>
        </div>
    </div>
)