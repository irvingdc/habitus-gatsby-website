import React from "react"
import { Link } from "gatsby"
import classes from "./Nav.module.css"

export default ({ fixedlogo }) =>(
    <div className={ classes.container }>
        <img src="/static/img/logo.svg" alt="Logo" title="Logo" className={ fixedlogo ? classes.small : null}/>
        <Link activeClassName={ classes.active } to="/beta/">Nosotros</Link>
        <Link activeClassName={ classes.active } to="/beta/disenos-y-materiales">Diseños y Materiales</Link>
        <Link activeClassName={ classes.active } to="/beta/portafolio" >Portafolio</Link>
        <Link activeClassName={ classes.active } to="/beta/cotiza">Cotiza</Link>
    </div>
)
