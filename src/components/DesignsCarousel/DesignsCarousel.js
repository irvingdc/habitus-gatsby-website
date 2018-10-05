import React, { Component } from "react"
import classes from "./DesignsCarousel.module.css"
import Button from '../Button/Button'
import Lattice from '../Lattice/Lattice'
import { Link } from "gatsby"
import { 
    icono11, 
    icono12,
    celosia1,
    celosia2,
    celosia3,
    celosia4,
    celosia5,
    celosia6,
    celosia7,
    celosia8,
    celosia9,
    celosia10,
    celosia11,
    celosia12,
    celosia13,
    celosia14,
    celosia15,
    celosia16,
    celosia17,
    celosia18,
    celosia19,
    celosia20,
    celosia21,
    celosia22,
    celosia23,
    celosia24,
    celosia25,
    celosia26,
 } from "../../images"
import Header from "../Header/Header";

class DesignsCarousel extends Component {
    state={
        lattices: [
            { model: 1, img: celosia1 },
            { model: 2, img: celosia2 },
            { model: 3, img: celosia3 },
            { model: 4, img: celosia4 },
            { model: 5, img: celosia5 },
            { model: 6, img: celosia6 },
            { model: 7, img: celosia7 },
            { model: 8, img: celosia8 },
            { model: 9, img: celosia9 },
            { model: 10, img: celosia10 },
            { model: 11, img: celosia11 },
            { model: 12, img: celosia12 },
            { model: 13, img: celosia13 },
            { model: 14, img: celosia14 },
            { model: 15, img: celosia15 },
            { model: 16, img: celosia16 },
            { model: 17, img: celosia17 },
            { model: 18, img: celosia18 },
            { model: 19, img: celosia19 },
            { model: 20, img: celosia20 },
            { model: 21, img: celosia21 },
            { model: 22, img: celosia22 },
            { model: 23, img: celosia23 },
            { model: 24, img: celosia24 },
            { model: 25, img: celosia25 },
            { model: 26, img: celosia26 },
        ],
        latticeSelected: 6
    }   

    getLatticesToDisplay = () => {
        let selectedIndex = this.state.lattices.findIndex(it => it.model === this.state.latticeSelected)
        var lattices = [], i
        for(i=-4; i<=4; i++){
            var tempIndex = i + selectedIndex
            tempIndex = tempIndex > this.state.lattices.length-1 ? tempIndex - this.state.lattices.length : tempIndex
            tempIndex = tempIndex < 0 ? tempIndex + this.state.lattices.length : tempIndex
            lattices.push(this.state.lattices[tempIndex])
        }
        
        return lattices
    }

    previousLattice = () => {
        var latticeSelected = this.state.latticeSelected - 1
        latticeSelected = latticeSelected < 1 ? this.state.lattices.length : latticeSelected
        this.setState({ latticeSelected })
        if(this.props.onChange) this.props.onChange(this.state.lattices.find(it=>it.model===latticeSelected))
    }

    nextLattice = () => {
        var latticeSelected = this.state.latticeSelected + 1
        latticeSelected = latticeSelected > (this.state.lattices.length) ? 1 : latticeSelected
        this.setState({ latticeSelected })
        if(this.props.onChange) this.props.onChange(this.state.lattices.find(it=>it.model===latticeSelected))
    }

    render(){
        return (
            <div className={ [classes.container, (this.props.selectable ? classes.selectable : "")].join(' ') }>
                { !this.props.selectable ? <Header size="26px">DISEÑOS</Header> : null }
                <div className={ classes.carousel }>
                    <div className={ classes.fadeIzq } onClick={ this.previousLattice }>
                        <img src={ icono11 } alt="Izquierda" title="Izquierda"/>
                    </div>
                    <div className={ classes.grid }>
                        { this.getLatticesToDisplay().map((it, index) => <Lattice selectable={ this.props.selectable } key={ index } selected={ it.model === this.state.latticeSelected} img={ it.img } model={ it.model }/> ) }
                    </div>
                    <div className={ classes.fadeDer } onClick={ this.nextLattice }>
                        <img src={ icono12 } alt="Derecha" title="Derecha"/>
                    </div>
                </div>
                {   this.props.showbutton ? (
                        <Link to="/beta/disenos-y-materiales" style={{ textDecoration: "none"}}>
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