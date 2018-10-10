import React, { Component } from "react"
import classes from "./cotiza.module.css"
import '../main.module.css'
import Nav from '../components/Nav/Nav'
import Option from '../components/Option/Option'
import DesignsCarousel from '../components/DesignsCarousel/DesignsCarousel'
import PictureBanner from '../components/PictureBanner/PictureBanner'
import Footer from "../components/Footer/Footer"
import { icono12, img1, img2, img3, img4, img5, img14, img8, img7, img15, img11, img18, img16, img6, img13 } from "../images"
import Header from "../components/Header/Header";
import FileInput from "../components/FileInput/FileInput";

class Cotiza extends Component {

    state = {
        latticeSelected: null,
        usage: [
            { value: "interior", selected: false },
            { value: "exterior", selected: false },
        ],
        applications: [
            { value: "rejas", selected: false, img: img8 },
            { value: "puertas y portones", selected: false, img: img7 },
            { value: "divisores", selected: false, img: img15 },
            { value: "pérgolas", selected: false, img: img11 },
            { value: "decoración", selected: false, img: img18 },
            { value: "barandales", selected: false, img: img16 },
            { value: "tragaluces y plafones", selected: false, img: img6 },
            { value: "fachadas", selected: false, img: img13 },
        ],
        materials: [
            { value: "acero al carbón", selected: false, img: img3 },
            { value: "acero inoxidable", selected: false, img: img1 },
            { value: "aluminio", selected: false, img: img2 },
            { value: "mdf", selected: false, img: img4 },
            { value: "triplay", selected: false, img: img5 },
        ],
        finishStyles: [
            { value: "si", selected: false },
            { value: "no", selected: false },
        ],
        thicknesses: [
            { value: "1.89 mm (cal.14)", selected: false },
            { value: "2.65 mm (cal.12)", selected: false },
            { value: "3.41 mm (cal 10)", selected: false },
        ],
        height: "",
        width: "",
        amount: "",
        name: "",
        phone: "",
        email: "",
    }

    selectLattice = (latticeSelected) => {
        this.setState({ latticeSelected })
    }

    selectOption = (option, name) => {
        console.log("selecting "+name+": ", option)
        let copy = this.state[name].map(it=>({
            ...it,
            selected: (it.value === option)
        }))
        this.setState({ [name]: copy })
    }

    handleInputChange = (field, value) => {
        console.log("changing "+field+" to: ", value)
        this.setState({ [field]: value })
    }

    sendForm = () => {
        console.log("sending form")
    }

