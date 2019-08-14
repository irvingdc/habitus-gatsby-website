import React, { Fragment } from "react";
import ApplicationsPage from "../../components/ApplicationsPage/ApplicationsPage";
import { img22, reja_h } from "src/images";
import { Helmet } from "react-helmet";

export default () => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Habitus | Aplicaciones de Celosías: Decoración</title>
      <link rel="canonical" href="https://habitus.com.mx/aplicaciones/decoracion/" />
      <meta
        name="description"
        content="Destaca un espacio con celosías en cualquier habitación, ya sea en cabeceras, muros, o lo que tu desees.  En celosías para decoración la variedad de materiales a utilizar es más amplia."
      />
      <link rel="shortcut icon" href="https://habitus.com.mx/logo.png" />
    </Helmet>
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

  </Fragment>
);
