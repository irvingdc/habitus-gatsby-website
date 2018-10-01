import React, { Component } from "react"
import classes from "./DesignsCarousel.module.css"
import Button from '../Button/Button'
import Lattice from '../Lattice/Lattice'
import { Link } from "gatsby"
import { icono11, icono12, celosia1, celosia2, celosia3, celosia4, celosia5, celosia6, celosia7, celosia8, celosia9, celosia10, celosia11 } from "../../images"
import Header from "../Header/Header";

class DesignsCarousel extends Component {
    state={
        lattices: [
            { model: 3, img: celosia3 },
            { model: 4, img: celosia4 },
            { model: 5, img: celosia5 },
            { model: 6, img: celosia6 },
            { model: 7, img: celosia7 },
            { model: 8, img: celosia8 },
            { model: 9, img: celosia9 },
            { model: 10, img: celosia10 },
            { model: 11, img: celosia11 },
        ],
        latticeSelected: 7
    }   

    render(){
        return (
            <div className={ classes.container }>
                <Header size="26px">DISEÑOS</Header>
                <div className={ classes.carousel }>
                    <div className={ classes.fadeIzq }>
                        <img src={ icono11 } alt="Izquierda" title="Izquierda"/>
                    </div>
                    <div className={ classes.grid }>
                        { this.state.lattices.map((it, index) => <Lattice key={ index } selected={ it.model === this.state.latticeSelected} img={ it.img } model={ it.model }/> ) }
                    </div>
                    <div className={ classes.fadeDer }>
                        <img src={ icono12 } alt="Derecha" title="Derecha"/>
                    </div>
                </div>
                {   this.props.showbutton ? (
                        <Link to="/disenos-y-materiales" style={{ textDecoration: "none"}}>
                            <Button ghost style={{
                                fontSize: "14px",
                                margin: "20px auto",
                                padding: "8px 16px"
                            }}>VER DISEÑOS</Button>
                        </Link>
                    ) : null
                }
            </div>
        )
    }
}
export default DesignsCarousel