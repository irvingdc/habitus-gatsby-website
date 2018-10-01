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

    closeApplicationDialog = () => {
        this.setState({ applicationDialogDisplayed: false })
    }

    render(){
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
                />
                <div className={ classes.designsAndMaterials }>
                    <Header size="30px">DISEÑOS Y MATERIALES</Header>
                    <p>Contamos con diseños y materiales de primera calidad que distinguen cualquier tipo de proyecto.</p>
                    <DesignsCarousel showbutton/>
                    <Materials/>
                </div>
                <div style={{padding:"20px"}}>
                    <PictureBanner
                        img={ img12 }
                        buttoncontent="CREA Y COTIZA TU PROYECTO"
                        link="/cotiza"
                        background="#00000088"
                        withpadding
                        height="400px"
                        buttonstyle={{
                            fontSize: "20px",
                            padding: "10px",
                            letterSpacing: "3px",
                            fontFamily: "GS",
                            fontWeight: "900",
                        }}
                    />
                </div>
                <h3 className={ classes.middleMessage }>¿no estás seguro que buscas?</h3>
                <div style={{padding:"20px"}}>
                    <PictureBanner
                        img={ img19 }
                        title="¡Inspírate!"
                        height="400px"
                        withpadding
                        buttoncontent="VE NUESTRO PORTAFOLIO"
                        link="/portafolio"
                        background="linear-gradient(to right, #000000bb, #00000088, #00000022)"
                        buttonstyle={{
                            padding: "12px 10px 10px",
                            fontWeight: "900",
                        }}
                    />
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Index