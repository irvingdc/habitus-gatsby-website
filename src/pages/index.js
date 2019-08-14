import React, { Component } from "react";
import classes from "styles/index.module.less";
import "src/main.module.less";
import Nav from "components/Nav/Nav";
import Introduction from "components/Introduction/Introduction";
import Footer from "components/Footer/Footer";
import SectionsIntro from "components/SectionsIntro/SectionsIntro";
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
          <title>Habitus | Celosías que destacan</title>
          <link rel="canonical" href="https://habitus.com.mx" />
          <meta
            name="description"
            content="HABITUS fabrica celosías y paneles personalizados para todo proyecto de arquitectura, construcción y diseño; ideales para dar vida a un espacio o desarrollo."
          />
          <link rel="shortcut icon" href="https://habitus.com.mx/logo.png" />
        </Helmet>
        <Nav />
        <Introduction />
        <SectionsIntro />
        <h3 className={[classes.middleMessage, "boxWithShadow"].join(" ")}>
          ¿no estás seguro que buscas?
        </h3>
        <BottomBanner />
        <Footer hideContact />
      </div>
    );
  }
}
export default Index;
