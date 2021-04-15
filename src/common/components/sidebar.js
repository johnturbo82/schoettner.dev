import React from "react";
import Moods from './moods'

import logo from "../../images/jt.svg"

const SideBar = (props) => {
    const sites = [
        ["/", "Startseite"],
        ["/blog", "Blog"],
        ["/ueber-mich", "Über mich"],
        ["/kontakt", "Kontakt"]
    ];

    return (
        <>
            <div className="overlay" aria-label="Close Menu" role="button" onClick={props.handleClose} onKeyDown={props.handleEscKey} tabIndex={-2}></div>
            <div className="sidebar">
                <span className="close" title="Close Menu" role="button" onClick={props.handleClose} onKeyDown={props.handleEscKey} tabIndex={-1}>x</span>
                <div className="sidebar_nav" >
                    <img className="logo" src={logo} alt="JT1 Logo" />
                    {sites.map((val, key) => (<a key={key} id={"menu_" + key} className={(props.path === val[0] || (props.path.includes("/blog") && val[0] == "/blog")) ? "menu-item active" : "menu-item"} href={val[0]}>{val[1]}</a>))}
                </div>
                <Moods />
            </div>
        </>
    );
};

export default SideBar;