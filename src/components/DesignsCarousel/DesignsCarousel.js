import React, { Component } from "react";
import classes from "./DesignsCarousel.module.less";
import Button from "../Button/Button";
import Lattice from "../Lattice/Lattice";
import { Link } from "gatsby";
import {
  icono11,
  icono12,
  celosia1,
  celosia2,
  celosia3,
  celosia4,
  celosia5,
  celosia6,
  celosia7,
  celosia8,
  celosia9,
  celosia10,
  celosia11,
  celosia12,
  celosia13,
  celosia14,
  celosia15
} from "../../images";
import Header from "../Header/Header";

class DesignsCarousel extends Component {
  state = {
    lattices: [
      { model: "C.CU", img: celosia1 },
      { model: "C.RO", img: celosia2 },
      { model: "C.AR", img: celosia3 },
      { model: "C.FD", img: celosia4 },
      { model: "C.FL", img: celosia5 },
      { model: "C.HA", img: celosia6 },
      { model: "C.MO", img: celosia7 },
      { model: "C.RA", img: celosia8 },
      { model: "C.PA", img: celosia9 },
      { model: "C.HO", img: celosia10 },
      { model: "C.TR", img: celosia11 },
      { model: "C.LI", img: celosia12 },
      { model: "C.RT", img: celosia13 },
      { model: "C.LC", img: celosia14 },
      { model: "C.ES", img: celosia15 }
    ],
    latticeSelected: 5
  };

  componentDidMount() {
    if (this.props.onChange)
      this.props.onChange(this.state.lattices[this.state.latticeSelected]);
  }

  getLatticesToDisplay = () => {
    let selectedIndex = this.state.latticeSelected;
    var lattices = [],
      i;
    for (i = -4; i <= 4; i++) {
      var tempIndex = i + selectedIndex;
      tempIndex =
        tempIndex > this.state.lattices.length - 1
          ? tempIndex - this.state.lattices.length
          : tempIndex;
      tempIndex =
        tempIndex < 0 ? tempIndex + this.state.lattices.length : tempIndex;
      lattices.push(this.state.lattices[tempIndex]);
    }

    return lattices;
  };

  previousLattice = () => {
    var index = this.state.latticeSelected - 1;
    index = index < 0 ? this.state.lattices.length - 1 : index;
    this.selectLattice(this.state.lattices[index].model);
  };

  nextLattice = () => {
    var index = this.state.latticeSelected + 1;
    index = index > this.state.lattices.length - 1 ? 0 : index;
    this.selectLattice(this.state.lattices[index].model);
  };

  selectLattice = model => {
    let index = this.state.lattices.findIndex(it => it.model === model);
    this.setState({ latticeSelected: index });
    if (this.props.onChange) this.props.onChange(this.state.lattices[index]);
  };

  render() {
    if (typeof window === "undefined") return <div />;
    let buttonStyle =
      window.innerWidth < 770
        ? {
            fontSize: "14px",
            margin: "0px auto",
            padding: "8px 16px"
          }
        : {
            fontSize: "14px",
            margin: "20px auto",
            padding: "8px 16px"
          };
    return (
      <div
        className={[
          classes.container,
          this.props.selectable ? classes.selectable : "",
          this.props.small ? classes.small : ""
        ].join(" ")}
      >
        {!this.props.selectable ? <h2 className={classes.title}>NUESTROS DISEÑOS</h2> : null}
        <div className={classes.carousel}>
          <div className={classes.fadeIzq} onClick={this.previousLattice}>
            <img src={icono11} alt="Izquierda" title="Izquierda" />
          </div>
          <div className={classes.grid}>
            {this.getLatticesToDisplay().map((it, index) => (
              <Lattice
                selectable={this.props.selectable}
                key={index}
                selected={
                  this.state.lattices.findIndex(
                    lattice => lattice.model === it.model
                  ) === this.state.latticeSelected
                }
                img={it.img}
                model={it.model}
                click={this.selectLattice}
                small={this.props.small}
              />
            ))}
          </div>
          <div className={classes.fadeDer} onClick={this.nextLattice}>
            <img src={icono12} alt="Derecha" title="Derecha" />
          </div>
        </div>
        {this.props.showbutton ? (
          <Link
            to="/disenos-y-materiales"
            style={{
              textDecoration: "none",
              display: "block",
              width: "fit-content",
              margin: "auto"
            }}
          >
            <Button ghost style={buttonStyle}>
              VER DISEÑOS
            </Button>
          </Link>
        ) : null}
      </div>
    );
  }
}
export default DesignsCarousel;
