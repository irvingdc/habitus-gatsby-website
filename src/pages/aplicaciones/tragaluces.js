import React, { Fragment } from "react";
import ApplicationsPage from "../../components/ApplicationsPage/ApplicationsPage";
import { img6, tragaluz_h } from "src/images";
import "src/main.module.less";
import { Helmet } from "react-helmet";

export default () => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Habitus | Aplicaciones de Celosías: Tragaluces</title>
      <link rel="canonical" href="https://habitus.com.mx/aplicaciones/tragaluces/" />
      <meta
        name="description"
        content="Los tragaluces con celosías brindan de gran calidez un ambiente por el juego de luces y sombras que proyectan. "
      />
      <link rel="shortcut icon" href="https://habitus.com.mx/logo.png" />
    </Helmet>
    <ApplicationsPage
      headerImage={img6}
      installationImage={tragaluz_h}
      title={
        <Fragment>
          <i>CELOSÍAS EN</i> TRAGALUCES
        </Fragment>
      }
      intro={
        <p>
          Permite que tus tragaluces sean fabricados con nuestras celosías,
          brindando seguridad y diseño a tu ambiente con el juego de luz y
          sombras.
        </p>
      }
      recommendations={
        <Fragment>
          <p>
            Las celosías en aplicaciones de tragaluz pueden ser de distintos
            materiales como acero al carbón, aluminio, incluso triplay y MDF.
          </p>
          <p>
            Te recomendamos escoger el diseño conforme a la difusión solar que
            desees obtener.
          </p>
        </Fragment>
      }
    />
  </Fragment>
);
