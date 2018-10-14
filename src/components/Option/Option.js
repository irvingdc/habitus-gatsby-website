import React from "react"
import classes from "./Option.module.css"

export default ({ value, selected, img, name, style, disabled, onSelect, textwidth, imgwidth, imgheight, containerstyle}) =>(
    <div className={ [classes.container, (disabled ? classes.disabled : "WTF"), (selected ? classes.selected : "")].join(' ')} style={containerstyle}>
        { img ? (
            <div 
                className={ classes.background } 
                style={{
                    background:`url(${img}) center center / cover no-repeat`,
                    width: imgwidth,
                    height: imgheight,
                }}
                onClick={ onSelect && !disabled ? ()=>onSelect(name, value) : ()=>{}}
            ></div>
        ) : null }
        <p 
            className={ [classes.text, (!img ? classes.noImage : "")].join(' ') } 
            style={{ ...style, width: textwidth }}
            onClick={ onSelect && !disabled ? ()=>onSelect(name, value) : ()=>{}}
        >{ value }</p>
    </div>
)