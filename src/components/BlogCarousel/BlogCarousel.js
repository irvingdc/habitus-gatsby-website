import React, { Component } from "react"
import classes from "./BlogCarousel.module.css"
import BLOG_ARTICLES from "../../articles";
import { Link } from "gatsby";
import Button from '../Button/Button'
import { icono11, icono12 } from "../../images"

class BlogCarousel extends Component {
    state={
        index: 0,
    }

    componentDidMount(){
        if(this.props.index){
            this.setState({index: this.props.index})
        }
    }

    previous = () => {
        let newIndex = this.state.index - 1
        if(newIndex < 0) newIndex = BLOG_ARTICLES.length - 1
        this.setState({ index: newIndex })
    }

    next = () => {
        let newIndex = this.state.index + 1
        if(newIndex > BLOG_ARTICLES.length - 1) newIndex = 0
        this.setState({ index: newIndex })
    }

    render(){
        let article = BLOG_ARTICLES[this.state.index]
        return (
            <div className={ classes.container }>
                <div className={ classes.left } onClick={ this.previous }>
                    <img src={ icono11 } alt="Izquierda" title="Izquierda"/>
                </div>
                <div className={ classes.img } style={{background:`url(${ article.img }) center center / cover no-repeat`}}>
                    <div className={ classes.card }>
                        <h5>TEMA</h5>
                        <h3>{ article.title }</h3>
                        <p>{ article.date }</p>
                        <Link to={ article.href }>
                            <Button ghost style={{fontSize: "14px", margin:"auto", width:"120px"}}>VER MÁS</Button>
                        </Link>
                    </div>
                </div>
                <div className={ classes.right } onClick={ this.next }>
                    <img src={ icono12 } alt="Derecha" title="Derecha"/>
                </div>
            </div>
        )
    }
}
export default BlogCarousel