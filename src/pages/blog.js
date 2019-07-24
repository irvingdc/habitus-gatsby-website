import React, { Component } from 'react'
import 'src/main.module.less'
import Nav from 'components/Nav/Nav'
import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import {Helmet} from "react-helmet"
import BlogCarousel from 'components/BlogCarousel/BlogCarousel'
import classes from 'styles/blog.module.css'
import BlogCard from 'components/BlogCard/BlogCard'
import BlogSideBar from 'components/BlogSideBar/BlogSideBar'
import BLOG_ARTICLES from "src/articles";

class Blog extends Component{
    
    state={}

    render(){
        let headerStyle = { letterSpacing:"22px", fontSize: "50px"}
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Habitus | Blog</title>
                    <link rel="canonical" href="https://habitus.com.mx/blog/" />
                    <meta name="description" content="HABITUS pone a tu alcance soluciones en arquitectura e interiorismo en forma de celosías y páneles detalladamente diseñados, ideales para llenar de vida un espacio o cualquier proyecto."/>
                    <link rel="shortcut icon" href="https://habitus.com.mx/logo.png"/>
                </Helmet>
                <Nav fixedlogo/>
                <div className={ classes.introduction }>
                    <div className={ classes.whiteSection }>
                        <Header style={headerStyle}>BLOG</Header>
                    </div>
                    <p>ARTÍCULOS NUEVOS</p>
                    <BlogCarousel/>
                </div>
                <div className={ classes.flex }>
                    <div className={ classes.otherArticles}>
                        <h2>MÁS ARTÍCULOS</h2>
                        <BlogCard {...BLOG_ARTICLES[0]} />
                        <BlogCard {...BLOG_ARTICLES[1]} />
                    </div>
                    <BlogSideBar/>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Blog