import React, { Component, Fragment } from "react";
import { Link } from "gatsby";
import classes from "./Nav.module.less";
import { logo, menuIcon, icono10 } from "src/images";

class Nav extends Component {
  state = {
    open: false,
    applicacionsOpen: false,
    materialsOpen: false
  };

  externalScripts = `
  <!-- Facebook Pixel Code -->
  <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '2031205820308681');
    fbq('track', 'PageView');
    fbq('track', 'ViewContent');
  </script>
  <noscript><img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=2031205820308681&ev=PageView&noscript=1"
  /></noscript>
  <!-- End Facebook Pixel Code -->
    `;

  openMenu = () => {
    this.setState({ open: true });
  };

  closeMenu = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    if (!document.querySelector("#scripts")) {
      setTimeout(() => {
        let element = document.createElement("div");
        element.id = "scripts";
        element.innerHTML = this.externalScripts;
        document.body.appendChild(element);
        document
          .querySelectorAll("#scripts script")
          .forEach(it => eval(it.innerHTML));
      }, 200);
    }
  }

  menuActions = (menuClass, option) => (
    <Fragment>
      <b
        className={[classes.expandButton, menuClass].join(" ")}
        onClick={() => this.setState({ [option]: true })}
      >
        +
      </b>
      <b
        className={[classes.shrinkButton, menuClass].join(" ")}
        onClick={() => this.setState({ [option]: false })}
      >
        -
      </b>
    </Fragment>
  );

  render() {
    const { applicacionsOpen, materialsOpen } = this.state;
    const applicacionsMenuClass = applicacionsOpen
      ? classes.expanded
      : classes.notExpanded;
    const materialsMenuClass = materialsOpen
      ? classes.expanded
      : classes.notExpanded;
    return (
      <div className={classes.container}>
        <Link to="/" className={classes.logo}>
          <img
            src={logo}
            alt="Logo"
            title="Logo"
            className={[this.state.open ? classes.open : ""].join(" ")}
          />
        </Link>
        <div
          className={[
            classes.content,
            this.state.open ? classes.open : ""
          ].join(" ")}
        >
          <div className={classes.menu}>
            <Link activeClassName={classes.active} to="/aplicaciones/">
              Aplicaciones
            </Link>
            {this.menuActions(applicacionsMenuClass, "applicacionsOpen")}
            <div className={[classes.options, applicacionsMenuClass].join(" ")}>
              <Link to="/aplicaciones/barandales/">Barandales</Link>
              <Link to="/aplicaciones/divisores/">Divisores</Link>
              <Link to="/aplicaciones/portones/">Portones</Link>
              <Link to="/aplicaciones/fachadas/">Fachadas</Link>
              <Link to="/aplicaciones/rejas/">Rejas</Link>
              <Link to="/aplicaciones/pergolas/">Pérgolas</Link>
              <Link to="/aplicaciones/decoracion/">Decoración</Link>
              <Link to="/aplicaciones/tragaluces/">Tragaluces</Link>
            </div>
          </div>
          <div className={classes.menu}>
            <Link activeClassName={classes.active} to="/diseños/">
              Diseños
            </Link>
          </div>
          <div className={classes.menu}>
            <Link activeClassName={classes.active} to="/materiales/">
              Materiales
            </Link>
            {this.menuActions(materialsMenuClass, "materialsOpen")}
            <div className={[classes.options, materialsMenuClass].join(" ")}>
              <Link to="/materiales/acero-al-carbon/">Acero al carbón</Link>
              <Link to="/materiales/acero-inoxidable/">Acero inoxidable</Link>
              <Link to="/materiales/aluminio/">Aluminio</Link>
              <Link to="/materiales/mdf/">MDF</Link>
              <Link to="/materiales/triplay/">Triplay</Link>
            </div>
          </div>
          <div className={classes.menu}>
            <Link activeClassName={classes.active} to="/contacto/">
              Contacto
            </Link>
          </div>
        </div>
        <div
          className={[
            classes.actions,
            this.state.open ? classes.open : ""
          ].join(" ")}
        >
          <img
            src={menuIcon}
            alt="Menu"
            title="Menu"
            onClick={this.openMenu}
            className={classes.openButton}
          />
          <img
            src={icono10}
            alt="Menu"
            title="Menu"
            onClick={this.closeMenu}
            className={classes.closeButton}
          />
        </div>
      </div>
    );
  }
}
export default Nav;
