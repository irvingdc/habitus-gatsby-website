import React, { Fragment } from "react";
import ApplicationsPage from "../../components/ApplicationsPage/ApplicationsPage";
import { img16, balcon_h } from "src/images";
import "src/main.module.less";
import { Helmet } from "react-helmet";

export default () => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Habitus | Aplicaciones de Celosías: Barandales</title>
      <link rel="canonical" href="https://habitus.com.mx/aplicaciones/barandales/" />
      <meta
        name="description"
        content="Los barandales con celosías brindan seguridad y diseño a cualquier espacio. Protege un espacio con celosías HABITUS"
      />
      <link rel="shortcut icon" href="https://habitus.com.mx/logo.png" />
    </Helmet>
    <ApplicationsPage
      headerImage={img16}
      installationImage={balcon_h}
      title={
        <Fragment>
          <i>CELOSÍAS EN</i> BARANDALES
        </Fragment>
      }
      intro={
        <p>
          Permite que tus balcones, pasillos y escaleras destaquen con nuestras
          celosías HABITUS, brindando seguridad y diseño a tu ambiente.
        </p>
      }
      recommendations={
        <Fragment>
          <p>
            En celosías para barandales se sugiere utilizar acero al carbón
            debido a su resistencia, brindando mayor protección.
          </p>
          <p>
            Te aconsejamos seleccionar diseños cerrados para resguardar tú
            seguridad.
          </p>
        </Fragment>
      }
    />
  </Fragment>
);
