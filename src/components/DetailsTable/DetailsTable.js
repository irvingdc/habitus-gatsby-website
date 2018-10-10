import React from "react"
import classes from "./DetailsTable.module.css"
import { icono16, icono17 } from "../../images"

let renderContent = it => {
    if(typeof it === "string") return it
    else if(typeof it.val !== "string"){
        return (
            <p>
                { it.val ? <img src={ icono16 }/> : <img src={ icono17 }/> }
                { it.special ? <span>*</span> : ""}
            </p>
        )
    }
    else{
        return (
            <p>
                { it.val }
                { it.special ? <span>*</span> : ""}
            </p>
        )
    }
}

export default ({ data, withlines, scrollable }) =>{
    let linesStyle = withlines ? { borderBottom : "1px solid var(--habitus-gray)"} : {}
    return (
        <table className={ [classes.table, (scrollable ? classes.scrollable : "")].join(" ") }>
            <thead>
                <tr>
                    { data.head.map((it, index) => <th key={ index } style={ linesStyle }>{ it }</th> ) }
                </tr>
            </thead>
            <tbody>
                {
                    data.content.map((el, i) => (
                        <tr key={ i }>
                            { el.map((it, j) => <td key={ j } style={ linesStyle }>{ renderContent(it) }</td>) }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}