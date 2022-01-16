import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const PassionImage = (props) => {
    if (props.link) {
        return (
            <a className="content-image-link" href={props.link}>
                <figure className={!(props.orientation) ? "full" : props.orientation}>
                    <GatsbyImage image={props.src} alt={props.description} />
                    <figcaption>{props.description}</figcaption>
                </figure>
            </a>
        );
    } else {
        return (
            <figure className={!(props.orientation) ? "full" : props.orientation}>
                <GatsbyImage image={props.src} alt={props.description} />
                <figcaption>{props.description}</figcaption>
            </figure>
        );
    }
}

export default PassionImage