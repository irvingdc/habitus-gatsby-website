import React, { Component } from "react"
import { Link } from "gatsby"
import classes from "./Nav.module.css"
import { logo, icono18, icono10 } from "../../images"

class Nav extends Component {
    
    state = {
        open: false
    }

    openMenu = () => {
        this.setState({open: true})
    }

    closeMenu = () => {
        this.setState({open: false})
    }

    render(){
        return (
            <div className={ classes.container }>
                <Link to="/" style={{position:"absolute",left:"15px", top:"15px", zIndex: "400"}}>
                    <img src={ logo } alt="Logo" title="Logo" className={ [classes.logo, (this.state.open ? classes.open : ""), (this.props.fixedlogo ? classes.small : "")].join(" ")}/>
                </Link>
                <div className={ classes.menu }>
                    <Link activeClassName={ classes.active } to="/beta/">Nosotros</Link>
                    <Link activeClassName={ classes.active } to="/beta/disenos-y-materiales/">Diseños y Materiales</Link>
                    <Link activeClassName={ classes.active } to="/beta/portafolio/" >Portafolio</Link>
                    <Link activeClassName={ classes.active } to="/beta/cotiza/">Cotiza</Link>
                </div>
                <div className={[classes.responsiveMenu, (this.state.open ? classes.open : "")].join(" ")}>
                    <img src={ icono18 } alt="Menu" title="Menu" onClick={ this.openMenu }/>
                </div>
                <div className={ [classes.backdrop, (this.state.open ? classes.open : "")].join(" ") }>
                    <img src={ icono10 } alt="Menu" title="Menu" onClick={ this.closeMenu }/>
                </div>
            </div>
        )
    }
}
export default Nav