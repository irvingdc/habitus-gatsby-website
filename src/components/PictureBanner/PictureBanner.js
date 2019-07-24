import React from "react"
import { Link } from "gatsby"
import Button from "../Button/Button"
import classes from "./PictureBanner.module.css"
import SocialRow from "../SocialRow/SocialRow";

export default ({img, link, title, height, style, special, buttoncontent, buttonstyle, background,titlestyle, showsocial, click}) =>{
    let content = (
        <div className={ classes.content } style={{ ...style, height, cursor: (click ? "pointer" : "auto") }} onClick={ click ? ()=>click(img) : ()=>{}}>
            <div className={ classes.background } style={{
                background: window.innerWidth < 550
                    ? `url(${img}) center ${special ? "left": "center"} / ${special ? "auto 80%": "cover"} no-repeat`
                    : `url(${img}) center center / ${special ? "contain": "cover"} no-repeat` ,
            }}></div>
            <div className={ classes.fade } style={{ background: (background ? background : "#00000022") }}>
                <div className={ classes.grid }>
                    { title ? <div className={ classes.title } style={ titlestyle }>{ title }</div> : null}
                    { buttoncontent ? <Button style={ buttonstyle }>{ buttoncontent }</Button> : null }
                </div>
            </div>
            { showsocial ? <SocialRow style={{
                position: "absolute",
                zIndex: "200",
                top: "25px",
                right: "0px",
                height: "calc(100% - 50px)",
            }}/> : null }
        </div>
    )
    return (
        <div className={ classes.container }>
            { link ? <Link to={ link }>{ content }</Link> : content }
        </div>
    )
}