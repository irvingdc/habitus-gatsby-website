import React, { Component, Fragment } from "react";
import classes from "./MaterialsDialog.module.less";
import Dialog from "../Dialog/Dialog";
import DetailsTable from "../DetailsTable/DetailsTable";

export default class MaterialsDialog extends Component {
  state = { open: false };

  render() {
    if (typeof window === "undefined") return <div />;
    let padding = window.innerWidth < 770 ? "30px 15px 35px" : "55px 35px 35px";
    let data = {
      head: [
        "",
        "Aluminio",
        "Acero Inoxidable",
        "Acero al Carbón",
        "MDF",
        "Triplay"
      ],
      content: [
        [
          "RESISTENCIA A LA INTEMPERIE",
          { val: true, special: false },
          { val: true, special: false },
          { val: true, special: true },
          { val: false, special: false },
          { val: false, special: false }
        ],
        [
          "OXIDACIÓN",
          { val: true, special: false },
          { val: true, special: false },
          { val: false, special: true },
          { val: false, special: false },
          { val: false, special: false }
        ],
        [
          "DUREZA",
          { val: false, special: false },
          { val: false, special: false },
          { val: true, special: true },
          "n/a",
          "n/a"
        ],
        [
          "MALEABILIDAD",
          { val: true, special: false },
          { val: false, special: false },
          { val: true, special: false },
          { val: true, special: false },
          { val: true, special: false }
        ],
        [
          "DURABILIDAD EN INTERIORES",
          { val: "Alto", special: false },
          { val: "Alto", special: false },
          { val: "Alto", special: false },
          { val: "Alto", special: false },
          { val: "Alto", special: false }
        ],
        [
          "PESO",
          { val: "Bajo", special: false },
          { val: "Alto", special: false },
          { val: "Alto", special: false },
          { val: "Bajo", special: false },
          { val: "Bajo", special: false }
        ],
        [
          "SOLDABILIDAD",
          { val: false, special: false },
          { val: true, special: false },
          { val: true, special: false },
          "n/a",
          "n/a"
        ],
        [
          "ACABADO",
          { val: "Natural", special: false },
          { val: "Natural", special: false },
          { val: "Natural /", special: true },
          { val: "Natural /", special: true },
          { val: "Natural", special: false }
        ],
        [
          "DOBLEZ",
          { val: true, special: false },
          { val: true, special: false },
          { val: true, special: false },
          { val: false, special: false },
          { val: false, special: false }
        ]
      ]
    };
    return (
      <Fragment>
        <div className={classes.button}>
          <button onClick={() => this.setState({ open: true })}>
            VER TABLA DE COMPARACIÓN DE MATERIALES
          </button>
        </div>
        <Dialog
          display={this.state.open}
          title="MATERIALES"
          close={() => this.setState({ open: false })}
          padding={padding}
          scrollable
        >
          <DetailsTable data={data} withlines scrollable />
          <p className={classes.warning}>
            <span>*</span> Pintado
          </p>
        </Dialog>
      </Fragment>
    );
  }
}
