import React, { Component } from "react"
import { Link } from "gatsby"
import classes from "./Nav.module.css"
import { logo, icono18, icono10 } from "../../images"

class Nav extends Component {
    
    state = {
        open: false
    }

    externalScripts = `
    <!-- Facebook Pixel Code --> 
    <script>
    !function(f,b,e,v,n,t,s) {if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '2031205820308681');
    fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=2031205820308681&ev=PageView&noscript=1" /></noscript>
    <!-- End Facebook Pixel Code -->
    `


    openMenu = () => {
        this.setState({open: true})
    }

    closeMenu = () => {
        this.setState({open: false})
    }

    componentDidMount(){
        if(!document.querySelector("#scripts")){
            setTimeout(()=>{
                let element = document.createElement("div")
                element.id = "scripts"
                element.innerHTML = this.externalScripts
                document.body.appendChild(element)
                document.querySelectorAll("#scripts script").forEach(it=>eval(it.innerHTML))
            },200)
        }
    }

    render(){
        return (
            <div className={ classes.container }>
                <Link to="/" style={{position:"absolute",left:"15px", top:"15px", zIndex: "400"}}>
                    <img src={ logo } alt="Logo" title="Logo" className={ [classes.logo, (this.state.open ? classes.open : ""), (this.props.fixedlogo ? classes.small : "")].join(" ")}/>
                </Link>
                <div className={ classes.menu }>
                    <Link activeClassName={ classes.active } to="/disenos-y-materiales/">Diseños y Materiales</Link>
                    <Link activeClassName={ classes.active } to="/personaliza/">Personaliza</Link>
                    <Link activeClassName={ classes.active } to="/portafolio/" >Portafolio</Link>
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