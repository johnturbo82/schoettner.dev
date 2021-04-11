import React from 'react'

import SiteMeta from "./site_meta";
import Header from './header'
import BreadCrump from './breadcrump'
import Homebutton from "./homebutton";
import SideBar from "./sidebar";
import Content from './content'
import Footer from './footer'
import Instagram from './instagram'
import '../../style.scss'

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu_visible: false
        }
        this.escFunction = this.escFunction.bind(this);
    }

    escFunction(event) {
        if (event.keyCode === 27) {
            this.setState({ menu_visible: false });
        }
    }
    componentDidMount = () => {
        document.addEventListener("keydown", this.escFunction, false);
    }
    componentWillUnmount = () => {
        document.removeEventListener("keydown", this.escFunction, false);
    }

    toggleMenu = () => {
        this.setState({ menu_visible: !this.state.menu_visible });
    }
    closeMenuOnEsc = (event) => {
        if (event.key === "Escape") {
            this.setState({ menu_visible: false });
        }
    }
    closeMenu = (event) => {
        this.setState({ menu_visible: false });
    }

    render() {

        return (
            <div id="container" className="site-container">
                <Homebutton handleBurgerClick={this.toggleMenu} handleEscKey={this.closeMenuOnEsc} />
                {this.state.menu_visible && (
                    <SideBar path={this.props.path} handleClose={this.closeMenu} handleEscKey={this.closeMenuOnEsc} />
                )}
                <SiteMeta sitetitle={this.props.sitetitle} />
                <div id="site">
                    <Header />
                    <BreadCrump sitetitle={this.props.sitetitle} parent={this.props.parent} />
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