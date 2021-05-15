import React from "react";
import Img from "gatsby-image"

const PassionImage = (props) => {
    if (props.link) {
        return(
            <a className="content-image-link" href={props.link}>
                <figure className={!(props.orientation) ? "full" : props.orientation}>
                    <Img fluid={props.src} alt={props.description} />
                    <figcaption>{props.description}</figcaption>
                </figure>
            </a>
        )
    } else {
        return (
            <figure className={!(props.orientation) ? "full" : props.orientation}>
                <Img fluid={props.src} alt={props.description} />
                <figcaption>{props.description}</figcaption>
            </figure>
        )
    }
}

export default PassionImage