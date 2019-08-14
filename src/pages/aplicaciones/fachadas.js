import React, { Fragment } from "react";
import ApplicationsPage from "../../components/ApplicationsPage/ApplicationsPage";
import { img13, reja_h } from "src/images";
import "src/main.module.less";
import { Helmet } from "react-helmet";

export default () => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Habitus | Aplicaciones de Celosías: Fachadas</title>
      <link rel="canonical" href="https://habitus.com.mx/aplicaciones/fachadas/" />
      <meta
        name="description"
        content="Las fachadas con celosías plasman creatividad y estilo en un espacio. Para celosías en fachadas utiliza acero al carbón con pintura electrostática para tener brindar una resistencia en el exterior."
      />
      <link rel="shortcut icon" href="https://habitus.com.mx/logo.png" />
    </Helmet>
  <ApplicationsPage
    headerImage={img13}
    installationImage={reja_h}
    title={
      <Fragment>
        <i>CELOSÍAS EN</i> FACHADAS
      </Fragment>
    }
    intro={
      <p>
        Plasma tu creatividad con nuestras celosías, logrando modificar y
        destacar tu fachada con un estilo único.
      </p>
    }
    recommendations={
      <Fragment>
        <p>
          Se sugiere utilizar materiales que sean adecuados para la intemperie,
          tal es el caso del acero al carbón, acero inoxidable y aluminio.
        </p>
        <p>
          Se recomienda utilizar pintura electrostática en acero al carbón para
          brindar una mayor vida en el exterior.
        </p>
      </Fragment>
    }
  />

  </Fragment>
);

