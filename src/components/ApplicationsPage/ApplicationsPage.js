import React from "react";
import SectionHeader from "components/SectionHeader/SectionHeader";
import Footer from "components/Footer/Footer";
import Nav from "components/Nav/Nav";
import classes from "./ApplicationsPage.module.less";
import { Link } from "gatsby";

export default ({
  headerImage,
  installationImage,
  title,
  intro,
  recommendations,
}) => (
  <div className={classes.container}>
    <Nav />
    <SectionHeader type="B" img={headerImage} title={title} />
    <div className={classes.content}>
      <div className={classes.intro}>{intro}</div>
      <h3>RECOMENDACIONES</h3>
      <div className={classes.intro}>{recommendations}</div>
      <span className={classes.lines} />
      <p>Sugerencia para instalación</p>
      <img src={installationImage} alt="Instalación" />
      <p className={classes.label}>* El sistema de fijación se adecua a cada proyecto.</p>
      <p className={classes.label}>* Nuestras celosías no incluyen instalación</p>
    </div>
    <div className={classes.moreButton}>
      <Link to="/aplicaciones" className="boxWithShadow">
        MÁS APLICACIONES
      </Link>
    </div>
    <Footer />
  </div>
);
