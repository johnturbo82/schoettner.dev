import React from 'react'
import { Link } from 'gatsby'

const BreadCrump = (props) => {
    return (
        <div className="breadcrump">
            <Link to="/">Home</Link>
            {props.parent && (
                <span>&nbsp;&raquo; <Link to={"/" + props.parent.toLowerCase()}>{props.parent}</Link></span>
            )}
            {props.sitetitle !== "Home" && (
                <span>&nbsp;&raquo; {props.sitetitle}</span>
            )}
        </div>
    )
}

export default BreadCrump