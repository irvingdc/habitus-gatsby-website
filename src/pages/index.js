import React, { Component } from "react";
import classes from "styles/index.module.less";
import "src/main.module.less";
import Nav from "components/Nav/Nav";
import Introduction from "components/Introduction/Introduction";
import Footer from "components/Footer/Footer";
import SectionsIntro from "components/SectionsIntro/SectionsIntro";
import PictureBanner from "components/PictureBanner/PictureBanner";
import { img19 } from "src/images";
import { Helmet } from "react-helmet";
import BottomBanner from "../components/BottomBanner/BottomBanner";

class Index extends Component {
  state = {
    application: "fachadas",
    applicationDialogDisplayed: false
  };

  showApplicationDialog = application => {
    console.log("applicacion", application);
    this.setState({ application });
    setTimeout(() => this.setState({ applicationDialogDisplayed: true }), 75);
  };

  selectApplication = application => {
    console.log("application", application);
    this.setState({ application });
  };

  closeApplicationDialog = () => {
    this.setState({ applicationDialogDisplayed: false });
  };

  render() {
    return (
      <div className={classes.MainContainer}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Habitus | Ambientes que destacan</title>
          <link rel="canonical" href="https://habitus.com.mx" />
          <meta
            name="description"
            content="HABITUS pone a tu alcance soluciones en arquitectura e interiorismo en forma de celosías y páneles detalladamente diseñados, ideales para llenar de vida un espacio o cualquier proyecto."
          />
          <link rel="shortcut icon" href="https://habitus.com.mx/logo.png" />
        </Helmet>
        <Nav />
        <Introduction />
        <SectionsIntro />
        <h3 className={[classes.middleMessage,"boxWithShadow"].join(" ")}>¿no estás seguro que buscas?</h3>
        <BottomBanner/>
        <Footer />
      </div>
    );
  }
}
export default Index;
