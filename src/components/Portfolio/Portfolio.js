import React, { Component } from "react"
import classes from "./Portfolio.module.css"
import Preview from "../Preview/Preview"
import PictureBanner from "../PictureBanner/PictureBanner"
import {img8, img15, img18, img7, img6, img11, img16, img13, } from "../../images"

class Portfolio extends Component {

    state={
        previewImg: null,
        showPreviewDialog: false
    }

    images = [
        img8,
        img15,
        img18,
        img7,
        img6,
        img11,
        img16,
        img13,
    ]

    showPreview = previewImg => {
        this.setState({ previewImg, showPreviewDialog: true })
    }

    showNextPreview = () => {
        let index = this.images.findIndex(it => it === this.state.previewImg) + 1
        if(index > this.images.length - 1) index = 0
        this.setState({previewImg: this.images[index]})
    }

    showPreviousPreview = () => {
        let index = this.images.findIndex(it => it === this.state.previewImg) - 1
        if(index < 0) index = this.images.length - 1
        this.setState({previewImg: this.images[index]})
    }

    render(){
        if(typeof window === "undefined") return <div></div>
        let containerStyle = window.innerWidth < 770 ? { gridTemplateColumns:"repeat(1, 1fr)" } : { gridTemplateColumns:"repeat(2, 1fr)" }
        return (
            <div className={ [classes.grid, classes.container].join(' ') } style={ containerStyle }>
                <Preview 
                    display={ this.state.showPreviewDialog }
                    close={ ()=>this.setState({showPreviewDialog: false})}
                    next={ this.showNextPreview }
                    previous={ this.showPreviousPreview }
                >{ <img src={ this.state.previewImg } alt="Ejemplo" title="Ejemplo" className={ classes.previewImg }/> }</Preview>
                <div className={ classes.grid } style={{gridTemplateRows:"repeat(2, 1fr)"}}>
                    <div className={ classes.grid } style={{gridTemplateColumns:"repeat(2, 1fr)"}}>
                        <PictureBanner img={ this.images[0] } click={ this.showPreview }/>
                        <div className={ classes.grid } style={{gridTemplateRows:"repeat(2, 1fr)"}}>
                        <PictureBanner img={ this.images[1] } click={ this.showPreview }/>
                        <PictureBanner img={ this.images[2] } click={ this.showPreview }/>
                        </div>
                    </div>            
                    <PictureBanner img={ this.images[3] } click={ this.showPreview }/>
                </div>
                <div className={ classes.grid } style={{gridTemplateRows:"repeat(3, 1fr)"}}>
                    <div className={ classes.grid } style={{gridTemplateColumns:"repeat(2, 1fr)"}}>
                        <PictureBanner img={ this.images[4] } click={ this.showPreview }/>
                        <PictureBanner img={ this.images[5] } click={ this.showPreview }/>
                    </div>
                    <PictureBanner img={ this.images[6] } click={ this.showPreview }/>
                    <PictureBanner img={ this.images[7] } click={ this.showPreview }/>
                </div>
            </div>
        )
    }
}
export default Portfolio;