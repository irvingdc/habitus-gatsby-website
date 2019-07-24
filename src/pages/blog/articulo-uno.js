import React, { Component } from 'react'
import '../../main.module.less'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import {Helmet} from "react-helmet"
import BlogCarousel from '../../components/BlogCarousel/BlogCarousel'
import BlogCard from '../../components/BlogCard/BlogCard'
import BlogSideBar from '../../components/BlogSideBar/BlogSideBar'
import BLOG_ARTICLES from "../../articles";
import classes from "./article.module.css"

export default () => {
    let headerStyle = { letterSpacing:"22px", fontSize: "50px"}
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Habitus | Blog - Articulo Uno</title>
                <link rel="canonical" href="https://habitus.com.mx/blog/articulo-uno/" />
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
                <div className={ classes.section }>
                    <div className={ classes.text }>
                        <img src={ BLOG_ARTICLES[0].img }/>
                        <h2>{ BLOG_ARTICLES[0].title }</h2>
                        <h5>{ BLOG_ARTICLES[0].date }</h5>
                        <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.<br/>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                        </p>
                    </div>
                    <div className={ classes.similarArticles}>
                        <h2>ARTÍCULOS SIMILARES</h2>
                        <div>
                            <BlogCard {...BLOG_ARTICLES[1]} />
                            <BlogCard {...BLOG_ARTICLES[2]} />
                        </div>
                    </div>
                </div>
                
                <BlogSideBar/>
            </div>
            <Footer/>
        </div>
    )
}