import React from "react"
import { Link } from "gatsby"
import classes from "./Nav.module.css"
import logo from "../../images/logo.svg"

export default ({ fixedlogo }) =>(
    <div className={ classes.container }>
        <img src={ logo } alt="Logo" title="Logo" className={ fixedlogo ? classes.small : null}/>
        <Link activeClassName={ classes.active } to="/">Nosotros</Link>
        <Link activeClassName={ classes.active } to="/disenos-y-materiales/">Diseños y Materiales</Link>
        <Link activeClassName={ classes.active } to="/portafolio/" >Portafolio</Link>
        <Link activeClassName={ classes.active } to="/cotiza/">Cotiza</Link>
    </div>
)
