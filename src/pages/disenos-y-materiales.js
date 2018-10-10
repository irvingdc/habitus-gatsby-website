import React, { Component } from "react"
import classes from "./disenos-y-materiales.module.css"
import '../main.module.css'
import Nav from '../components/Nav/Nav'
import DesignsCarousel from '../components/DesignsCarousel/DesignsCarousel'
import PictureBanner from '../components/PictureBanner/PictureBanner'
import Materials from '../components/Materials/Materials'
import DesignsIntroduction from '../components/DesignsIntroduction/DesignsIntroduction'
import Footer from "../components/Footer/Footer"
import { img10, celosia6 } from "../images"

class DisenosYMateriales extends Component {

    state = {
        latticeSelected: { model: 6, img: celosia6 }
    }

    selectLattice = (latticeSelected) => {
        this.setState({ latticeSelected })
    }

    render(){
        if(typeof window === "undefined") return <div></div>
        let bannerStyle = window.innerWidth < 770 ? {padding:"0px"} : {padding:"20px"}
        let titleStyle = window.innerWidth < 770 ? {
            fontSize: "30px",
            width:"220px",
            fontFamily: "PG",
            letterSpacing: "6px",
        } : {
            fontSize: "24px",
            fontFamily: "PG",
            letterSpacing: "6px",
        }
        return (
            <div className={classes.container}>
                <Nav fixedlogo/>
                <div style={bannerStyle}>
                    <PictureBanner
                        showsocial
                        img={ img10 }
                        title="DISEÑOS Y MATERIALES"
                        height="550px"
                        titlestyle={titleStyle}
                        background="linear-gradient(to right, #00000077, #00000044)"
                    />
                </div>
                <DesignsIntroduction lattice={ this.state.latticeSelected.img }/>
                <DesignsCarousel onChange={ this.selectLattice }/>
                <div style={{ background: "var(--habitus-tertiary)", height: "40px"}}></div>
                <Materials showdetails titlestyle={{color: "var(--habitus-primary)"}}/>
                <Footer/>
            </div>
        )
    }
}
export default DisenosYMateriales