import React, { Component } from 'react'
import classes from './Toast.module.css'
import EventBus from 'eventbusjs'

class Toast extends Component{
	
	state = {
		visible: false,
		message: '',
		timeout: null
	}

	show = (event, msg) => {
		let message = typeof msg === "object" ? msg.text : msg
		let time = typeof msg === "object" ? msg.time : 5000
		clearTimeout(this.state.timeout)
		this.setState({
			visible: false,
		})
		setTimeout(()=>{
			this.setState({ 
				visible: true,
				message: message,
				timeout: setTimeout(()=>this.setState({ visible : false }), time)
			})
		},500)
	}

	componentDidMount(){
		EventBus.addEventListener("ALERT", this.show, this);
	}

	componentWillUnmount(){
		EventBus.addEventListener("ALERT", this.show, this);
	}

	render(){
		let visibilityClass = this.state.visible ? classes.Visible : null;
		return (
			<div className={[classes.Toast, visibilityClass].join(" ")}> { this.state.message } </div>
		)
	}
}

export default Toast;