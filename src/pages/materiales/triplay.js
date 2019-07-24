import React, { Fragment } from "react";
import MaterialsPage from "../../components/MaterialsPage/MaterialsPage";
import { img5, interiorIcon, lightIcon } from "src/images";
import "src/main.module.less";

export default () => (
  <MaterialsPage
    headerImage={img5}
    title="TRIPLAY"
    intro={
      <p>
        Triplay, material formado por varias capas compuestas de madera de pino,
        unidas con pegamentos fenólicos.
      </p>
    }
    recommendations={
      <Fragment>
        <p>
          Las celosías de triplay son ideales para interiores, debido al acabado
          natural que brinda.
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
);
