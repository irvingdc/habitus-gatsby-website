import React, { Fragment } from "react";
import ApplicationsPage from "../../components/ApplicationsPage/ApplicationsPage";
import { img22, reja_h } from "src/images";

export default () => (
  <ApplicationsPage
    headerImage={img22}
    installationImage={reja_h}
    title={
      <Fragment>
        <i>CELOSÍAS EN</i> DECORACIÓN
      </Fragment>
    }
    intro={
      <p>
        La imaginación es tu única limitante con celosías HABITUS, incorpora
        celosías en interiores donde quieras destacar un espacio de estilo y
        belleza.
      </p>
    }
    recommendations={
      <Fragment>
        <p>
          Se pueden hacer uso de una mayor gama de materiales como son el
          MDF, triplay, acero al carbón, acero inoxidable y aluminio.
        </p>
        <p>Te sugerimos revisar todos los acabados con los que contamos.</p>
      </Fragment>
    }
  />
);
