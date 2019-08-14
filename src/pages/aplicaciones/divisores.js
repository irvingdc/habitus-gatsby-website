import React, { Fragment } from "react";
import ApplicationsPage from "../../components/ApplicationsPage/ApplicationsPage";
import { img15, division_h } from "src/images";
import "src/main.module.less";
import { Helmet } from "react-helmet";

export default () => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Habitus | Aplicaciones de Celosías: Divisores</title>
      <link rel="canonical" href="https://habitus.com.mx/aplicaciones/divisores/" />
      <meta
        name="description"
        content="Dividir un espacio con celosías brindará privacidad y visibilidad a otras áreas. Utiliza MDF o Acero para paneles divisores."
      />
      <link rel="shortcut icon" href="https://habitus.com.mx/logo.png" />
    </Helmet>
  <ApplicationsPage
    headerImage={img15}
    installationImage={division_h}
    title={
      <Fragment>
        <i>CELOSÍAS EN</i> DIVISORES
      </Fragment>
    }
    intro={
      <p>
        Celosías HABITUS permite crear divisiones, brindando funcionalidad y un
        toque de belleza a un espacio, permitiendo privacidad o visibilidad a
        otras áreas.
      </p>
    }
    recommendations={
      <Fragment>
        <p>
          En celosías para divisiones se sugiere el uso de MDF, triplay o
          aluminio debido a que no se requiere de un material con gran
          resistencia.
        </p>
        <p>Te sugerimos revisar todos los acabados con los que contamos.</p>
      </Fragment>
    }
  />

  </Fragment>
);
