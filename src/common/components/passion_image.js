import React from "react";
import { Link } from "gatsby";

const PassionImage = (props) => {
    return (
        <Link to={"/ueber-mich#" + props.image.target}>
            <div className="passion_icon" style={{ backgroundImage: `url(${props.image.src})` }}>
                <div className={props.image.position}>{props.image.title}</div>
                {props.image.subtitle &&
                    <span>{props.image.subtitle}</span>
                }
            </div>
        </Link>
    )
}

export default PassionImage