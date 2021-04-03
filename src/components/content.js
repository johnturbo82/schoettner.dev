import React from 'react'

import '../styles/style.scss'

class Content extends React.Component {

    render() {
        return (
            <div id={this.props.id} className="content-container">
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Content