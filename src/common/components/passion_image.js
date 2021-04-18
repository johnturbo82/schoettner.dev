import React from "react";
import BackgroundImage from 'gatsby-background-image'

const PassionImage = (props) => {
    console.log(props.image);
    return (
        <BackgroundImage className="passion_icon" fluid={props.image.src}>
            <div className={props.image.position}>{props.image.title}</div>
            {props.image.subtitle &&
                <span>{props.image.subtitle}</span>
            }
        </BackgroundImage>
    )
}

export default PassionImage