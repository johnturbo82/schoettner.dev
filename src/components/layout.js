import React from 'react'
import { Helmet } from "react-helmet"

import Header from './header'
import SideBar from "./sidebar";
import Content from './content'
import Footer from './footer'
import Instagram from './instagram'
import '../styles/style.scss'

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
                <SideBar pageWrapId={"site"} outerContainerId={"container"} path={this.props.path} />
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