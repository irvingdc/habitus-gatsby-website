import React from "react"
import classes from "./Applications.module.css"
import ApplicationBlock from "../ApplicationBlock/ApplicationBlock";

export default () =>(
    <div className={ classes.container }>
        <h2>APLICACIONES</h2>
        <div className={ classes.tripleA }>
            <ApplicationBlock 
                title="REJAS" 
                img="/static/img/8.jpg"
            />
            <ApplicationBlock 
                title="DIVISORES" 
                img="/static/img/15.jpg"
            />
            <ApplicationBlock 
                title="DECORACIÓN" 
                img="/static/img/18.jpg"
                style={{
                    gridColumn: "2",
                    gridRow: "1/3"
                }}
            />
        </div>
        <div className={ classes.double }>
            <ApplicationBlock 
                title="PUERTAS Y PORTONES" 
                img="/static/img/7.jpg"
                style={{
                    gridRow: "1/3"
                }}
            />
            <ApplicationBlock 
                title="TRAGALUCES Y PLAFONES" 
                img="/static/img/6.jpg"
                style={{
                    gridRow: "1/3"
                }}
            />
        </div>
        <div className={ classes.tripleB }>
            <ApplicationBlock 
                title="PÉRGOLAS" 
                img="/static/img/11.jpg"
                style={{
                    gridRow: "1/3"
                }}
            />
            <ApplicationBlock 
                title="BARANDALES" 
                img="/static/img/16.jpg"
            />
            <ApplicationBlock 
                title="FACHADAS" 
                img="/static/img/13.jpg"
            />
        </div>
    </div>
)