import React, { Fragment } from "react";
import ApplicationsPage from "../../components/ApplicationsPage/ApplicationsPage";
import { img11, pergola_h } from "src/images";
import "src/main.module.less";
import { Helmet } from "react-helmet";

export default () => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Habitus | Aplicaciones de Celosías: Pérgolas</title>
      <link rel="canonical" href="https://habitus.com.mx/aplicaciones/pergolas/" />
      <meta
        name="description"
        content="Las pérgolas en celosías son utilizadas para brindar el paso de luz y sombra en un espacio.  Utiliza Aluminio o Acero al carbón para no sobrecargar la estructura."
      />
      <link rel="shortcut icon" href="https://habitus.com.mx/logo.png" />
    </Helmet>
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

  </Fragment>
);
