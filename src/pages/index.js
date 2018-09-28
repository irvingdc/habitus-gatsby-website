import React from 'react'
import classes from './index.module.css'
import '../main.module.css'
import Nav from '../components/Nav/Nav'
import Introduction from '../components/Introduction/Introduction'
import Process from '../components/Process/Process'
import Applications from '../components/Applications/Applications'
import DesignsCarousel from '../components/DesignsCarousel/DesignsCarousel'
import Materials from '../components/Materials/Materials'
import Footer from '../components/Footer/Footer'
import PictureBanner from '../components/PictureBanner/PictureBanner';

export default () => (
    <div className={classes.MainContainer}>
        <Nav/>
        <Introduction/>
        <Process/>
        <Applications/>
        <div className={ classes.designsAndMaterials }>
            <h2>DISEÑOS Y MATERIALES</h2>
            <p>Contamos con diseños y materiales de primera calidad que distinguen cualquier tipo de proyecto.</p>
            <DesignsCarousel/>
            <Materials/>
        </div>
        <PictureBanner
            img="/static/img/12.jpg"
            buttoncontent="CREA Y COTIZA TU PROYECTO"
            link="/beta/cotiza"
            background="#00000088"
            buttonstyle={{
                fontSize: "20px",
                padding: "10px",
                letterSpacing: "3px",
                fontFamily: "GS",
                fontWeight: "900",
            }}
        />
        <h3 className={ classes.middleMessage }>¿no estás seguro que buscas?</h3>
        <PictureBanner
            img="/static/img/19.jpg"
            title="¡Inspírate!"
            buttoncontent="VE NUESTRO PORTAFOLIO"
            link="/beta/portafolio"
            background="linear-gradient(to right, #000000bb, #00000088, #00000022)"
            buttonstyle={{
                padding: "12px 10px 10px",
                fontWeight: "900",
            }}
        />
        <Footer/>
    </div>
)