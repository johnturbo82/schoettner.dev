import React from 'react'

import '../../style.scss'
import BreadCrump from './breadcrump'
import Content from './content'
import Footer from './footer'
import Header from './header'
import Homebutton from "./homebutton";
import Instagram from './instagram'
import SideBar from "./sidebar";
import SimpleReactLightbox from 'simple-react-lightbox'
import SiteMeta from "./site_meta";
import { Link } from 'gatsby'

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu_visible: false
        }
        this.escFunction = this.escFunction.bind(this);
        this.topbarShow = this.topbarShow.bind(this);
    }

    escFunction(event) {
        if (event.keyCode === 27) {
            this.setState({ menu_visible: false });
        }
    }
    componentDidMount = () => {
        document.addEventListener("keydown", this.escFunction, false);
        document.addEventListener("scroll", this.topbarShow, false)
    }
    componentWillUnmount = () => {
        document.removeEventListener("keydown", this.escFunction, false);
        document.removeEventListener("scroll", this.topbarShow, false)
    }

    topbarShow = () => {
        var height = document.querySelector('.header').offsetHeight;
        var scrollY = window.pageYOffset;
        if (scrollY > (height - 60)) {
            if (!document.querySelector('.topbar').classList.contains("active")) {
                document.querySelector('.topbar').classList.add("active");
            }
        } else {
            if (document.querySelector('.topbar').classList.contains("active")) {
                document.querySelector('.topbar').classList.remove  ("active");
            }
        }
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
            <SimpleReactLightbox>
                <div id="container" className="site-container">
                    <div className="topbar">
                        <Homebutton handleBurgerClick={this.toggleMenu} handleEscKey={this.closeMenuOnEsc} />
                        <h1 className='site-title'>
                            <Link to='/'>schoettner.dev</Link>
                        </h1>
                    </div>
                    {this.state.menu_visible && (
                        <SideBar path={this.props.path} handleClose={this.closeMenu} handleEscKey={this.closeMenuOnEsc} />
                    )}
                    <SiteMeta bodyclass={this.props.bodyclass} sitetitle={this.props.sitetitle} path={this.props.path} />
                    <div id="site">
                        <Header />
                        <BreadCrump sitetitle={this.props.sitetitle} parent={this.props.parent} />
                        <Content type="text">
                            <div className="stage">
                                {this.props.children}
                            </div>
                        </Content>
                        <Content id="insta">
                            <Instagram />
                        </Content>
                        <Content id="footer">
                            <Footer />
                        </Content>
                    </div>
                </div >
            </SimpleReactLightbox>
        )
    }
}

export default Layout