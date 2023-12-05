import React, { ReactNode } from 'react'

type ContentProps = {
    children: ReactNode;
    id?: string;
    type?: string;
};

const Content = (props: ContentProps) => {
    var contentClass = "content";
    if (props.type) {
        if (props.type === "content-full") {
            contentClass = props.type;
        } else {
            contentClass = contentClass + " " + props.type;
        }
    }

    return (
        <div id={props.id} className="content-container">
            <div className={contentClass}>
                {props.children}
            </div>
        </div>
    )
};

export default Content