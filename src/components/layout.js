import React from 'react'
import { Helmet } from "react-helmet"

import Header from './header'
import Content from './content'
import Footer from './footer'
import Instagram from './instagram'
import '../styles/style.scss'
import { scaleDown as Menu } from 'react-burger-menu'

class Layout extends React.Component {

    render() {
        return (
            <div id="container" className="site-container">
                <Helmet htmlAttributes={{
                    lang: 'de',
                }}>
                    <meta charSet="utf-8" />
                    <title>schoettner.rocks | Dev</title>
                </Helmet>
                <Menu pageWrapId={"site"} outerContainerId={"container"} >
                    <a id="home" className={(this.props.path === "/")? "menu-item active" : "menu-item"} href="/">Home</a>
                    <a id="blog" className={(this.props.path === "/blog" || this.props.path.includes("/blog"))? "menu-item active" : "menu-item"} href="/blog">Blog</a>
                    <a id="about" className={(this.props.path === "/about")? "menu-item active" : "menu-item"} href="/about">About</a>
                    <a id="contact" className={(this.props.path === "/contact")? "menu-item active" : "menu-item"} href="/contact">Home</a>
                </Menu>
                <div id="site">
                    <Header />
                    <Content type="text">
                        {this.props.children}
                    </Content>
                    <Content id="insta">
                        <Instagram />
                    </Content>
                    <Content id="footer">
                        <Footer />
                    </Content>
                </div>
            </div >
        )
    }
}

export default Layout