import React from "react";
import SectionHeader from "components/SectionHeader/SectionHeader";
import Footer from "components/Footer/Footer";
import Nav from "components/Nav/Nav";
import { dropIcon } from "src/images";
import classes from "./MaterialsPage.module.less";
import { Link } from "gatsby";

function leftContent(dimensions, finish) {
  return (
    <div className={classes.left}>
      <div>
        <h4>CONOCE LOS ESPESORES QUE MANEJAMOS</h4>
        <ul>
          {dimensions.map((it, index) => (
            <li key={index}>
              <b>{it.number}</b> {it.label}
            </li>
          ))}
        </ul>
      </div>
      <span className={classes.tinyLine} />
      <div>
        <h4>
          {finish === "single" ? "ACABADO" : "PREGUNTA POR NUESTROS ACABADOS"}
        </h4>
        <p>{finish === "single" ? "Natural" : "natural o pintado"}</p>
        <img src={dropIcon} alt="pintado" />
      </div>
    </div>
  );
}

function rightContent(intro, recommendations, icons) {
  return (
    <div className={classes.right}>
      <div className={classes.intro}>{intro}</div>
      <span className={classes.bigLine} />
      <h3>RECOMENDACIONES</h3>
      {recommendations}
      <div className={classes.icons}>
        {icons.map((it, index) => (
          <div key={index}>
            <img src={it.icon} alt={it.label} />
            <p>{it.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ({
  headerImage,
  title,
  intro,
  recommendations,
  dimensions,
  finish,
  icons
}) => (
  <div className={classes.container}>
    <Nav />
    <SectionHeader type="B" img={headerImage} title={title} />
    <div className={classes.content}>
      {leftContent(dimensions, finish)}
      {rightContent(intro, recommendations, icons)}
    </div>
    <div className={classes.moreButton}>
      <Link to="/materiales" className="boxWithShadow">MÁS MATERIALES</Link>
    </div>
    <Footer />
  </div>
);
