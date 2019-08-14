import React from "react";
import SectionHeader from "components/SectionHeader/SectionHeader";
import Footer from "components/Footer/Footer";
import MaterialsDialog from "components/MaterialsDialog/MaterialsDialog";
import Nav from "components/Nav/Nav";
import { latticeHead1, img1, img2, img3, img4, img5 } from "src/images";
import classes from "styles/materiales.module.less";
import { Link } from "gatsby";
import "src/main.module.less";
import { Helmet } from "react-helmet";

export default () => (
  <div className={classes.container}>
    <Nav />
    <Helmet>
      <meta charSet="utf-8" />
      <title>Habitus | Materiales de Celosías</title>
      <link rel="canonical" href="https://habitus.com.mx/materiales/" />
      <meta
        name="description"
        content="Materiales de primera calidad para celosías en interior y exterior; acero al carbón, acero inoxidable, aluminio, MDF y triplay."
      />
      <link rel="shortcut icon" href="https://habitus.com.mx/logo.png" />
    </Helmet>
    <SectionHeader type="A" img={latticeHead1} title="MATERIALES" />
    <p className={classes.text}>
      Contamos con materiales de primera <b>calidad</b> que distinguen cualquier
      tipo de proyecto.
    </p>
    <h2>CELOSÍAS PARA EXTERIOR</h2>
    <div className={classes.cards}>
      <Material
        title="ACERO AL CARBÓN"
        img={img3}
        link="/materiales/acero-al-carbon"
      />
      <Material
        title="ACERO INOXIDABLE"
        img={img1}
        link="/materiales/acero-inoxidable"
      />
      <Material title="ALUMINIO" img={img2} link="/materiales/aluminio" />
    </div>
    <h2>CELOSÍAS PARA INTERIOR</h2>
    <div className={classes.cards}>
      <Material title="MDF" img={img4} link="/materiales/mdf" />
      <Material title="TRIPLAY" img={img5} link="/materiales/triplay" />
    </div>
    <MaterialsDialog />
    <Footer />
  </div>
);

const Material = ({ title, img, link }) => (
  <Link to={link} className={[classes.card, "boxWithShadow"].join(" ")}>
    <h3>{title}</h3>
    <div
      className={classes.img}
      style={{
        background: `url(${img}) center center / cover no-repeat`
      }}
    />
    <span>+ INFO</span>
  </Link>
);