    render(){
        if(typeof window === "undefined") return <div></div>
        let bannerStyle = window.innerWidth < 770 ? {padding:"0px"} : {padding:"20px"}
        let headerStyle = window.innerWidth < 770 ? {letterSpacing: "5px", fontSize: "28px", margin: "30px 10px"} : {letterSpacing: "20px", fontSize: "28px", margin: "30px"}
        let materialsWidth = window.innerWidth < 1300 ?  undefined : "210px"
        return (
            <div className={classes.container}>
                <Nav fixedlogo/>
                <div style={bannerStyle}>
                    <PictureBanner
                        showsocial
                        img={ img14 }
                        height="600px"
                        background="linear-gradient(to right, #00000022, #00000022)"
                    />
                </div>
                <Header style={headerStyle}>EMPIEZA A CREAR</Header>

                <i className={ classes.line }></i>
                <h3 className={ classes.subheader}>USO</h3>
                <div className={ classes.usageSection }>
                    { this.state.usage.map((it, index)=> (
                        <Option 
                            key={ index } 
                            selected={ it.selected } 
                            value={ it.value } 
                            name="usage"
                            onSelect={ this.selectOption }
                        />
                    ))}
                </div>

                <i className={ classes.line }></i>
                <h3 className={ classes.subheader}>TIPO DE APLICACIÓN</h3>
                <div className={ classes.applicationsSection }>
                    { this.state.applications.map((it, index)=> (
                        <Option 
                            textwidth="192px"
                            key={ index } 
                            selected={ it.selected } 
                            img={ it.img } 
                            value={ it.value } 
                            name="applications"
                            onSelect={ this.selectOption }
                        />
                    ))}
                </div>
                <i className={ classes.line }></i>
                <h3 className={ classes.subheader}>DISEÑO</h3>
                <DesignsCarousel 
                    selectable
                    onChange={ this.selectLattice }
                />

                <div className={ classes.fileSection }>
                    <div>
                        <p className={ classes.noteC }>sube tu diseño</p>
                        <FileInput/>
                    </div>
                </div>

                <i className={ classes.line }></i>
                <h3 className={ classes.subheader}>MATERIAL</h3>
                <div className={ classes.materialsSection }>
                    { this.state.materials.map((it, index)=> (
                        <Option 
                            textwidth="155px"
                            imgwidth={ materialsWidth }
                            key={ index } 
                            selected={ it.selected } 
                            img={ it.img } 
                            value={ it.value } 
                            name="materials"
                            onSelect={ this.selectOption }
                        />
                    ))}
                </div>

                <i className={ classes.line }></i>
                <h3 className={ classes.subheader}>ACABADOS</h3>
                <p className={ classes.noteA }>* Solo aplica para MDF y Acero al carbón</p>
                <p className={ classes.noteB }>pintura</p>
                <div className={ classes.finishStylesSection }>
                    { this.state.finishStyles.map((it, index)=> (
                        <Option 
                            key={ index } 
                            selected={ it.selected } 
                            value={ it.value } 
                            name="finishStyles"
                            onSelect={ this.selectOption }
                        />
                    ))}
                </div>

                <i className={ classes.line }></i>
                <h3 className={ classes.subheader}>ESPESOR</h3>
                <div className={ classes.thicknessesSection }>
                    { this.state.thicknesses.map((it, index)=> (
                        <Option 
                            key={ index } 
                            selected={ it.selected } 
                            value={ it.value }
                            textwidth="180px"
                            name="thicknesses" 
                            onSelect={ this.selectOption }
                        />
                    ))}
                </div>

                <div className={ classes.sizeSection }>
                    <div>
                        <i className={ classes.line }></i>
                        <h3 className={ classes.subheader}><b>ANCHURA</b> EN MM</h3>
                        <p>* máximo <span>1220</span> mm (4')</p>
                        <input 
                            type="number" 
                            onChange={ (event) => this.handleInputChange("width", event.target.value) }
                        />
                    </div>
                    <div>
                        <i className={ classes.line }></i>
                        <h3 className={ classes.subheader}><b>ALTURA</b> EN MM</h3>
                        <p>* máximo <span>2440</span> mm (8')</p>
                        <input 
                            type="number" 
                            onChange={ (event) => this.handleInputChange("height", event.target.value) }
                        />
                    </div>
                </div>
                <div className={ classes.amountSection }>
                    <div>
                        <i className={ classes.line }></i>
                        <h3 className={ classes.subheader}><b>CANTIDAD A SOLICITAR</b></h3>
                        <p className={ classes.noteC }></p>
                        <input 
                            type="number" 
                            onChange={ (event) => this.handleInputChange("amount", event.target.value) }
                        />
                    </div>
                </div>

                <i className={ classes.line }></i>
                <p className={ classes.noteD }>obten la cotización de tu proyecto y la asesoria de nuestros expertos</p>

                <h3 className={ classes.subheader}>DEJANOS TUS DATOS</h3>
                <div className={ classes.informationSection }>
                    <span>
                        <p>nombre</p>
                        <input 
                            type="text"
                            placeholder="escribe tu nombre" 
                            onChange={ (event) => this.handleInputChange("name", event.target.value) }
                        /> 
                    </span>
                    <span>
                        <p>teléfono</p>
                        <input 
                            type="text"
                            placeholder="escribe tu teléfono" 
                            onChange={ (event) => this.handleInputChange("phone", event.target.value) }
                        /> 
                    </span>
                    <span>
                        <p>correo</p>
                        <input 
                            className={ classes.emailInput }
                            type="email"
                            placeholder="escribe tu correo" 
                            onChange={ (event) => this.handleInputChange("email", event.target.value) }
                        /> 
                        <button onClick={ this.sendForm } className={ classes.sendForm }>
                            <img src={ icono12 } alt="send" title="send"/>
                        </button>
                    </span>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Cotiza