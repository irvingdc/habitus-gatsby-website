import React from "react";
import SectionHeader from "components/SectionHeader/SectionHeader";
import Footer from "components/Footer/Footer";
import MaterialsDialog from "components/MaterialsDialog/MaterialsDialog";
import Nav from "components/Nav/Nav";
import { latticeHead1, img1, img2, img3, img4, img5 } from "src/images";
import classes from "styles/materiales.module.less";
import { Link } from "gatsby";
import "src/main.module.less";

export default () => (
  <div className={classes.container}>
    <Nav />
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
    <MaterialsDialog/>
    <Footer />
  </div>
);

const Material = ({ title, img, link }) => (
  <div className={[classes.card, "boxWithShadow"].join(" ")}>
    <h3>{title}</h3>
    <div
      className={classes.img}
      style={{
        background: `url(${img}) center center / cover no-repeat`
      }}
    />
    <Link to={link}>+ INFO</Link>
  </div>
);
