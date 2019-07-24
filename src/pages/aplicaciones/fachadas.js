import React, { Fragment } from "react";
import ApplicationsPage from "../../components/ApplicationsPage/ApplicationsPage";
import { img13, reja_h } from "src/images";
import "src/main.module.less";

export default () => (
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
          Se recomienda utilizar pintura electrostática para brindar una mayor
          vida en el exterior.
        </p>
      </Fragment>
    }
  />
);
