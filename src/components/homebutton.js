import React from "react";

const Homebutton = (props) => {
    return (
        <div title="Open Menu" className="home-button" role="button" onClick={props.handleBurgerClick} onKeyDown={props.handleEscKey} tabIndex={-1}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Homebutton;