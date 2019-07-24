import React, { Component } from "react";
import SectionHeader from "components/SectionHeader/SectionHeader";
import Footer from "components/Footer/Footer";
import DesignsCarousel from "components/DesignsCarousel/DesignsCarousel";
import Nav from "components/Nav/Nav";
import { latticeHead3, celosia6, icono21 } from "src/images";
import classes from "styles/diseños.module.less";

export default class Diseños extends Component {
  state = {
    latticeSelected: { model: 6, img: celosia6 }
  };

  selectLattice = latticeSelected => {
    this.setState({ latticeSelected });
  };
  render() {
    return (
      <div className={classes.container}>
        <Nav />
        <SectionHeader type="A" img={latticeHead3} title="DISEÑOS" />
        <p className={classes.text}>
          ¡Diseños pensados especialmente para satisfacer{" "}
          <b>cualquier necesidad</b> que tengas en mente!
        </p>
        <div className={classes.lattices}>
          <img
            src={this.state.latticeSelected.img}
            alt="Celosia"
            title="Celosia"
            className={classes.largeLattice}
          />
          <div>
            <DesignsCarousel onChange={this.selectLattice} small />
          </div>
        </div>
        <p className={classes.text}>
          Además de los diseños existentes podemos fabricar cualquiera de tus{" "}
          <b>ideas</b> Mándanos tu diseño a{" "}
          <a href="mailto:diseno@habitus.com.mx">diseno@habitus.com.mx</a>
        </p>
        <div className={classes.iconBottom}>
          <img src={icono21} />
        </div>
        <Footer />
      </div>
    );
  }
}
