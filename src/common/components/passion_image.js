import React from "react";
import BackgroundImage from 'gatsby-background-image'
import { Link } from "gatsby";

const PassionImage = (props) => {
    console.log(props.image);
    return (
        <Link to={"/ueber-mich#" + props.image.target}>
            <BackgroundImage className="passion_icon" fluid={props.image.src}>
                <div className={props.image.position}>{props.image.title}</div>
                {props.image.subtitle &&
                    <span>{props.image.subtitle}</span>
                }
            </BackgroundImage>
        </Link>
    )
}

export default PassionImage