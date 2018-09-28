import React from "react"
import classes from "./index.module.css"
import '../main.module.css'
import Nav from '../components/Nav/Nav'

export default () => (
    <div className={classes.MainContainer}>
        <Nav/>
        <p style={{ textAlign: "center", paddingTop: "300px", color:"#999999"}}>Aqui deberia ir el portafolio</p>
    </div>
)