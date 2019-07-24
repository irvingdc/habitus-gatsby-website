import React from "react";
import classes from "./Footer.module.less";
import { icono15, icono8, map } from "../../images";
import { Link } from "gatsby";

export default () => (
  <div className={classes.container}>
    <div className={classes.link}>
    <Link to="/contacto" >ASESÓRATE</Link>
    </div>
    <div className={classes.map}>
      <img src={map} alt="Mexico" />
    </div>
    <div className={classes.social}>
      <a
        href="https://www.facebook.com/Habitus-1085345214958630/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={icono15} title="Facebook" alt="Facebook" />
      </a>
      <a
        href="https://www.instagram.com/habitus.mx/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={icono8} title="Instagram" alt="Instagram" />
      </a>
    </div>
  </div>
);
