import React from "react"
import classes from "./index.module.css"
import '../main.module.css'
import Nav from '../components/Nav/Nav'
import DesignsCarousel from '../components/DesignsCarousel/DesignsCarousel'
import PictureBanner from '../components/PictureBanner/PictureBanner'
import Materials from '../components/Materials/Materials'
import DesignsIntroduction from '../components/DesignsIntroduction/DesignsIntroduction'
import Footer from "../components/Footer/Footer"
import { img10 } from "../images"

export default () => (
    <div className={classes.container}>
        <Nav fixedlogo/>
        <div style={{padding:"20px"}}>
            <PictureBanner
                showsocial
                img={ img10 }
                title="DISEÑOS Y MATERIALES"
                height="550px"
                titlestyle={{
                    fontSize: "24px",
                    fontFamily: "PG",
                    letterSpacing: "6px",
                }}
                background="linear-gradient(to right, #00000077, #00000044)"
            />
        </div>
        <DesignsIntroduction/>
        <DesignsCarousel/>
        <div style={{ background: "var(--habitus-tertiary)", height: "40px"}}></div>
        <Materials showdetails titlestyle={{color: "var(--habitus-primary)"}}/>
        <Footer/>
    </div>
)