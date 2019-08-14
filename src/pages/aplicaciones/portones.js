import React, { Fragment } from "react";
import ApplicationsPage from "../../components/ApplicationsPage/ApplicationsPage";
import { img7, puerta_h } from "src/images";
import "src/main.module.less";
import { Helmet } from "react-helmet";

export default () => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Habitus | Aplicaciones de Celosías: Portones</title>
      <link rel="canonical" href="https://habitus.com.mx/aplicaciones/portones/" />
      <meta
        name="description"
        content="Los portones de celosías brindan seguridad y estilo a un espacio. Utiliza acero para celosías en puertas y portones."
      />
      <link rel="shortcut icon" href="https://habitus.com.mx/logo.png" />
    </Helmet>
  <ApplicationsPage
    headerImage={img7}
    installationImage={puerta_h}
    title={
      <Fragment>
        <i>CELOSÍAS EN</i> PUERTAS Y PORTONES
      </Fragment>
    }
    intro={
      <p>
        Con nuestras celosías puedes plasmar tu estilo en puertas y portones sin
        dejar de un lado tu privacidad y seguridad.
      </p>
    }
    recommendations={
      <Fragment>
        <p>
          En celosías para barandales se sugiere utilizar acero al carbón debido
          a su resistencia, para brindar mejor protección.
        </p>
        <p>
          Te sugerimos seleccionar diseños cerrados para brindar una mayor
          seguridad.
        </p>
      </Fragment>
    }
  />

  </Fragment>
);

