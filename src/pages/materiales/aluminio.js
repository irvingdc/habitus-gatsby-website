import React, { Fragment } from "react";
import MaterialsPage from "../../components/MaterialsPage/MaterialsPage";
import { img2, exteriorIcon, interiorIcon, lightIcon } from "src/images";

export default () => (
  <MaterialsPage
    headerImage={img2}
    title="ALUMINIO"
    intro={
      <p>
        El aluminio es un material que se distingue por su gran resistencia a la
        corrosión y por ser un metal muy ligero.
      </p>
    }
    recommendations={
      <Fragment>
        <p>
          Las celosías de aluminio se sugieren para aplicaciones en interior y
          exterior.
        </p>
        <p>
          En aplicaciones para intemperie el aluminio es un excelente aliado ya
          que posee una gran resistencia a la corrosión; haciéndolo ideal en
          zonas de alta salinidad.
        </p>
        <p>
          También se recomienda en aplicaciones donde se requiera proyectos con
          menor capacidad de carga.
        </p>
      </Fragment>
    }
    dimensions={[
      {
        number: "0.91",
        label: "mm (cal.20)"
      },
      {
        number: "1.89",
        label: "mm (cal.14)"
      },
      {
        number: "2.65",
        label: "mm (cal.12)"
      },
      {
        number: "3.41",
        label: "mm (cal.10)"
      },
    ]}
    finish="double"
    icons={[
      {
        icon: exteriorIcon,
        label: "Exterior"
      },
      {
        icon: interiorIcon,
        label: "Interior"
      },
      {
        icon: lightIcon,
        label: "Ligero"
      }
    ]}
  />
);
