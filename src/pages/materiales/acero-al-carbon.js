import React, { Fragment } from "react";
import MaterialsPage from "../../components/MaterialsPage/MaterialsPage";
import { img3, exteriorIcon, interiorIcon, strengthIcon } from "src/images";
import "src/main.module.less";
import { Helmet } from "react-helmet";

export default () => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Habitus | Materiales de Celosías: Acero al Carbón</title>
      <link rel="canonical" href="https://habitus.com.mx/materiales/acero-al-carbon/" />
      <meta
        name="description"
        content="Celosías en acero al carbón o lámina negra, excelentes para utilizarse en interiores y exteriores. Conoces nuestros acabados en acero al carbón con pintura electrostática o acero al carbón natural."
      />
      <link rel="shortcut icon" href="https://habitus.com.mx/logo.png" />
    </Helmet><MaterialsPage
    headerImage={img3}
    title="ACERO AL CARBÓN"
    intro={
      <p>
        Acero al carbón o también conocido como lámina negra es uno de los
        aceros de mayor uso debido a sus propiedades físicas, térmicas y
        maquinabilidad.
      </p>
    }
    recommendations={
      <Fragment>
        <p>
          Las celosías de acero al carbón se recomiendan para aplicaciones en
          interior y exterior.
        </p>
        <p>
          Para aplicaciones en exterior se sugiere ampliamente utilizarlas con
          pintura electrostática para evitar la corrosión propia del material.
        </p>
        <p>
          Debido a la resistencia del acero, es un material perfecto para
          aplicaciones de protección, brindando un ambiente de seguridad y
          diseño
        </p>
      </Fragment>
    }
    dimensions={[
      {
        number: "0.91",
        label: "mm (cal.20)"
      },
      {
        number: "1.21",
        label: "mm (cal.18)"
      },
      {
        number: "1.51",
        label: "mm (cal.16)"
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
      {
        number: "4.76",
        label: "mm (3/16”)"
      },
      {
        number: "6.35",
        label: "mm (1/4”)"
      }
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
        icon: strengthIcon,
        label: "Dureza"
      }
    ]}
  />
  </Fragment>
);
