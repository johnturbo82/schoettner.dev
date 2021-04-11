import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../common/components/layout"

export const postQuery = graphql`
  query($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

class Post extends Component {
  render() {
    const post = this.props.data.wpPost

    return (
      <Layout sitetitle={post.title} path={this.props.path} parent="Blog">
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{__html: post.content}} />
      </Layout>
    )
  }
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Post