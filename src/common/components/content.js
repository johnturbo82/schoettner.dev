import React from 'react'

class Content extends React.Component {
    render() {
        var contentClass = "content";
        if (this.props.type) {
            contentClass = contentClass + " " + this.props.type;
        }
        return (
            <div id={this.props.id} className="content-container">
                <div className={contentClass}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Content