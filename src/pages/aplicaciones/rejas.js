import React, { Fragment } from "react";
import ApplicationsPage from "../../components/ApplicationsPage/ApplicationsPage";
import { img8, reja_h } from "src/images";
import "src/main.module.less";

import { Helmet } from "react-helmet";

export default () => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Habitus | Aplicaciones de Celosías: Rejas</title>
      <link rel="canonical" href="https://habitus.com.mx/aplicaciones/rejas/" />
      <meta
        name="description"
        content="Las rejas con celosías brindan protección a un espacio a través de diseños cerrados y materiales resistentes como el acero al carbón."
      />
      <link rel="shortcut icon" href="https://habitus.com.mx/logo.png" />
    </Helmet>
  <ApplicationsPage
    headerImage={img8}
    installationImage={reja_h}
    title={
      <Fragment>
        <i>CELOSÍAS EN</i> REJAS
      </Fragment>
    }
    intro={
      <p>
        Celosías HABITUS pueden ser utilizadas para tu reja, dotando de
        privacidad y seguridad un espacio, con diseños personalizados y únicos.
      </p>
    }
    recommendations={
      <Fragment>
        <p>
          En celosías para rejas se sugiere utilizar materiales como el acero al
          carbón, debido a su resistencia.
        </p>
        <p>
          Te recomendamos usar diseños cerrados para brindar una mejor seguridad
        </p>
      </Fragment>
    }
  />

  </Fragment>
);

