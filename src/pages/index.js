import React, { Component } from 'react'
import classes from './index.module.css'
import '../main.module.css'
import Nav from '../components/Nav/Nav'
import Introduction from '../components/Introduction/Introduction'
import Process from '../components/Process/Process'
import Applications from '../components/Applications/Applications'
import DesignsCarousel from '../components/DesignsCarousel/DesignsCarousel'
import Materials from '../components/Materials/Materials'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import PictureBanner from '../components/PictureBanner/PictureBanner'
import { img12, img19, logo } from '../images'
import ApplicationDialog from '../components/ApplicationDialog/ApplicationDialog'
import {Helmet} from "react-helmet"

class Index extends Component{
    
    state={
        application: "fachadas",
        applicationDialogDisplayed: false,
    }

    showApplicationDialog = (application) => {
        console.log("applicacion", application)
        this.setState({ application })
        setTimeout(()=>this.setState({applicationDialogDisplayed: true}),75)
    }

    selectApplication = application => {
        console.log("application", application)
        this.setState({ application })
    }

    closeApplicationDialog = () => {
        this.setState({ applicationDialogDisplayed: false })
    }

    render(){
        if(typeof window === "undefined") return <div></div>
        let bannerStyle = window.innerWidth < 770 ? {padding:"0px"} : {padding:"20px"}
        let buttonstyle = window.innerWidth < 550 ? {
            fontSize: "17px",
            padding: "8px",
            letterSpacing: "2px",
            fontFamily: "GS",
            fontWeight: "900",
        } : {
            fontSize: "20px",
            padding: "10px",
            letterSpacing: "3px",
            fontFamily: "GS",
            fontWeight: "900",
        }
        return(
            <div className={classes.MainContainer}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Habitus | Ambientes que destacan</title>
                    <link rel="canonical" href="https://habitus.com.mx" />
                    <meta name="description" content="HABITUS pone a tu alcance soluciones en arquitectura e interiorismo en forma de celosías y páneles detalladamente diseñados, ideales para llenar de vida un espacio o cualquier proyecto."/>
                    <link rel="shortcut icon" href="https://habitus.com.mx/logo.png"/>
                </Helmet>
                <Nav/>
                <Introduction/>
                <Process/>
                <Applications show={ this.showApplicationDialog }/>
                <ApplicationDialog 
                    application={ this.state.application } 
                    display={ this.state.applicationDialogDisplayed }
                    close={ this.closeApplicationDialog }
                    selectApplication={ this.selectApplication }
                />
                <div className={ classes.designsAndMaterials }>
                    <Header size="30px">DISEÑOS Y MATERIALES</Header>
                    <p>Contamos con diseños y materiales de primera calidad que distinguen cualquier tipo de proyecto.</p>
                    <DesignsCarousel showbutton/>
                    <Materials/>
                </div>
                <div style={ bannerStyle }>
                    <PictureBanner
                        img={ img12 }
                        buttoncontent="CREA Y COTIZA TU CELOSÍA"
                        link="/personaliza/"
                        background="#00000088"
                        withpadding
                        height="400px"
                        buttonstyle={buttonstyle}
                    />
                </div>
                <h3 className={ classes.middleMessage }>¿no estás seguro que buscas?</h3>
                <div style={ bannerStyle }>
                    <PictureBanner
                        img={ img19 }
                        title="¡Inspírate!"
                        height="400px"
                        withpadding
                        buttoncontent="VE NUESTRO PORTAFOLIO"
                        link="/portafolio/"
                        background="linear-gradient(to right, #000000bb, #00000088, #00000022)"
                        buttonstyle={buttonstyle}
                    />
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Index