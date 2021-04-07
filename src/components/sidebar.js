import React from "react";
import logo from "../images/jt.png"

const SideBar = (props) => {
    return (
        <div className="overlay">
            <div className="sidebar">
                <span className="close" title="Close Menu" role="button" onClick={props.handleClose} onKeyDown={props.handleEscKey} tabIndex={-1}>x</span>
                <div className="sidebar_nav" >
                    <img className="logo" src={logo} alt="JT1 Logo" />
                    <a id="home" className={(props.path === "/") ? "menu-item active" : "menu-item"} href="/">Home</a>
                    <a id="blog" className={(props.path === "/blog" || props.path.includes("/blog")) ? "menu-item active" : "menu-item"} href="/blog">Blog</a>
                    <a id="about" className={(props.path === "/about") ? "menu-item active" : "menu-item"} href="/about">About</a>
                    <a id="contact" className={(props.path === "/contact") ? "menu-item active" : "menu-item"} href="/contact">Home</a>
                </div>
                <div className="sidebar_mood" >
                    Mooood
                </div>
            </div>
        </div>
    );
};

export default SideBar;