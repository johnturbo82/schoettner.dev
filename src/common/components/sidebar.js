import React from "react";
import logo from "../../images/jt.png"
import jt1 from "../../images/moods/jt1.png"
import schoettner from "../../images/moods/schoettner.png"
import code from "../../images/moods/code.png"
import johnturbo from "../../images/moods/johnturbo.png"

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
                    <a id="contact" className={(props.path === "/contact") ? "menu-item active" : "menu-item"} href="/contact">Contact</a>
                </div>
                <div className="sidebar_mood" >
                    <h3>Mood Selector</h3>
                    <a href="https://schoettner.rocks" className="mood" style={{ backgroundImage: `url(${schoettner})` }} alt="schoettner.rocks">
                        <div>Software Developer</div>
                    </a>
                    <a href="https://johnturbo.com" className="mood" style={{ backgroundImage: `url(${johnturbo})` }} alt="johnturbo.com">
                        <div>Stars & Stripes</div>
                    </a>
                    <a href="https://jt1.rocks" className="mood" style={{ backgroundImage: `url(${jt1})` }} alt="jt1.rocks">
                        <div>Rock n' Roll</div>
                    </a>
                    <a href="https://schoettner.dev" className="mood" style={{ backgroundImage: `url(${code})` }} alt="schoettner.dev">
                        <div>Nerdy</div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SideBar;