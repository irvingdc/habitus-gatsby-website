import React from "react";
import classes from "./Introduction.module.less";
import { intro, dotsIcon, phoneIcon } from "../../images";
import SocialRow from "components/SocialRow/SocialRow";
import Button from "../Button/Button";
import { Link } from "gatsby";

function scrollToSection() {
  window.scroll({
    top: getOffsetTop(document.getElementById("conocenos")) - 60,
    left: 0,
    behavior: "smooth"
  });
}

function getOffsetTop(elem) {
  var offsetTop = 0;
  do {
    if (!isNaN(elem.offsetTop)) {
      offsetTop += elem.offsetTop;
    }
  } while ((elem = elem.offsetParent));
  return offsetTop;
}

export default () => (
  <div className={classes.container}>
    <div className={classes.img}>
      <img src={intro} alt="Ejemplo" title="Ejemplo" />
      <div>
        <SocialRow gray />
      </div>
    </div>
    <div className={classes.text}>
      <h1>CELOSÍAS QUE DESTACAN</h1>
      <p>
        <b>HABITUS</b> fabrica celosías y paneles personalizados para todo
        proyecto de
        <br />
        arquitectura, construcción y diseño, ideales para dar vida a un espacio
        o desarrollo.
      </p>
    </div>
    <div className={classes.cards}>
      <div className="boxWithShadow">
        <img src={phoneIcon} alt="icono" />
        <p>Déjanos tus datos y un asesor se comunicará contigo</p>
        <Link to="/contacto">
          <Button reverse size="large">
            ASESÓRATE
          </Button>
        </Link>
      </div>
      <div className="boxWithShadow">
        <img src={dotsIcon} alt="icono" />
        <p>Explora la variedad de opciones que te ofrecemos en celosías</p>
        <Button reverse size="large" click={scrollToSection}>
          CONÓCENOS
        </Button>
      </div>
    </div>
  </div>
);
