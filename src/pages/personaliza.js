import React, { Component, Fragment } from "react"
import classes from "./personaliza.module.css"
import '../main.module.css'
import Nav from '../components/Nav/Nav'
import Option from '../components/Option/Option'
import DesignsCarousel from '../components/DesignsCarousel/DesignsCarousel'
import PictureBanner from '../components/PictureBanner/PictureBanner'
import Footer from "../components/Footer/Footer"
import { icono12, img1, img2, img3, img4, img5, img14, img19 } from "../images"
import Header from "../components/Header/Header"
import FileInput from "../components/FileInput/FileInput"
import EventBus from 'eventbusjs'
import Toast from "../components/Toast/Toast"
import Message from "../components/Message/Message"
import ConfirmationMessage from "../components/ConfirmationMessage/ConfirmationMessage"
import Axios from "axios"
import { Helmet } from "react-helmet"

class Personaliza extends Component {

    state = {
        usage: [
            { value: "interior", selected: false },
            { value: "exterior", selected: false },
        ],
        latticeSelected: null,
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
            { value: "0.91 mm (cal.20)", selected: false },
            { value: "1.21 mm (cal.18)", selected: false },
            { value: "1.51 mm (cal.16)", selected: false },
            { value: "1.89 mm (cal.14)", selected: false },
            { value: "2.65 mm (cal.12)", selected: false },
            { value: "3.41 mm (cal 10)", selected: false },
            { value: '4.76 mm (3/16”)', selected: false },
            { value: '6.35 mm (1/4”)', selected: false },
            { value: "18 mm", selected: false },
            { value: "15 mm", selected: false },
            { value: "12 mm", selected: false },
            { value: "9 mm", selected: false },
            { value: "5.5 mm", selected: false },
            { value: "3 mm", selected: false },
            
        ],
        height: "",
        width: "",
        amount: "",
        name: "",
        phone: "",
        email: "",
        message: "",
        loading: false,
        file: null,
        showMessage: false,
        showConfirmationMessage: false,
        comments: ""
    }

    selectLattice = (latticeSelected) => {
        this.setState({ latticeSelected })
    }

    selectOption = (field, value) => {
        let state = {}
        switch(field){
            case "usage":
                let allowedMaterials = value === "interior" ? ["mdf","triplay","acero al carbón", "acero inoxidable", "aluminio"] : ["acero al carbón", "aluminio", "acero inoxidable"]
                state = {
                    usage: this.state.usage.map(it=> ({...it, selected: (it.value === value)})),
                    materials: this.state.materials.map(it=>({ ...it, selected:false, disabled: !allowedMaterials.find(val => val === it.value)})),
                    finishStyles: this.state.finishStyles.map(it=>({...it, selected:false, disabled: false})),
                    thicknesses: this.state.thicknesses.map(it=>({...it, selected:false})),
                }
                break;
            case "materials":
                state = {
                    materials: this.state.materials.map(it=> ({...it, selected: (it.value === value)})),
                    finishStyles: this.state.finishStyles.map(it=>({...it, selected:false, disabled: !(value === "mdf" || value === "acero al carbón")})),
                    thicknesses: this.state.thicknesses.map(it=>({...it, selected:false})),
                }
                break;
            case "finishStyles":
                state = {
                    finishStyles: this.state.finishStyles.map(it=> ({...it, selected: (it.value === value)})),
                    thicknesses: this.state.thicknesses.map(it=>({...it, selected:false})),
                }
                break;
            case "thicknesses":
                state = {
                    thicknesses: this.state.thicknesses.map(it=>({...it, selected: (it.value === value)})),
                }
                break;
            default:
                state = {error: true}
                break;
        }
        this.setState(state)
    }

    handleInputChange = (field, value) => {
        this.setState({ [field]: value })
    }

    filterThicknesses = () => {
        let material = this.state.materials.find(it => it.selected)
        let materialValue = material && material.value
        let options = []
        switch(materialValue){
            case "acero al carbón":
                options = [
                    '0.91 mm (cal.20)',
                    '1.21 mm (cal.18)',
                    '1.51 mm (cal.16)',
                    '1.89 mm (cal.14)',
                    '2.65 mm (cal.12)',
                    '3.41 mm (cal 10)',
                    '4.76 mm (3/16”)',
                    '6.35 mm (1/4”)',
                ]
            break;
            case "acero inoxidable":
                options = [
                    '0.91 mm (cal.20)',
                    '1.21 mm (cal.18)',
                    '1.51 mm (cal.16)',
                ]
            break;
            case "aluminio":
            options = [
                '0.91 mm (cal.20)',
                '1.89 mm (cal.14)',
                '2.65 mm (cal.12)',
                '3.41 mm (cal 10)',
            ]
            break;
            case "mdf":
                options = [
                    "18 mm",                  
                    "15 mm",
                    "12 mm",
                    "9 mm",
                    "5.5 mm",
                    "3 mm",
                ]
            break;
            case "triplay":
                options = [
                    "18 mm",                  
                    "12 mm",
                    "5.5 mm",
                ]
            break;
        }
        return this.state.thicknesses.filter(it=>options.find(option => it.value === option))
    }

    sendForm = event => {
        event.preventDefault()
        var errors = []
        if(this.state.height > 2440){
            EventBus.dispatch("ALERT", this, "La altura debe ser menor a 2440 mm.")
        }
        else if(this.state.width > 1220){
            EventBus.dispatch("ALERT", this, "La anchura debe ser menor a 1220 mm.")
        }
        else if( this.state.height === ""
            || this.state.width === ""
            || this.state.amount === ""
            || this.state.name === ""
            || this.state.phone === ""
            || this.state.email === ""
            || !this.state.usage.find(it=>it.selected)
            || !this.state.materials.find(it=>it.selected)
            || !this.state.thicknesses.find(it=>it.selected)
        ){
            if(this.state.amount === "") errors.push("cantidad")
            if(this.state.name === "") errors.push("nombre")
            if(this.state.phone === "") errors.push("teléfono")
            if(this.state.email === "") errors.push("correo")
            if(!this.state.usage.find(it=>it.selected)) errors.push("uso")
            if(!this.state.materials.find(it=>it.selected)) errors.push("material")
            if(!this.state.thicknesses.find(it=>it.selected)) errors.push("espesor")

            EventBus.dispatch("ALERT", this, { text:"Por favor completa los campos faltantes: "+errors.join(", ")+".", time: 9000 })
        }
        else{
            if(!this.state.loading){
                this.makeRequest()
            }
        }
    }

    makeRequest = () => {
        if(typeof window.fbq === "function") window.fbq('track', 'Lead');
        this.setState({
            message: "Tu solicitud está siendo procesada. Quedará lista en unos momentos.",
            showMessage: true,
            loading: true,
        })
        let url = "https://habitus.com.mx/contact.php"
        let formData = new FormData()

        let usage = this.state.usage.find(it=>it.selected)
        let latticeSelected = this.state.latticeSelected
        let material = this.state.materials.find(it=>it.selected)
        let finishStyle  = this.state.finishStyles.find(it=>it.selected)
        let thickness = this.state.thicknesses.find(it=>it.selected)

        formData.append("usage", usage ? usage.value : "")
        formData.append("lattice", latticeSelected ? latticeSelected.model : "")
        formData.append("material", material ? material.value : "")
        formData.append("style", finishStyle ? finishStyle.value : "")
        formData.append("thickness", thickness ? thickness.value : "")

        formData.append("width", this.state.width)
        formData.append("height", this.state.height)
        formData.append("amount", this.state.amount)
        formData.append("name", this.state.name)
        formData.append("phone", this.state.phone)
        formData.append("email", this.state.email)
        formData.append("comments", this.state.comments)
        formData.append("file", this.state.file)

        Axios({
            method: 'post',
            url: url,
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        }).then(result => {
                if(result.data === "success"){
                    setTimeout(()=>this.setState({
                        showMessage: false,
                        loading: false,
                    }),2000)
                    setTimeout(()=>this.setState({
                        showConfirmationMessage: true,
                    }),2700)
                }
                else throw result
            })
            .catch( error => {
                this.setState({loading: false, showMessage: false,})
                console.log("Error 2:",error)
            })   
    }

    selectFile = file => {
        this.setState({file})
    }

    render(){
        if(typeof window === "undefined") return <div></div>
        let bannerStyle = window.innerWidth < 770 ? {padding:"0px"} : {padding:"20px"}
        let headerStyle = window.innerWidth < 770 ? {letterSpacing: "5px", fontSize: "28px", margin: "30px 10px"} : {letterSpacing: "20px", fontSize: "28px", margin: "30px"}
        let materialsWidth = window.innerWidth < 1300 ?  undefined : "210px"
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
        return (
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Habitus | Personaliza</title>
                    <link rel="canonical" href="https://habitus.com.mx/personaliza/" />
                    <meta name="description" content="HABITUS pone a tu alcance soluciones en arquitectura e interiorismo en forma de celosías y páneles detalladamente diseñados, ideales para llenar de vida un espacio o cualquier proyecto."/>
                    <link rel="shortcut icon" href="https://habitus.com.mx/logo.png"/>
                </Helmet>
                <Toast/>
                <Message 
                    display={ this.state.showMessage }
                    close={ ()=>this.setState({showMessage: false}) } 
                    title={this.state.message}/>
                <ConfirmationMessage 
                    display={ this.state.showConfirmationMessage }
                    close={ ()=>this.setState({showConfirmationMessage: false}) } 
                />
                <Nav fixedlogo/>
                <form className={classes.container} onSubmit={ this.sendForm }>
                    <div style={bannerStyle}>
                        <PictureBanner
                            showsocial
                            img={ img14 }
                            height="500px"
                            background="linear-gradient(to right, #00000022, #00000022)"
                        />
                    </div>
                    <Header style={headerStyle}>EMPIEZA A CREAR TU CELOSÍA</Header>

                    <i className={ classes.line }></i>
                    <h3 className={ classes.subheader}>USO</h3>
                    <div className={ classes.usageSection }>
                        { this.state.usage.map((it, index)=> (
                            <Option 
                                key={ index } 
                                selected={ it.selected } 
                                value={ it.value } 
                                disabled={ it.disabled }
                                name="usage"
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
                            <FileInput change={this.selectFile}/>
                            <span>Formatos aceptados: PDF, AI or DWG</span>
                        </div>
                    </div>

                    <i className={ classes.line }></i>
                    <h3 className={ classes.subheader}>MATERIAL</h3>
                    <div className={ classes.materialsSection }>
                        { this.state.materials.map((it, index)=> (
                            <Option 
                                textwidth={window.innerWidth < 770 ? "140px" : "155px"}
                                imgheight={window.innerWidth < 770 ? "75px" : "100px"}
                                imgwidth={ materialsWidth }
                                disabled={ it.disabled }
                                key={ index } 
                                selected={ it.selected } 
                                img={ it.img } 
                                containerstyle={{padding: it.value==="aluminio" && window.innerWidth < 770 ? "10px 80px" : "0px"}}
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
                                disabled={ it.disabled }
                                name="finishStyles"
                                onSelect={ this.selectOption }
                            />
                        ))}
                    </div>

                    <i className={ classes.line }></i>
                    <h3 className={ classes.subheader}>ESPESOR</h3>
                    <div className={ classes.thicknessesSection }>
                        { this.filterThicknesses().map((it, index)=> (
                            <Option 
                                key={ index } 
                                selected={ it.selected } 
                                value={ it.value }
                                textwidth="180px"
                                disabled={ it.disabled }
                                name="thicknesses" 
                                onSelect={ this.selectOption }
                            />
                        ))}
                    </div>

                    <div className={ classes.sizeSection }>
                        <div>
                            <i className={ classes.line }></i>
                            <h3 className={ classes.subheader}><b>ANCHURA</b> EN MM</h3>
                            <p className={ this.state.width > 1220 ? classes.error : "" }>* máximo <span>1220</span> mm (4')</p>
                            <input
                                className={ this.state.width > 1220 ? classes.error : "" }
                                required 
                                max="1220"
                                type="number" 
                                onChange={ (event) => this.handleInputChange("width", event.target.value) }
                            />
                        </div>
                        <div>
                            <i className={ classes.line }></i>
                            <h3 className={ classes.subheader}><b>ALTURA</b> EN MM</h3>
                            <p className={ this.state.height > 2440 ? classes.error : "" }>* máximo <span>2440</span> mm (8')</p>
                            <input 
                                className={ this.state.height > 2440 ? classes.error : "" }
                                required
                                max="2440"
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
                                required
                                type="number" 
                                onChange={ (event) => this.handleInputChange("amount", event.target.value) }
                            />
                        </div>
                    </div>

                    <i className={ classes.line }></i>
                    <p className={ classes.noteD }>obten la cotización de tu celosía y la asesoria de nuestros expertos</p>

                    <h3 className={ classes.subheader}>DEJANOS TUS DATOS Y COMENTARIOS</h3>
                    <div className={ classes.informationSection }>
                        <span>
                            <p>cuéntanos más sobre tu proyecto</p>
                            <input 
                                style={{padding:"5px 35px 5px 5px",width:"250px"}}
                                required
                                type="text"
                                onChange={ (event) => this.handleInputChange("comments", event.target.value) }
                            /> 
                        </span>
                        <span>
                            <p>nombre</p>
                            <input 
                                required
                                type="text"
                                placeholder="escribe tu nombre" 
                                onChange={ (event) => this.handleInputChange("name", event.target.value) }
                            /> 
                        </span>
                        <span>
                            <p>teléfono</p>
                            <input 
                                required
                                type="text"
                                placeholder="escribe tu teléfono" 
                                onChange={ (event) => this.handleInputChange("phone", event.target.value) }
                            /> 
                        </span>
                        <span>
                            <p>correo</p>
                            <input 
                                style={{padding:"5px 35px 5px 5px",width:"250px"}}
                                required
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
                    <h3 className={ classes.middleMessage }>¿todavía no estás seguro?</h3>
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
                </form>
                <Footer/>
            </Fragment>
        )
    }
}
export default Personaliza