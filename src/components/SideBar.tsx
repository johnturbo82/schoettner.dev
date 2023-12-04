import React from "react";
import { Link } from 'gatsby'
import logo from "../assets/images/jt.svg"
import Moods from "./Moods";

type SideBarProps = {
    handleClose(): void;
    path: string;
}

const SideBar = (props: SideBarProps) => {

    const sites = [
        ["/", "Startseite"],
        ["/projekte", "Projekte"],
        //["/blog", "Blog"],
        ["/ueber-mich", "Über mich"],
        ["/kontakt", "Kontakt"]
    ];

    return (
        <>
            <div className="overlay" aria-label="Close Menu" role="button" onClick={props.handleClose} tabIndex={-2}></div>
            <div className="sidebar">
                <div className="sidebar_nav" >
                    <Link to="/">
                        <img className="logo" src={logo.toString()} alt="JT1 Logo" />
                    </Link>
                    {sites.map((val, key) => (<Link key={key} id={"menu_" + key} className={(props.path === val[0] || (props.path.includes("/blog") && val[0] === "/blog") || (props.path.includes("/projekte") && val[0] === "/projekte")) ? "menu-item active" : "menu-item"} to={val[0]}>{val[1]}</Link>))}
                </div>
                <Moods path={props.path} />
            </div>
        </>
    );
};

export default SideBar;