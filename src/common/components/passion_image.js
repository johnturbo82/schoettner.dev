import React from "react";
import BackgroundImage from 'gatsby-background-image'

const PassionImage = (props) => {
    var position = props.image.position;
    return (
        <BackgroundImage className="passion_icon" fluid={props.image.src}>
            <div className={position}>{props.image.title}</div>
            {props.image.subtitle &&
                <span>{props.image.subtitle}</span>
            }
        </BackgroundImage>
    )
}

export default PassionImage