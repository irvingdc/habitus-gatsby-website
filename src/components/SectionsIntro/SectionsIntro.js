import React from "react";
import classes from "./SectionsIntro.module.less";
import Button from "components/Button/Button";
import { img7, latticesMix, img3 } from "src/images";

export default () => (
  <div className={classes.container}>
    <div className={classes.largeText}>
      <span />
      <h2>CELOSÍAS</h2>
      <span />
    </div>
    <div className={classes.text}>
      <h2>CONÓCENOS</h2>
      <p>
        Toma en cuenta los siguientes elementos para crear tu celosía perfecta
      </p>
    </div>
    <div className={classes.elements}>
      <Block
        title="APLICACIÓN"
        text="¿Para qué o dónde usarás la celosía?"
        img={img7}
      />
      <Block
        title="DISEÑO"
        text="¿Cuál es el diseño que va con tu proyecto?"
        img={latticesMix}
      />
      <Block
        title="MATERIAL"
        text="¿Cuál de nuestros materiales va con tu necesidad?"
        img={img3}
      />
    </div>
  </div>
);

const Block = ({ title, img, text }) => (
  <div className={classes.application}>
    <div
      className={classes.img}
      style={{
        background: `url(${img}) center center / cover no-repeat`
      }}
    >
      <Button>{title}</Button>
    </div>
    <p>{text}</p>
  </div>
);
