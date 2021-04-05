import React from "react";
import { scaleDown as Menu } from 'react-burger-menu'

const SideBar = (props) => {
  return (
    <Menu pageWrapId={props.pageWrapId} outerContainerId={props.outerContainerId} >
        <a id="home" className={(props.path === "/")? "menu-item active" : "menu-item"} href="/">Home</a>
        <a id="blog" className={(props.path === "/blog" || props.path.includes("/blog"))? "menu-item active" : "menu-item"} href="/blog">Blog</a>
        <a id="about" className={(props.path === "/about")? "menu-item active" : "menu-item"} href="/about">About</a>
        <a id="contact" className={(props.path === "/contact")? "menu-item active" : "menu-item"} href="/contact">Home</a>
    </Menu>
  );
};

export default SideBar;