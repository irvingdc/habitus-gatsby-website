import React, { Fragment } from "react";
import MaterialsPage from "../../components/MaterialsPage/MaterialsPage";
import { img4, interiorIcon, lightIcon } from "src/images";
import "src/main.module.less";
import { Helmet } from "react-helmet";

export default () => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Habitus | Materiales de Celosías: MDF</title>
      <link rel="canonical" href="https://habitus.com.mx/materiales/mdf/" />
      <meta
        name="description"
        content="El MDF en celosías es una opción recomendada únicamente para interiores, debido a la versatilidad propia del material."
      />
      <link rel="shortcut icon" href="https://habitus.com.mx/logo.png" />
    </Helmet>
  <MaterialsPage
    headerImage={img4}
    title="MDF"
    intro={
      <p>
        MDF o fibra de densidad media. Es un tablero fabricado a partir de
        fibras de madera y resinas sintéticas comprimidas.
      </p>
    }
    recommendations={
      <Fragment>
        <p>
          Las celosías de MDF son ideales para aplicaciones en interior, ya sea
          para divisores o decoración debido a la versatilidad propia del
          material.
        </p>
        <p>
          El MDF se caracteriza por no tener vetas proporcionando una
          orientación adaptaptable a la necesidad que se desee.
        </p>
      </Fragment>
    }
    dimensions={[
      {
        number: "3.0",
        label: "mm"
      },
      {
        number: "5.50",
        label: "mm"
      },
      {
        number: "9.00",
        label: "mm"
      },
      {
        number: "12.00",
        label: "mm"
      },
      {
        number: "15.00",
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
