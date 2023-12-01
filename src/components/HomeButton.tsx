import React from "react";

type HomeButtonProps = {
    burgerClick(): void;
}

const HomeButton = (props: HomeButtonProps) => {
    const handleBurgerClick = () => {
        props.burgerClick();
    }

    return (
        <div title="Open Menu" className="home-button" role="button" onClick={handleBurgerClick} tabIndex={-1}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default HomeButton;