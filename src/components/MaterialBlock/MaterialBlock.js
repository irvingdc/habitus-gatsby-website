import React from "react"
import classes from "./MaterialBlock.module.css"

export default ({ showdetails, title, img, description, thicknesses, finishedstyle }) =>{
    if(typeof window === "undefined") return <div></div>
    let padding = title==="ALUMINIO" && !showdetails && window.innerWidth < 770 ? "10px 80px" : "0px"
    return (
        <div className={ [classes.container, (showdetails ? classes.withDetails : "")].join(" ")} style={{ padding: padding }}>  
            { showdetails ? null : <h3 className={ classes.topTitle }>{ title }</h3> }
            <div className={ classes.img } style={{
                background:`url(${img}) center center / cover no-repeat`,
            }}></div>
            { showdetails ? (
                <div className={ classes.details }>
                    <h3 className={ classes.bottomTitle }>{ title }</h3>
                    <p className={ classes.description }>{ description }</p>
                    <h4>ESPESORES</h4>
                    <ul className={ thicknesses && thicknesses.length > 4 ? classes.double : "" }>
                        { thicknesses.map((it,index) => (
                            <li key={index}>
                                { it.thickness.toFixed(2) }
                                <span>{ it.unit }</span>
                            </li>
                        ))}
                    </ul>
                    <h4>ACABADOS</h4>
                    <p className={ classes.finishedstyle }>{ finishedstyle }</p>
                </div>) : null }
        </div>
    )
}