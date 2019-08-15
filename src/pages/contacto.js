import React, { Component, Fragment } from "react";
import SectionHeader from "components/SectionHeader/SectionHeader";
import Footer from "components/Footer/Footer";
import Nav from "components/Nav/Nav";
import {
  latticeHead4,
  handIcon,
  arrowIcon,
  whatsapp,
  mailIcon
} from "src/images";
import classes from "styles/contacto.module.less";
import { Link } from "gatsby";
import Toast from "components/Toast/Toast";
import Message from "components/Message/Message";
import ConfirmationMessage from "components/ConfirmationMessage/ConfirmationMessage";
import "src/main.module.less";
import { Helmet } from "react-helmet";
import { phoneSolid } from "../images";
import EventBus from "eventbusjs";
import Axios from "axios";
import { createIframe } from "../functions";

export default class Contact extends Component {
  state = {
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    message: "",
    loading: false,
    showMessage: false,
    showConfirmationMessage: false
  };

  handleInputChange = (field, value) => {
    this.setState({ [field]: value });
  };

  sendForm = (first_name, last_name, phone, email, message) => {
    let url = "https://habitus.com.mx/contact_extra.php";
    let formData = new FormData();
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("message", message);
    this.setState({
      alertMessage:
        "Tu solicitud está siendo procesada. Quedará lista en unos momentos.",
      showMessage: true,
      loading: true
    });
    Axios({
      method: "post",
      url: url,
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } }
    })
      .then(result => {
        if (result.data === "success") {
          if(typeof window.fbq === "function") window.fbq('track', 'Lead');
          createIframe("https://www.habitus.com.mx/?conf=1")
          setTimeout(
            () =>
              this.setState({
                showMessage: false,
                loading: false
              }),
            2000
          );
          setTimeout(
            () =>
              this.setState({
                showConfirmationMessage: true
              }),
            2700
          );
        } else throw result;
      })
      .catch(error => {
        this.setState({ loading: false, showMessage: false });
        console.log("Error 2:", error);
      });
  };

  validateForm = () => {
    var errors = [];
    let { first_name, last_name, phone, email, message } = this.state;

    if (!first_name) {
      errors.push("nombre");
    }
    if (!last_name) {
      errors.push("apellido");
    }
    if (!phone) {
      errors.push("telefono");
    }
    if (!email) {
      errors.push("correo");
    }

    if (errors.length) {
      EventBus.dispatch("ALERT", this, {
        text:
          "Por favor completa los campos faltantes: " + errors.join(", ") + ".",
        time: 9000
      });
    } else {
      this.sendForm(first_name, last_name, phone, email, message);
    }
  };

  render() {
    if (typeof window === "undefined") return null;
    return (
      <Fragment>
        <Message
          display={this.state.showMessage}
          close={() => this.setState({ showMessage: false })}
          title={this.state.alertMessage}
        />
        <ConfirmationMessage
          display={this.state.showConfirmationMessage}
          close={() => this.setState({ showConfirmationMessage: false })}
        />
        <div className={classes.container}>
          <Nav />
          <Helmet>
            <meta charSet="utf-8" />
            <title>Habitus | Contacto</title>
            <link rel="canonical" href="https://habitus.com.mx/contacto/" />
            <meta
              name="description"
              content="Escoge tu celosía ideal de la mano de nuestros expertos ¡contáctanos! Te brindaremos la asesoría que necesitas para tu celosía."
            />
            <link rel="shortcut icon" href="https://habitus.com.mx/logo.png" />
          </Helmet>
          <SectionHeader type="A" img={latticeHead4} title="¡ ASESÓRATE !" />
          <Toast />
          <p className={classes.intro}>
            ¡ Ponte en contacto con nuestros expertos! <br />
            Con gusto te brindarán la asesoría que necesitas para tu celosía
          </p>
          <div className={classes.flex}>
            <div className={classes.left}>
              <div>
                <h4>Teléfono</h4>
                <a
                  href={
                    window.innerWidth > 700
                      ? "https://wa.me/5212227254692"
                      : "tel:2227254692"
                  }
                  rel="noopener noreferrer"
                >
                  <span>(222) 725 4692</span>

                  <img
                    src={window.innerWidth > 700 ? whatsapp : phoneSolid}
                    alt="Phone Icon"
                    title="Phone Icon"
                  />
                </a>
              </div>
              <div>
                <h4>Correo</h4>
                <a
                  href="mailto:diseno@habitus.com.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>diseno@habitus.com.mx</span>
                  <img src={mailIcon} alt="Email" title="Email" />
                </a>
              </div>
            </div>
            <div className={classes.right}>
              <input
                required
                type="text"
                placeholder="Nombre"
                onChange={event =>
                  this.handleInputChange("first_name", event.target.value)
                }
              />
              <input
                required
                type="text"
                placeholder="Apellido"
                onChange={event =>
                  this.handleInputChange("last_name", event.target.value)
                }
              />
              <input
                required
                type="text"
                placeholder="Correo"
                onChange={event =>
                  this.handleInputChange("email", event.target.value)
                }
              />
              <input
                required
                className={classes.emailInput}
                type="email"
                placeholder="Teléfono"
                onChange={event =>
                  this.handleInputChange("phone", event.target.value)
                }
              />
              <textarea
                required
                className={classes.emailInput}
                type="email"
                placeholder="Cuentanos sobre tu celosía o proyecto"
                onChange={event =>
                  this.handleInputChange("message", event.target.value)
                }
              />
              <button onClick={this.validateForm} className={classes.sendForm}>
                <img src={arrowIcon} alt="send" title="send" />
              </button>
            </div>
          </div>
          <p className={classes.or}>
            <span>ó</span>
          </p>
          <h3>¡EMPIEZA A CREAR TU CELOSÍA!</h3>
          <Link to="/personaliza" className={classes.personaliza}>
            <img src={handIcon} />
          </Link>
          <Footer hideContact />
        </div>
      </Fragment>
    );
  }
}
