import React from 'react'
import { Link } from 'gatsby'

type BreadCrumpProps = {
    parent?: string;
    sitetitle?: string;
}

const BreadCrump = (props: BreadCrumpProps) => {
    return (
        <div className="breadcrump-container">
            <div className="breadcrump">
                <Link to="/">Startseite</Link>
                {props.parent && (
                    <span>&nbsp;&raquo; <Link to={"/" + props.parent.toLowerCase()}>{props.parent}</Link></span>
                )}
                {props.sitetitle !== "Startseite" && (
                    <span>&nbsp;&raquo; {props.sitetitle}</span>
                )}
            </div>
        </div>
    )
}

export default BreadCrump