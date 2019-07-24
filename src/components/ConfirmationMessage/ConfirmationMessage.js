import React from "react";
import classes from "./ConfirmationMessage.module.css";
import Header from "../Header/Header";
import Button from "../Button/Button";
import { icono10, logo, facebook, instagram } from "../../images";
import { Link } from "gatsby";

export default ({ display, close }) => {
  return (
    <div
      className={[classes.container, display ? classes.displayed : ""].join(
        " "
      )}
    >
      <div className={classes.background} onClick={close ? close : () => {}} />
      <div className={classes.scrollControl}>
        <div className={classes.card}>
          <img
            src={icono10}
            className={classes.close}
            onClick={close ? close : () => {}}
          />
          <img src={logo} title="logo" alt="logo" className={classes.logo} />
          <div className={classes.content}>
            <h2>AGRADECEMOS TU INTERÉS,</h2>
            <h2>PRONTO NOS ESTAREMOS COMUNICANDO CONTIGO.</h2>
            <div className={classes.buttons}>
              <Link to="/portafolio">
                <Button>VISITA NUESTRO PORTAFOLIO</Button>
              </Link>
              <p>ó</p>
              <Button>REDES SOCIALES</Button>
            </div>
            <div className={classes.social}>
              <a
                href="https://www.instagram.com/habitus.mx/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} title="Instagram" alt="Instagram" />
              </a>
              <a
                href="https://www.facebook.com/Habitus-1085345214958630/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} title="Facebook" alt="Facebook" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
