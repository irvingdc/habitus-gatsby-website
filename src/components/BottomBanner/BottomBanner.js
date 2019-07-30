import React from "react";
import { bottomBanner } from "src/images";
import classes from "./BottomBanner.module.less";
import { Link } from "gatsby";

export default () => (
  <div className={classes.container}>
    <img src={bottomBanner} alt="banner" />
    <div className={classes.content}>
      <h2>¡INSPÍRATE!</h2>
      <a
        href="https://www.instagram.com/habitus.mx/"
        target="_blank"
        rel="noopener noreferrer"
      >
        VISITA NUESTRO PORTAFOLIO
      </a>
      <p>ó</p>
      <Link to="/contacto/">ASESÓRATE</Link>
    </div>
  </div>
);
