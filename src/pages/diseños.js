import React, { Component } from "react";
import SectionHeader from "components/SectionHeader/SectionHeader";
import Footer from "components/Footer/Footer";
import DesignsCarousel from "components/DesignsCarousel/DesignsCarousel";
import Nav from "components/Nav/Nav";
import { latticeHead3, celosia6, icono21 } from "src/images";
import classes from "styles/diseños.module.less";
import "src/main.module.less";
import { Helmet } from "react-helmet";

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
        <Helmet>
            <meta charSet="utf-8" />
            <title>Habitus | Diseños de Celosías</title>
            <link
              rel="canonical"
              href="https://habitus.com.mx/diseños/"
            />
            <meta
              name="description"
              content="Diseños para cualquier tipo de proyecto, diseños geométricos u orgánicos. Contamos con diseños estéticos y funcionales además de que podemos fabricar cualquier idea propia."
            />
            <link rel="shortcut icon" href="https://habitus.com.mx/logo.png" />
          </Helmet>
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
