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
import PictureBanner from '../components/PictureBanner/PictureBanner';
import { img12, img19 } from '../images'
import ApplicationDialog from '../components/ApplicationDialog/ApplicationDialog';

class Index extends Component{
    
    state={
        application: "fachadas",
        applicationDialogDisplayed: false,
    }

    showApplicationDialog = (application) => {
        console.log("applicacion", application)
        this.setState({ application, applicationDialogDisplayed: true })
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
                        buttoncontent="CREA Y COTIZA TU PROYECTO"
                        link="/beta/cotiza/"
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
                        link="/beta/portafolio/"
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