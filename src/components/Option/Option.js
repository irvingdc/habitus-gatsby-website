import React from "react"
import classes from "./Option.module.css"

export default ({ value, selected, img, name, style, disabled, onSelect, textwidth, imgwidth }) =>(
    <div className={ [classes.container, (disabled ? classes.disabled : ""), (selected ? classes.selected : "")].join(' ') }>
        { img ? (
            <div 
                className={ classes.background } 
                style={{
                    background:`url(${img}) center center / cover no-repeat`,
                    width: imgwidth
                }}
                onClick={ onSelect ? ()=>onSelect(value, name) : ()=>{}}
            ></div>
        ) : null }
        <p 
            className={ [classes.text, (!img ? classes.noImage : "")].join(' ') } 
            style={{ ...style, width: textwidth }}
            onClick={ onSelect ? ()=>onSelect(value, name) : ()=>{}}
        >{ value }</p>
    </div>
)