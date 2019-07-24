import React, { Fragment } from "react";
import ApplicationsPage from "../../components/ApplicationsPage/ApplicationsPage";
import { img6, tragaluz_h } from "src/images";
import "src/main.module.less";

export default () => (
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
        Permite que tus tragaluces sean fabricados con nuestras celosías,
        brindando seguridad y diseño a tu ambiente. juego de luz y sombras.
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
);
