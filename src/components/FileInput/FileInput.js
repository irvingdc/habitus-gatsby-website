import React, { Component } from "react"
import classes from "./FileInput.module.css"
import { icono19 } from "../../images"

class FileInput extends Component{
    state = {
        files: [],
        name: ""
    }

    handleFileChange = (event) => {
        event.persist()
        let files = event.target.files
        if(files && files.length){
            this.setState({
                files: files[0],
                name: files[0].name
            })
        }
        else{
            this.setState({
                files: [],
                name: ""
            })
        }
    }

    render(){
        return (
			<div className={ classes.container }>
				<input 
					type="file" 
					name="file"
					onChange={ this.handleFileChange }
                    />
				<div>
		            <p>{ this.state.name } </p>
				</div>
                <img src={ icono19 } alt="Subir" title="Subir"/>
	        </div>
		)
    }
}

export default FileInput;