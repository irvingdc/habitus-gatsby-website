import React from "react";
import SectionHeader from "components/SectionHeader/SectionHeader";
import Footer from "components/Footer/Footer";
import Nav from "components/Nav/Nav";
import "src/main.module.less";
import { Helmet } from "react-helmet";
import {
  latticeHead2,
  img15,
  img13,
  img11,
  img6,
  img16,
  img7,
  img8,
  img22
} from "src/images";
import classes from "styles/aplicaciones.module.less";
import { Link } from "gatsby";

export default () => (
  <div className={classes.container}>
    <Nav />
    <Helmet>
      <meta charSet="utf-8" />
      <title>Habitus | Aplicaciones de Celosías</title>
      <link rel="canonical" href="https://habitus.com.mx/aplicaciones/" />
      <meta
        name="description"
        content="Las celosías pueden utilizarse en cualquier aplicación que te imagines como barandales, divisores, puertas y portones, fachadas, rejas, pérgolas, decoración y tragaluces. Las ventajas de ocupar celosías son que brindan seguridad, calidez y creatividad a cualquier proyecto de arquitectura e interiorismo."
      />
      <link rel="shortcut icon" href="https://habitus.com.mx/logo.png" />
    </Helmet>
    <SectionHeader type="A" img={latticeHead2} title="APLICACIONES" />
    <p className={classes.text}>
      Brinda seguridad, calidez y creatividad a cualquier proyecto de
      arquitectura e interiorismo a través de diferentes aplicaciones de
      celosías.
    </p>
    <div className={classes.flex}>
      <div className={[classes.cards, classes.left].join(" ")}>
        <Application
          title="DIVISORES"
          img={img15}
          link="/aplicaciones/divisores"
        />
        <Application
          title="FACHADAS"
          img={img13}
          link="/aplicaciones/fachadas"
        />
        <Application
          title="PÉRGOLAS"
          img={img11}
          link="/aplicaciones/pergolas"
        />
        <Application
          title="TRAGALUCES"
          img={img6}
          link="/aplicaciones/tragaluces"
        />
      </div>
      <div className={[classes.cards, classes.right].join(" ")}>
        <Application
          title="BARANDALES"
          img={img16}
          link="/aplicaciones/barandales"
        />
        <Application
          title="PORTONES"
          img={img7}
          link="/aplicaciones/portones"
        />
        <Application title="REJAS" img={img8} link="/aplicaciones/rejas" />
        <Application
          title="DECORACIÓN"
          img={img22}
          link="/aplicaciones/decoracion"
        />
        <h4>
          Y CUALQUIER
          <br />
          APLICACIÓN <b>DE CELOSÍA</b>
          <br />
          QUE TE IMAGINES...
        </h4>
      </div>
    </div>
    <Footer />
  </div>
);

const Application = ({ title, img, link }) => (
  <Link to={link} className={[classes.card, "boxWithShadow"].join(" ")}>
    <div
      className={classes.img}
      style={{
        background: `url(${img}) center center / cover no-repeat`
      }}
    >
      <div className={classes.backdrop}>
        <h3>{title}</h3>
        <span>+ INFO</span>
      </div>
    </div>
  </Link>
);
