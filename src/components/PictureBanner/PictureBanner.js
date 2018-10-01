import React from "react"
import { Link } from "gatsby"
import Button from "../Button/Button"
import classes from "./PictureBanner.module.css"
import SocialRow from "../SocialRow/SocialRow";

export default ({img, link, title, height, style, buttoncontent, buttonstyle, background,titlestyle, showsocial}) =>{
    let content = (
        <div className={ classes.content } style={{ ...style, height }}>
            <div className={ classes.background } style={{
                background:`url(${img}) center center / cover no-repeat`,
            }}></div>
            <div className={ classes.fade } style={{ background: (background ? background : "#00000088") }}>
                <div className={ classes.grid }>
                    { title ? <span style={ titlestyle }>{ title }</span> : null}
                    { buttoncontent ? <Button style={ buttonstyle }>{ buttoncontent }</Button> : null }
                </div>
            </div>
            { showsocial ? <SocialRow style={{
                position: "absolute",
                zIndex: "200",
                top: "25px",
                right: "0px",
                height: "calc(100% - 50px)",
                filter: "brightness(10)"
            }}/> : null }
        </div>
    )
    return (
        <div className={ classes.container }>
            { link ? <Link to={ link }>{ content }</Link> : content }
        </div>
    )
}