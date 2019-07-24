import React, { Fragment } from "react";
import ApplicationsPage from "../../components/ApplicationsPage/ApplicationsPage";
import { img8, reja_h } from "src/images";
import "src/main.module.less";

export default () => (
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
);
