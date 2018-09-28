import React, { Component } from "react"
import classes from "./DesignsCarousel.module.css"
import Button from '../Button/Button'
import Lattice from '../Lattice/Lattice'

class DesignsCarousel extends Component {
    state={
        lattices: [
            { model: 3, img: "/static/img/celosias/celosia3.svg" },
            { model: 4, img: "/static/img/celosias/celosia4.svg" },
            { model: 5, img: "/static/img/celosias/celosia5.svg" },
            { model: 6, img: "/static/img/celosias/celosia6.svg" },
            { model: 7, img: "/static/img/celosias/celosia7.svg" },
            { model: 8, img: "/static/img/celosias/celosia8.svg" },
            { model: 9, img: "/static/img/celosias/celosia9.svg" },
            { model: 10, img: "/static/img/celosias/celosia10.svg" },
            { model: 11, img: "/static/img/celosias/celosia11.svg" },
        ],
        latticeSelected: 7
    }   

    render(){
        return (
            <div className={ classes.container }>
                <h3>DISEÑOS</h3>
                <div className={ classes.carousel }>
                    <div className={ classes.fadeIzq }>
                        <img src="/static/img/icono11.svg" alt="Izquierda" title="Izquierda"/>
                    </div>
                    <div className={ classes.grid }>
                        { this.state.lattices.map((it, index) => <Lattice key={ index } selected={ it.model === this.state.latticeSelected} img={ it.img } model={ it.model }/> ) }
                    </div>
                    <div className={ classes.fadeDer }>
                        <img src="/static/img/icono12.svg" alt="Derecha" title="Derecha"/>
                    </div>
                </div>
                <Button ghost style={{
                    fontSize: "14px",
                    margin: "20px auto",
                    padding: "8px 16px"
                }}>VER DISEÑOS</Button>
            </div>
        )
    }
}
export default DesignsCarousel