import React, { Fragment } from "react";
import MaterialsPage from "../../components/MaterialsPage/MaterialsPage";
import { img1, exteriorIcon, interiorIcon, strengthIcon } from "src/images";
import "src/main.module.less";
import { Helmet } from "react-helmet";

export default () => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Habitus | Materiales de Celosías: Acero Inoxidable</title>
      <link rel="canonical" href="https://habitus.com.mx/materiales/acero-inoxidable/" />
      <meta
        name="description"
        content="El acero inoxidable en celosías es una opción recomendable en caso de requerir dureza y resistencia a la corrosión."
      />
      <link rel="shortcut icon" href="https://habitus.com.mx/logo.png" />
    </Helmet>
    <MaterialsPage
      headerImage={img1}
      title="ACERO INOXIDABLE"
      intro={
        <p>
          Acero inoxidable conocido por su destacable resistencia a la
          corrosión, propiedades mecánicas y dureza.
        </p>
      }
      recommendations={
        <Fragment>
          <p>
            Las celosías de acero inoxidable se recomiendan para aplicaciones
            tanto en interior como en exterior.
          </p>
          <p>
            Para aplicaciones en exterior se sugiere ampliamente en acabado
            natural debido a su alta resistencia a la corrosión.
          </p>
          <p>
            Debido a la dureza y la alta duración del acero inoxidable, es un
            material excelente para intemperie.
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
        }
      ]}
      finish="single"
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
