import React, { Component } from "react";
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

  sendForm = () => {
    console.log("sending form");
    if (typeof window.fbq === "function") window.fbq("track", "Lead");
    this.setState({
      message:
        "Tu solicitud está siendo procesada. Quedará lista en unos momentos.",
      showMessage: true,
      loading: true
    });
    //mocked result
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
  };

  render() {
    return (
      <div className={classes.container}>
        <Nav />
        <SectionHeader type="A" img={latticeHead4} title="¡CONTÁCTANOS!" />
        <Toast />
        <Message
          display={this.state.showMessage}
          close={() => this.setState({ showMessage: false })}
          title={this.state.message}
        />
        <ConfirmationMessage
          display={this.state.showConfirmationMessage}
          close={() => this.setState({ showConfirmationMessage: false })}
        />
        <p className={classes.intro}>
          ¡Déjate asesorar por nuestros expertos!
          <br />
          Con gusto te brindarán la asesoría que necesitas para tu celosía
        </p>
        <div className={classes.flex}>
          <div className={classes.left}>
            <div>
              <h4>Teléfono</h4>
              <a
                href="https://wa.me/5212221228857"
                target="_blank"
                rel="noopener noreferrer"
              >
                + 52 1 (222) 122 8857
              </a>
              <img src={whatsapp} alt="Whatsapp" title="Whatsapp" />
            </div>
            <div>
              <h4>Correo</h4>
              <a
                href="mailto:diseno@habitus.com.mx"
                target="_blank"
                rel="noopener noreferrer"
              >
                diseno@habitus.com.mx
              </a>
              <img src={mailIcon} alt="Email" title="Email" />
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
            <button onClick={this.sendForm} className={classes.sendForm}>
              <img src={arrowIcon} alt="send" title="send" />
            </button>
          </div>
        </div>
        <p className={classes.or}>ó</p>
        <h3>¡EMPIEZA A CREAR TU CELOSÍA!</h3>
        <Link to="/personaliza" className={classes.personaliza}>
          <img src={handIcon} />
        </Link>
        <Footer />
      </div>
    );
  }
}
