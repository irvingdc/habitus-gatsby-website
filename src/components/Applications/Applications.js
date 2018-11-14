import React from "react"
import classes from "./Applications.module.css"
import ApplicationBlock from "../ApplicationBlock/ApplicationBlock"
import { img8, img11, img13, img15, img16, img22, img6, img7 } from "../../images"

export default ({ show }) =>(
    <div className={ classes.container }>
        <h2>APLICACIONES</h2>
        <div className={ classes.tripleA }>
            <ApplicationBlock 
                title="REJAS" 
                img={ img8 }
                show={ () => show("rejas") }
            />
            <ApplicationBlock 
                title="DIVISORES" 
                img={ img15 }
                show={ () => show("divisores") }
            />
            <ApplicationBlock 
                title="DECORACIÓN" 
                img={ img22 }
                style={{
                    gridColumn: "2",
                    gridRow: "1/3"
                }}
                show={ () => show("decoracion") }
            />
        </div>
        <div className={ classes.double }>
            <ApplicationBlock 
                title="PUERTAS Y PORTONES" 
                img={ img7 }
                style={{
                    gridRow: "1/3"
                }}
                show={ () => show("puertas_y_portones") }
            />
            <ApplicationBlock 
                title="TRAGALUCES Y PLAFONES" 
                img={ img6 }
                style={{
                    gridRow: "1/3"
                }}
                show={ () => show("tragaluces_y_plafones") }
            />
        </div>
        <div className={ classes.tripleB }>
            <ApplicationBlock 
                title="PÉRGOLAS" 
                img={ img11 }
                style={{
                    gridRow: "1/3"
                }}
                show={ () => show("pergolas") }
            />
            <ApplicationBlock 
                title="BARANDALES" 
                img={ img16 }
                show={ () => show("barandales") }
            />
            <ApplicationBlock 
                title="FACHADAS" 
                img={ img13 }
                show={ () => show("fachadas") }
            />
        </div>
    </div>
)