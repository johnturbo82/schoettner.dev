import React from 'react'
import { Helmet } from "react-helmet"

import Header from './header'
import Content from './content'
import Footer from './footer'
import Instagram from './instagram'
import '../styles/style.scss'
import { scaleRotate as Menu } from 'react-burger-menu'

var styles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '36px',
        top: '36px'
    },
    bmBurgerBars: {
        background: '#12355b'
    },
    bmBurgerBarsHover: {
        background: '#a90000'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: '#bdc3c7'
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%'
    },
    bmMenu: {
        background: '#12355b',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    },
    menuItem: {

    }
}

class Layout extends React.Component {

    render() {
        return (
            <div id="container" className="site-container">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>schoettner.rocks | Dev</title>
                </Helmet>
                <Menu styles={styles} pageWrapId={"site"} outerContainerId={"container"} >
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="blog" className="menu-item" href="/blog">Blog</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                </Menu>
                <div id="site">
                    <Content>
                        <Header />
                    </Content>
                    <Content>
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