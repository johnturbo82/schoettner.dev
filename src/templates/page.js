import React, { Component } from "react"
import { graphql } from "gatsby"

class Page extends Component {
    render() {
        const StaticPage = this.props.data.wpPage

        console.log(StaticPage);

        return (
            <>
                <h1>{StaticPage.title}</h1>
                <div>{StaticPage.content}</div>
            </>
        )
    }
}

export default Page

export const pageQuery = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      content
    }
    site {
      id
      siteMetadata {
        title
        description
      }
    }
  }
`