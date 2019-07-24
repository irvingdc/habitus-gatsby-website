import React, { Fragment } from "react";
import ApplicationsPage from "../../components/ApplicationsPage/ApplicationsPage";
import { img11, pergola_h } from "src/images";

export default () => (
  <ApplicationsPage
    headerImage={img11}
    installationImage={pergola_h}
    title={
      <Fragment>
        <i>CELOSÍAS EN</i> PÉRGOLAS
      </Fragment>
    }
    intro={
      <p>
        Armoniza un espacio con un estilo único a través de celosías que
        permiten el juego de luz y sombras.
      </p>
    }
    recommendations={
      <Fragment>
        <p>
          Para celosías en pérgolas se aconseja utilizar materiales como el
          aluminio y acero al carbón los cuales brindarán la calidad ideal.
        </p>
        <p>
          Te aconsejamos escoger el diseño conforme a la difusión solar que
          requieras.
        </p>
      </Fragment>
    }
  />
);
