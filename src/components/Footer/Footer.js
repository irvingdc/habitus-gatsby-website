import React from "react"
import classes from "./Footer.module.css"
import { Link } from "gatsby"
import { logoYellow, icono15, icono8, map  } from '../../images'

export default () =>(
    <div className={ classes.container }>
        <div className={ classes.map }>
            <img src={ map } alt="Mexico"/>
        </div>
        <div className={ classes.info }>
            <div className={ classes.logo }>
                <Link to="/cotiza/" style={{display:"block",margin:"0px",width:"fit-content"}}>
                    <img src={ logoYellow } title="Logo" alt="Logo"/>
                </Link>
            </div>
            <h3>contáctanos y habla con un experto</h3>
            <p>+ 52 1 (222) 122 8857 / <a href="mailto:diseno@habitus.com.mx">diseno@habitus.com.mx</a></p>
            <div className={ classes.social }>
                <a href="https://www.facebook.com/Habitus-1085345214958630/" target="_blank" rel="noopener noreferrer">
                    <img src={ icono15 } title="Facebook" alt="Facebook"/>
                </a>
                <a href="https://www.instagram.com/habitus.mx/" target="_blank" rel="noopener noreferrer">
                    <img src={ icono8 } title="Instagram" alt="Instagram"/>
                </a>
            </div>
        </div>
        
    </div>
)