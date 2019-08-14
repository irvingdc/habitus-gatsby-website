import React, { Fragment } from "react";
import MaterialsPage from "../../components/MaterialsPage/MaterialsPage";
import { img5, interiorIcon, lightIcon } from "src/images";
import "src/main.module.less";
import { Helmet } from "react-helmet";

export default () => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Habitus | Materiales de Celosías: Triplay</title>
      <link
        rel="canonical"
        href="https://habitus.com.mx/materiales/triplay/"
      />
      <meta
        name="description"
        content="Celosías en triplay, excelente material para utilizarse en interior debido al acabado natural que brinda gracias a su textura amaderada."
      />
      <link rel="shortcut icon" href="https://habitus.com.mx/logo.png" />
    </Helmet>
    <MaterialsPage
      headerImage={img5}
      title="TRIPLAY"
      intro={
        <p>
          Triplay, material formado por varias capas compuestas de madera de
          pino, unidas con pegamentos fenólicos.
        </p>
      }
      recommendations={
        <Fragment>
          <p>
            Las celosías de triplay son ideales para interiores, debido al
            acabado natural que brinda.
          </p>
          <p>
            Este material se recomienda para dotar una textura amaderada a la
            aplicación.
          </p>
        </Fragment>
      }
      dimensions={[
        {
          number: "5.00",
          label: "mm"
        },
        {
          number: "12.00",
          label: "mm"
        },
        {
          number: "18.00",
          label: "mm"
        }
      ]}
      finish="single"
      icons={[
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
  </Fragment>
);
