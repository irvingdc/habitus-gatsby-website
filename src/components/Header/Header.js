import React from "react"
import classes from "./Header.module.css"

export default ({ children, size, style }) => (
    <h2 style={{ fontSize: size, ...style }} className={ classes.title }>{ children }</h2>
)